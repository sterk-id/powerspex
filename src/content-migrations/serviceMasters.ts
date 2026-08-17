import type { Payload } from 'payload'
import { hardwareEngineering, production } from '@/data/services'

const serviceMasters = [
  { source: hardwareEngineering, group: 'engineering' as const },
  { source: production, group: 'realisatie' as const },
]

export type ServiceMasterResult = {
  slug: string
  action: 'created' | 'existing'
  id: number | string
}

export async function ensureServiceMasters(payload: Payload): Promise<ServiceMasterResult[]> {
  const results: ServiceMasterResult[] = []

  for (const { source, group } of serviceMasters) {
    const existing = await payload.find({
      collection: 'services',
      depth: 0,
      draft: true,
      limit: 1,
      overrideAccess: true,
      where: { slug: { equals: source.slug } },
    })
    const service = existing.docs[0]

    if (service) {
      if (service._status !== 'published') throw new Error(`Canonical service ${source.slug} exists but is not published`)
      results.push({ slug: source.slug, action: 'existing', id: service.id })
      continue
    }

    const created = await payload.create({
      collection: 'services',
      draft: false,
      overrideAccess: true,
      data: {
        title: source.title,
        slug: source.slug,
        group,
        eyebrow: source.eyebrow,
        summary: source.shortSummary,
        heroTitle: source.heroTitle,
        heroIntro: source.heroIntro,
        capabilitiesEyebrow: source.capabilitiesEyebrow,
        capabilitiesTitle: source.capabilitiesTitle,
        seo: {
          metaTitle: source.seo.title,
          metaDescription: source.seo.description,
        },
        _status: 'published',
      },
    })
    results.push({ slug: source.slug, action: 'created', id: created.id })
  }

  return results
}
