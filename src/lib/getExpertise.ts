import config from '@payload-config'
import { getPayload } from 'payload'
import { cache } from 'react'
import { cybersecurityOTSecurity, explosiveSafety, functionalSafety, simulations, type ExpertiseDetailData } from '@/data/expertise'
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

function mapExpertise(source: Row): ExpertiseDetailData {
  const intro = row(source.intro)
  const cta = row(source.cta)
  const seo = row(source.seo)
  const title = text(source.title)
  const heroImage = media(source.heroImage, { alt: title }) ?? { alt: title }
  return {
    title, slug: text(source.slug), eyebrow: text(source.eyebrow, 'Specialistische expertise'), shortSummary: text(source.summary),
    heroTitle: text(source.heroTitle, title), heroIntro: text(source.heroIntro, text(source.summary)), heroImage,
    intro: text(intro?.title) && text(intro?.body) ? { title: text(intro?.title), body: text(intro?.body), image: media(intro?.image) } : undefined,
    capabilitiesEyebrow: text(source.topicsEyebrow, title), capabilitiesTitle: text(source.topicsTitle, 'Expertisegebieden'),
    capabilities: list(source.topics).map((item) => ({ title: text(item.title), description: text(item.description) })).filter((item) => item.title && item.description),
    contentSections: list(source.contentSections).map((item) => ({ eyebrow: text(item.eyebrow), title: text(item.title), body: text(item.body), image: media(item.image), layout: item.layout === 'left' ? 'left' as const : 'right' as const, theme: item.theme === 'dark' ? 'dark' as const : item.theme === 'mist' ? 'mist' as const : 'light' as const })).filter((item) => item.title && item.body),
    relatedServices: list(source.relatedServices).map((item) => ({ title: text(item.title), summary: text(item.summary), href: `/wat-we-doen/${text(item.slug)}` })).filter((item) => item.title && item.href !== '/wat-we-doen/'),
    standards: list(source.standards).filter((item) => item.validated === true).map((item) => ({ name: text(item.name), type: text(item.type), description: text(item.description) })).filter((item) => item.name),
    process: list(source.process).map((item, index) => ({ number: text(item.number, String(index + 1).padStart(2, '0')), title: text(item.title), description: text(item.description) })).filter((item) => item.title && item.description),
    projects: list(source.relatedProjects).map((item) => ({ title: text(item.title), meta: [text(item.sector), typeof item.year === 'number' ? String(item.year) : ''].filter(Boolean).join(' · '), href: `/projecten/${text(item.slug)}`, image: media(item.featuredImage, { alt: text(item.title) }) ?? { alt: text(item.title) } })).filter((item) => item.title && item.href !== '/projecten/'),
    faq: list(source.faq).map((item) => ({ question: text(item.question), answer: text(item.answer) })).filter((item) => item.question && item.answer),
    cta: text(cta?.title) && text(cta?.buttonLabel) && text(cta?.buttonHref) ? { title: text(cta?.title), body: text(cta?.body), buttonLabel: text(cta?.buttonLabel), buttonHref: text(cta?.buttonHref) } : undefined,
    seo: { title: text(seo?.metaTitle, `${title} | Powerspex`), description: text(seo?.metaDescription, text(source.summary)), openGraphImage: media(seo?.openGraphImage) },
  }
}

function completeExpertise(data: ExpertiseDetailData): ExpertiseDetailData {
  const fallback = approvedExpertise[data.slug]
  if (!fallback) return data
  return { ...data, intro: data.intro ?? fallback.intro, capabilities: data.capabilities.length ? data.capabilities : fallback.capabilities, relatedServices: data.relatedServices.length ? data.relatedServices : fallback.relatedServices, faq: data.faq.length ? data.faq : fallback.faq, cta: data.cta ?? fallback.cta }
}

const approvedExpertise: Record<string, ExpertiseDetailData> = {
  [cybersecurityOTSecurity.slug]: cybersecurityOTSecurity,
  [functionalSafety.slug]: functionalSafety,
  [explosiveSafety.slug]: explosiveSafety,
  [simulations.slug]: simulations,
}

async function loadExpertise(slug: string): Promise<ExpertiseDetailData | null> {
  try {
    const payload = await getPayload({ config })
    const result = await payload.find({ collection: 'expertise', depth: 2, draft: false, limit: 1, where: { slug: { equals: slug } } })
    const source = row(result.docs[0])
    if (source) return completeExpertise(mapExpertise(source))
  } catch (error) {
    console.warn('Expertise CMS data is unavailable; checking the approved fallback.', error instanceof Error ? error.message : error)
  }
  return approvedExpertise[slug] ?? null
}

export const getExpertise = cache(loadExpertise)
