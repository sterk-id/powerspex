import config from '@payload-config'
import { getPayload } from 'payload'
import { cache } from 'react'
import { homepage, type HomepageData, type ImageData } from '@/data/homepage'

type RecordValue = Record<string, unknown>

const record = (value: unknown): RecordValue | undefined => typeof value === 'object' && value !== null ? value as RecordValue : undefined
const text = (value: unknown, fallback = '') => typeof value === 'string' && value.trim() ? value : fallback
const media = (value: unknown, fallback: ImageData): ImageData => {
  const item = record(value)
  return item ? { src: text(item.url) || undefined, alt: text(item.alt, fallback.alt) } : fallback
}

async function loadHomepageData(): Promise<HomepageData> {
  try {
    const payload = await getPayload({ config })
    const value = await payload.findGlobal({ slug: 'homepage', depth: 2, draft: false })
    const source = value as unknown as RecordValue
    const services = Array.isArray(source.featuredServices) ? source.featuredServices.map(record).filter(Boolean) as RecordValue[] : []
    const expertise = Array.isArray(source.featuredExpertise) ? source.featuredExpertise.map(record).filter(Boolean) as RecordValue[] : []
    const projects = Array.isArray(source.featuredProjects) ? source.featuredProjects.map(record).filter(Boolean) as RecordValue[] : []
    const stats = Array.isArray(source.stats) ? source.stats.map(record).filter(Boolean) as RecordValue[] : []
    const primary = record(source.primaryCta)
    const secondary = record(source.secondaryCta)

    return {
      seo: {
        title: text(source.metaTitle, homepage.seo.title),
        description: text(source.metaDescription, homepage.seo.description),
      },
      hero: {
        eyebrow: text(source.heroEyebrow, homepage.hero.eyebrow),
        title: text(source.heroTitle, homepage.hero.title),
        intro: text(source.heroIntro, homepage.hero.intro),
        primaryCta: { label: text(primary?.label, homepage.hero.primaryCta.label), href: text(primary?.href, homepage.hero.primaryCta.href) },
        secondaryCta: { label: text(secondary?.label, homepage.hero.secondaryCta.label), href: text(secondary?.href, homepage.hero.secondaryCta.href) },
        image: media(source.heroImage, homepage.hero.image),
      },
      intro: {
        eyebrow: text(source.introEyebrow, homepage.intro.eyebrow),
        title: text(source.introTitle, homepage.intro.title),
        body: text(source.introBody, homepage.intro.body),
        primaryImage: media(source.introPrimaryImage, homepage.intro.primaryImage),
        secondaryImage: media(source.introSecondaryImage, homepage.intro.secondaryImage),
      },
      services: services.length ? services.map((item) => ({ title: text(item.title), description: text(item.summary), href: `/wat-we-doen/${text(item.slug)}`, image: media(item.heroImage, { alt: text(item.title) }) })) : homepage.services,
      expertise: expertise.length ? expertise.map((item) => ({ title: text(item.title), href: `/expertises/${text(item.slug)}` })) : homepage.expertise,
      impact: { eyebrow: text(source.impactEyebrow, homepage.impact.eyebrow), title: text(source.impactTitle, homepage.impact.title), body: text(source.impactBody, homepage.impact.body), stats: stats.map((item) => ({ value: text(item.value), label: text(item.label) })) },
      projects: projects.length ? projects.map((item) => ({ title: text(item.title), meta: [text(item.sector), typeof item.year === 'number' ? String(item.year) : ''].filter(Boolean).join(' · '), href: `/projecten/${text(item.slug)}`, image: media(item.featuredImage, { alt: text(item.title) }) })) : homepage.projects,
      news: homepage.news,
      contact: { title: text(source.contactTitle, homepage.contact.title), body: text(source.contactBody, homepage.contact.body) },
    }
  } catch (error) {
    console.warn('Homepage CMS data is unavailable; rendering the safe fallback.', error instanceof Error ? error.message : error)
    return homepage
  }
}

export const getHomepageData = cache(loadHomepageData)
