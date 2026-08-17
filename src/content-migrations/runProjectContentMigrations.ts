import { createHash } from 'node:crypto'
import { readFile } from 'node:fs/promises'
import path from 'node:path'
import type { Payload } from 'payload'
import { projectContentMigrations } from './projects'
import type { ProjectContentMigration, ProjectMediaSource } from './projects/types'
import { ensureServiceMasters } from './serviceMasters'

type Row = Record<string, unknown>

export type ProjectContentMigrationResult = {
  slug: string
  action: 'created' | 'updated' | 'unchanged'
  missingServices: string[]
  missingExpertise: string[]
  media: 'created' | 'reused' | 'none'
}

const asRow = (value: unknown): Row => typeof value === 'object' && value !== null ? value as Row : {}

const comparable = (actual: unknown, desired: unknown): unknown => {
  if (Array.isArray(desired)) {
    const source = Array.isArray(actual) ? actual : []
    return desired.map((item, index) => comparable(source[index], item))
  }
  if (typeof desired === 'object' && desired !== null) {
    const source = asRow(actual)
    return Object.fromEntries(Object.entries(desired as Row).map(([key, value]) => [key, comparable(source[key], value)]))
  }
  if (typeof desired === 'string' && (typeof actual === 'number' || typeof actual === 'string')) return String(actual)
  return actual ?? null
}

const isEqual = (actual: unknown, desired: unknown) => JSON.stringify(comparable(actual, desired)) === JSON.stringify(desired)

async function resolveRelationships(payload: Payload, collection: 'services' | 'expertise', slugs: string[]) {
  const ids: Array<number | string> = []
  const missing: string[] = []

  for (const slug of slugs) {
    const result = await payload.find({
      collection,
      depth: 0,
      draft: false,
      limit: 1,
      overrideAccess: true,
      where: { and: [{ slug: { equals: slug } }, { _status: { equals: 'published' } }] },
    })
    const relation = result.docs[0]
    if (relation) ids.push(relation.id)
    else missing.push(slug)
  }

  return { ids, missing }
}

async function ensureMedia(payload: Payload, source?: ProjectMediaSource) {
  if (!source) return { id: undefined, action: 'none' as const }

  const assetPath = path.resolve(source.assetPath)
  const digest = createHash('sha256').update(await readFile(assetPath)).digest('hex')
  if (digest !== source.sha256) throw new Error(`Media checksum mismatch for ${source.assetPath}`)

  const existing = await payload.find({
    collection: 'media',
    depth: 0,
    limit: 1,
    overrideAccess: true,
    where: { filename: { equals: source.filename } },
  })
  if (existing.docs[0]) {
    const mediaRoot = process.env.PAYLOAD_MEDIA_DIR || 'public/media'
    const storedPath = path.resolve(mediaRoot, source.filename)
    const storedDigest = createHash('sha256').update(await readFile(storedPath)).digest('hex')
    if (storedDigest !== source.sha256) throw new Error(`Existing Media record does not match ${source.filename}`)
    return { id: existing.docs[0].id, action: 'reused' as const }
  }

  const media = await payload.create({
    collection: 'media',
    overrideAccess: true,
    filePath: assetPath,
    data: { alt: source.alt },
  })
  return { id: media.id, action: 'created' as const }
}

async function migrateProject(payload: Payload, migration: ProjectContentMigration): Promise<ProjectContentMigrationResult> {
  const [services, expertise, media] = await Promise.all([
    resolveRelationships(payload, 'services', migration.serviceSlugs),
    resolveRelationships(payload, 'expertise', migration.expertiseSlugs),
    ensureMedia(payload, migration.media),
  ])

  const desired: Row = {
    ...migration.data,
    slug: migration.slug,
    services: services.ids,
    expertise: expertise.ids,
    ...(media.id ? {
      featuredImage: media.id,
      seo: { ...asRow(migration.data.seo), openGraphImage: media.id },
    } : {}),
    _status: 'draft',
  }

  const existing = await payload.find({
    collection: 'projects',
    depth: 0,
    draft: true,
    limit: 1,
    overrideAccess: true,
    where: { slug: { equals: migration.slug } },
  })
  const project = existing.docs[0]

  if (!project) {
    await payload.create({ collection: 'projects', draft: true, overrideAccess: true, data: desired })
    return { slug: migration.slug, action: 'created', missingServices: services.missing, missingExpertise: expertise.missing, media: media.action }
  }

  if (project._status === 'published') throw new Error(`Refusing to overwrite published project ${migration.slug}`)
  if (isEqual(project, desired)) {
    return { slug: migration.slug, action: 'unchanged', missingServices: services.missing, missingExpertise: expertise.missing, media: media.action }
  }
  if (project.editorial?.contentApproved === true) throw new Error(`Refusing to overwrite content-approved draft ${migration.slug}`)

  await payload.update({ collection: 'projects', id: project.id, draft: true, overrideAccess: true, data: desired })
  return { slug: migration.slug, action: 'updated', missingServices: services.missing, missingExpertise: expertise.missing, media: media.action }
}

export async function runProjectContentMigrations(payload: Payload) {
  const serviceMasters = await ensureServiceMasters(payload)
  const results: ProjectContentMigrationResult[] = []
  for (const migration of projectContentMigrations) results.push(await migrateProject(payload, migration))
  return { serviceMasters, projects: results }
}
