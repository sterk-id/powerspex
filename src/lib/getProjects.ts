import config from '@payload-config'
import { getPayload } from 'payload'
import { cache } from 'react'
import { approvedProjectFallbacks, type ProjectDetailData, type ProjectSummaryData } from '@/data/projects'
import type { ImageData } from '@/data/homepage'

type Row = Record<string, unknown>
const row = (value: unknown): Row | undefined => typeof value === 'object' && value !== null ? value as Row : undefined
const text = (value: unknown, fallback = '') => typeof value === 'string' && value.trim() ? value.trim() : fallback
const list = (value: unknown): Row[] => Array.isArray(value) ? value.map(row).filter(Boolean) as Row[] : []
const escapePattern = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
const contains = (value: string, needle: string) => Boolean(needle) && new RegExp(`(?<![\\p{L}\\p{N}])${escapePattern(needle)}(?![\\p{L}\\p{N}])`, 'iu').test(value)
const publicText = (value: unknown, restrictedTerms: string[], fallback = '') => {
  const result = text(value, fallback)
  return restrictedTerms.some((term) => contains(result, term)) ? '' : result
}
const media = (value: unknown, fallback: ImageData, restrictedTerms: string[]): ImageData => {
  const item = row(value)
  const src = text(item?.url, fallback.src)
  const rawAlt = text(item?.alt, fallback.alt)
  const alt = restrictedTerms.some((term) => contains(rawAlt, term)) ? fallback.alt : rawAlt
  return { src: src || undefined, alt }
}

export function mapProject(source: Row): ProjectDetailData {
  const client = text(source.client)
  const clientIsPublic = source.clientIsPublic === true
  const endClient = text(source.endClient)
  const endClientIsPublic = source.endClientIsPublic === true
  const location = text(source.location)
  const locationIsPublic = source.locationIsPublic === true
  const partners = list(source.partners)
  const restrictedTerms = [
    !clientIsPublic ? client : '',
    !endClientIsPublic ? endClient : '',
    !locationIsPublic ? location : '',
    ...partners.filter((item) => item.isPublic !== true).map((item) => text(item.name)),
  ].filter(Boolean)
  const internalTitle = text(source.title)
  const neutralTitle = publicText(internalTitle, restrictedTerms) || text(source.sector, 'Industrieel project')
  const fallbackImage = { alt: `Projectbeeld ${neutralTitle}` }
  const image = media(source.featuredImage, fallbackImage, restrictedTerms)
  const cta = row(source.cta)
  const seo = row(source.seo)
  const period = publicText(source.period, restrictedTerms)
  const year = typeof source.year === 'number' ? String(source.year) : ''
  const summary = publicText(source.summary, restrictedTerms)

  return {
    title: neutralTitle,
    slug: text(source.slug),
    summary,
    client: clientIsPublic ? client || undefined : undefined,
    clientIsPublic,
    endClient: endClientIsPublic ? endClient || undefined : undefined,
    location: locationIsPublic ? location || undefined : undefined,
    partners: partners.filter((item) => item.isPublic === true && text(item.name)).map((item) => ({
      name: text(item.name),
      role: text(item.role) || undefined,
    })),
    sector: publicText(source.sector, restrictedTerms) || undefined,
    year: year || undefined,
    period: period || undefined,
    image,
    heroEyebrow: publicText(source.heroEyebrow, restrictedTerms, 'Project'),
    heroTitle: publicText(source.heroTitle, restrictedTerms, neutralTitle) || neutralTitle,
    heroIntro: publicText(source.heroIntro, restrictedTerms, summary),
    contentSections: list(source.contentSections).map((item) => ({
      eyebrow: publicText(item.eyebrow, restrictedTerms) || undefined,
      title: publicText(item.title, restrictedTerms),
      body: publicText(item.body, restrictedTerms),
      image: row(item.image) ? media(item.image, { alt: `Projectbeeld ${neutralTitle}` }, restrictedTerms) : undefined,
      layout: item.layout === 'left' ? 'left' as const : 'right' as const,
      theme: item.theme === 'dark' ? 'dark' as const : item.theme === 'mist' ? 'mist' as const : 'light' as const,
    })).filter((item) => item.title && item.body),
    disciplines: [
      ...list(source.services).map((item) => ({ title: text(item.title), href: `/wat-we-doen/${text(item.slug)}`, type: 'Dienst' as const })),
      ...list(source.expertise).map((item) => ({ title: text(item.title), href: `/expertises/${text(item.slug)}`, type: 'Expertise' as const })),
    ].filter((item) => item.title && !item.href.endsWith('/')),
    gallery: list(source.gallery).map((item) => ({
      image: media(item.image, { alt: `Projectbeeld ${neutralTitle}` }, restrictedTerms),
      caption: publicText(item.caption, restrictedTerms) || undefined,
    })).filter((item) => item.image.src),
    cta: publicText(cta?.title, restrictedTerms) && text(cta?.buttonLabel) && text(cta?.buttonHref) ? {
      title: publicText(cta?.title, restrictedTerms),
      body: publicText(cta?.body, restrictedTerms),
      buttonLabel: text(cta?.buttonLabel),
      buttonHref: text(cta?.buttonHref),
    } : undefined,
    seo: {
      title: publicText(seo?.metaTitle, restrictedTerms, `${neutralTitle} | Powerspex`) || `${neutralTitle} | Powerspex`,
      description: publicText(seo?.metaDescription, restrictedTerms, summary),
      openGraphImage: row(seo?.openGraphImage) ? media(seo?.openGraphImage, image, restrictedTerms) : image,
    },
  }
}

export function mapPublicProjectSummary(source: unknown): ProjectSummaryData {
  return mapProject(row(source) ?? {})
}

function completeProject(data: ProjectDetailData): ProjectDetailData {
  const fallback = approvedProjectFallbacks.find((item) => item.slug === data.slug)
  if (!fallback || !data.clientIsPublic) return data
  return {
    ...data,
    summary: data.summary || fallback.summary,
    heroIntro: data.heroIntro || fallback.heroIntro,
    contentSections: data.contentSections.length ? data.contentSections : fallback.contentSections,
    disciplines: data.disciplines.length ? data.disciplines : fallback.disciplines,
    cta: data.cta ?? fallback.cta,
  }
}

async function loadProject(slug: string): Promise<ProjectDetailData | null> {
  try {
    const payload = await getPayload({ config })
    const result = await payload.find({
      collection: 'projects', depth: 2, draft: false, limit: 1, overrideAccess: false,
      where: { and: [{ slug: { equals: slug } }, { _status: { equals: 'published' } }] },
    })
    const source = row(result.docs[0])
    if (source) return completeProject(mapProject(source))
  } catch (error) {
    console.warn('Project CMS data is unavailable; checking the approved fallback.', error instanceof Error ? error.message : error)
  }
  return approvedProjectFallbacks.find((project) => project.slug === slug) ?? null
}

async function loadProjects(): Promise<ProjectSummaryData[]> {
  try {
    const payload = await getPayload({ config })
    const result = await payload.find({
      collection: 'projects', depth: 2, draft: false, limit: 100, sort: '-year', overrideAccess: false,
      where: { _status: { equals: 'published' } },
    })
    const projects = result.docs.map(row).filter(Boolean).map((item) => mapProject(item as Row))
    if (projects.length) return projects
  } catch (error) {
    console.warn('Project overview CMS data is unavailable; rendering the approved fallback.', error instanceof Error ? error.message : error)
  }
  return approvedProjectFallbacks
}

export const getProject = cache(loadProject)
export const getProjects = cache(loadProjects)
