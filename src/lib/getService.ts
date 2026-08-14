import config from '@payload-config'
import { getPayload } from 'payload'
import { cache } from 'react'
import { hardwareEngineering, softwareEngineering, type ServiceDetailData } from '@/data/services'
import type { ImageData } from '@/data/homepage'

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
  const heroImage = media(source.heroImage, { alt: title }) ?? { alt: title }
  return {
    title,
    slug: text(source.slug),
    eyebrow: text(source.eyebrow, 'Dienst'),
    shortSummary: text(source.summary),
    heroTitle: text(source.heroTitle, title),
    heroIntro: text(source.heroIntro, text(source.summary)),
    heroImage,
    intro: text(intro?.title) && text(intro?.body) ? { title: text(intro?.title), body: text(intro?.body), image: media(intro?.image) } : undefined,
    capabilities: list(source.capabilities).map((item) => ({ title: text(item.title), description: text(item.description) })).filter((item) => item.title && item.description),
    expertise: list(source.relatedExpertise).map((item) => ({ title: text(item.title), summary: text(item.summary), href: `/expertises/${text(item.slug)}` })).filter((item) => item.title && item.href !== '/expertises/'),
    relatedServices: list(source.relatedServices).map((item) => ({ title: text(item.title), summary: text(item.summary), href: `/wat-we-doen/${text(item.slug)}` })).filter((item) => item.title && item.href !== '/wat-we-doen/'),
    standards: list(source.standards).filter((item) => item.validated === true).map((item) => ({ name: text(item.name), type: text(item.type), description: text(item.description) })).filter((item) => item.name),
    process: list(source.process).map((item, index) => ({ number: text(item.number, String(index + 1).padStart(2, '0')), title: text(item.title), description: text(item.description) })).filter((item) => item.title && item.description),
    projects: list(source.relatedProjects).map((item) => ({ title: text(item.title), meta: [text(item.sector), text(item.period) || (typeof item.year === 'number' ? String(item.year) : '')].filter(Boolean).join(' · '), href: `/projecten/${text(item.slug)}`, image: media(item.featuredImage, { alt: text(item.title) }) ?? { alt: text(item.title) } })).filter((item) => item.title && item.href !== '/projecten/'),
    faq: list(source.faq).map((item) => ({ question: text(item.question), answer: text(item.answer) })).filter((item) => item.question && item.answer),
    cta: text(cta?.title) && text(cta?.buttonLabel) && text(cta?.buttonHref) ? { title: text(cta?.title), body: text(cta?.body), buttonLabel: text(cta?.buttonLabel), buttonHref: text(cta?.buttonHref) } : undefined,
    seo: { title: text(seo?.metaTitle, `${title} | Powerspex`), description: text(seo?.metaDescription, text(source.summary)), openGraphImage: media(seo?.openGraphImage) },
  }
}

function completeService(data: ServiceDetailData): ServiceDetailData {
  const fallback = [softwareEngineering, hardwareEngineering].find((item) => item.slug === data.slug)
  if (!fallback) return data
  return {
    ...data,
    intro: data.intro ?? fallback.intro,
    capabilities: data.capabilities.length > 0 ? data.capabilities : fallback.capabilities,
    expertise: data.expertise.length > 0 ? data.expertise : fallback.expertise,
    relatedServices: data.relatedServices.length > 0 ? data.relatedServices : fallback.relatedServices,
    process: data.process.length > 0 ? data.process : fallback.process,
    faq: data.faq.length > 0 ? data.faq : fallback.faq,
    cta: data.cta ?? fallback.cta,
  }
}

async function loadService(slug: string): Promise<ServiceDetailData | null> {
  try {
    const payload = await getPayload({ config })
    const result = await payload.find({ collection: 'services', depth: 2, draft: false, limit: 1, where: { slug: { equals: slug } } })
    const source = row(result.docs[0])
    if (source) return completeService(mapService(source))
  } catch (error) {
    console.warn('Service CMS data is unavailable; checking the approved fallback.', error instanceof Error ? error.message : error)
  }
  return [softwareEngineering, hardwareEngineering].find((service) => service.slug === slug) ?? null
}

export const getService = cache(loadService)
