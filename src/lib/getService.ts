import config from '@payload-config'
import { getPayload } from 'payload'
import { cache } from 'react'
import { hardwareEngineering, processAutomation, production, projectEngineering, serviceMaintenanceInspection, softwareEngineering, type ServiceDetailData } from '@/data/services'
import type { ImageData } from '@/data/homepage'
import { mapPublicProjectSummary } from '@/lib/getProjects'

type Row = Record<string, unknown>
const row = (value: unknown): Row | undefined => typeof value === 'object' && value !== null ? value as Row : undefined
const text = (value: unknown, fallback = '') => typeof value === 'string' && value.trim() ? value.trim() : fallback
const list = (value: unknown): Row[] => Array.isArray(value) ? value.map(row).filter(Boolean) as Row[] : []
const media = (value: unknown, fallback?: ImageData): ImageData | undefined => {
  const item = row(value)
  const src = text(item?.url, fallback?.src)
  const alt = text(item?.alt, fallback?.alt)
  return src ? { src, alt } : fallback
}

function mapService(source: Row): ServiceDetailData {
  const intro = row(source.intro)
  const cta = row(source.cta)
  const seo = row(source.seo)
  const title = text(source.title)
  const heroImage = media(source.heroImage) ?? { alt: title }
  return {
    title,
    slug: text(source.slug),
    eyebrow: text(source.eyebrow),
    shortSummary: text(source.summary),
    heroTitle: text(source.heroTitle),
    heroIntro: text(source.heroIntro),
    heroImage,
    intro: text(intro?.title) && text(intro?.body) ? { title: text(intro?.title), body: text(intro?.body), image: media(intro?.image) } : undefined,
    capabilitiesEyebrow: text(source.capabilitiesEyebrow, 'Wat we doen'),
    capabilitiesTitle: text(source.capabilitiesTitle, 'Werkzaamheden'),
    capabilities: list(source.capabilities).map((item) => ({ title: text(item.title), description: text(item.description) })).filter((item) => item.title && item.description),
    contentSections: [],
    expertise: list(source.relatedExpertise).map((item) => ({ title: text(item.title), summary: text(item.summary), href: `/expertises/${text(item.slug)}` })).filter((item) => item.title && item.href !== '/expertises/'),
    relatedServices: list(source.relatedServices).map((item) => ({ title: text(item.title), summary: text(item.summary), href: `/wat-we-doen/${text(item.slug)}` })).filter((item) => item.title && item.href !== '/wat-we-doen/'),
    standards: list(source.standards).filter((item) => item.validated === true).map((item) => ({ name: text(item.name), type: text(item.type), description: text(item.description) })).filter((item) => item.name),
    process: list(source.process).map((item, index) => ({ number: text(item.number, String(index + 1).padStart(2, '0')), title: text(item.title), description: text(item.description) })).filter((item) => item.title && item.description),
    projects: list(source.relatedProjects).filter((item) => item._status === 'published').map(mapPublicProjectSummary).map((item) => ({ title: item.title, meta: [item.sector, item.period || item.year].filter(Boolean).join(' · '), href: `/projecten/${item.slug}`, image: item.image })).filter((item) => item.title && item.href !== '/projecten/'),
    faq: list(source.faq).map((item) => ({ question: text(item.question), answer: text(item.answer) })).filter((item) => item.question && item.answer),
    cta: text(cta?.title) && text(cta?.buttonLabel) && text(cta?.buttonHref) ? { title: text(cta?.title), body: text(cta?.body), buttonLabel: text(cta?.buttonLabel), buttonHref: text(cta?.buttonHref) } : undefined,
    seo: { title: text(seo?.metaTitle), description: text(seo?.metaDescription), openGraphImage: media(seo?.openGraphImage) },
  }
}

function completeService(data: ServiceDetailData): ServiceDetailData {
  const fallback = [projectEngineering, processAutomation, softwareEngineering, hardwareEngineering, production, serviceMaintenanceInspection].find((item) => item.slug === data.slug)
  if (!fallback) return data
  return {
    ...data,
    eyebrow: data.eyebrow || fallback.eyebrow,
    shortSummary: data.shortSummary || fallback.shortSummary,
    heroTitle: data.heroTitle || fallback.heroTitle,
    heroIntro: data.heroIntro || fallback.heroIntro,
    heroImage: data.heroImage.src ? data.heroImage : fallback.heroImage,
    intro: data.intro ?? fallback.intro,
    capabilities: data.capabilities.length > 0 ? data.capabilities : fallback.capabilities,
    expertise: data.expertise.length > 0 ? data.expertise : fallback.expertise,
    relatedServices: data.relatedServices.length > 0 ? data.relatedServices : fallback.relatedServices,
    process: data.process.length > 0 ? data.process : fallback.process,
    faq: data.faq.length > 0 ? data.faq : fallback.faq,
    cta: data.cta ?? fallback.cta,
    seo: {
      title: data.seo.title || fallback.seo.title,
      description: data.seo.description || fallback.seo.description,
      openGraphImage: data.seo.openGraphImage ?? fallback.seo.openGraphImage,
    },
  }
}

async function loadService(slug: string): Promise<ServiceDetailData | null> {
  try {
    const payload = await getPayload({ config })
    const result = await payload.find({ collection: 'services', depth: 2, draft: false, limit: 1, where: { slug: { equals: slug } } })
    const source = row(result.docs[0])
    if (source) {
      const data = completeService(mapService(source))
      if (data.projects.length === 0 && (typeof source.id === 'number' || typeof source.id === 'string')) {
        const projects = await payload.find({ collection: 'projects', depth: 2, draft: false, limit: 6, overrideAccess: false, where: { and: [{ services: { contains: source.id } }, { _status: { equals: 'published' } }] } })
        data.projects = projects.docs.map(mapPublicProjectSummary).map((item) => ({
          title: item.title, meta: [item.sector, item.period || item.year].filter(Boolean).join(' · '), href: `/projecten/${item.slug}`, image: item.image,
        })).filter((item) => item.title && item.href !== '/projecten/')
      }
      return data
    }
  } catch (error) {
    console.warn('Service CMS data is unavailable; checking the approved fallback.', error instanceof Error ? error.message : error)
  }
  return [projectEngineering, processAutomation, softwareEngineering, hardwareEngineering, production, serviceMaintenanceInspection].find((service) => service.slug === slug) ?? null
}

export const getService = cache(loadService)
