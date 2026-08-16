import type { ImageData } from './homepage'

export type DetailContentData = {
  title: string
  slug: string
  eyebrow: string
  shortSummary: string
  heroTitle: string
  heroIntro: string
  heroImage: ImageData
  intro?: { title: string; body: string; image?: ImageData }
  capabilitiesEyebrow?: string
  capabilitiesTitle?: string
  capabilities: Array<{ title: string; description: string }>
  contentSections?: Array<{ eyebrow: string; title: string; body: string; image?: ImageData; layout: 'left' | 'right'; theme: 'light' | 'mist' | 'dark' }>
  standards: Array<{ name: string; type: string; description: string }>
  process: Array<{ number: string; title: string; description: string }>
  projects: Array<{ title: string; meta: string; href: string; image: ImageData }>
  faq: Array<{ question: string; answer: string }>
  cta?: { title: string; body: string; buttonLabel: string; buttonHref: string }
  seo: { title: string; description: string; openGraphImage?: ImageData }
}

export type DetailPageData = DetailContentData & {
  featuredLinks: Array<{ title: string; summary: string; href: string }>
  relatedLinks: Array<{ title: string; summary: string; href: string }>
}

export type DetailPageConfig = { relatedLinksEyebrow?: string }
