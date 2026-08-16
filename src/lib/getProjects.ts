import config from '@payload-config'
import { getPayload } from 'payload'
import { cache } from 'react'
import { approvedProjectFallbacks, type ProjectDetailData, type ProjectSummaryData } from '@/data/projects'
import type { ImageData } from '@/data/homepage'

type Row = Record<string, unknown>
const row = (value: unknown): Row | undefined => typeof value === 'object' && value !== null ? value as Row : undefined
const text = (value: unknown, fallback = '') => typeof value === 'string' && value.trim() ? value.trim() : fallback
const list = (value: unknown): Row[] => Array.isArray(value) ? value.map(row).filter(Boolean) as Row[] : []
const contains = (value: string, needle: string) => Boolean(needle) && value.toLocaleLowerCase('nl-NL').includes(needle.toLocaleLowerCase('nl-NL'))
const publicText = (value: unknown, client: string, clientIsPublic: boolean, fallback = '') => {
  const result = text(value, fallback)
  return !clientIsPublic && contains(result, client) ? '' : result
}
const media = (value: unknown, fallback: ImageData, client: string, clientIsPublic: boolean): ImageData => {
  const item = row(value)
  const src = text(item?.url, fallback.src)
  const rawAlt = text(item?.alt, fallback.alt)
  const alt = !clientIsPublic && contains(rawAlt, client) ? fallback.alt : rawAlt
  return { src: src || undefined, alt }
}

function mapProject(source: Row): ProjectDetailData {
  const client = text(source.client)
  const clientIsPublic = source.clientIsPublic === true
  const internalTitle = text(source.title)
  const neutralTitle = publicText(internalTitle, client, clientIsPublic) || text(source.sector, 'Industrieel project')
  const fallbackImage = { alt: `Projectbeeld ${neutralTitle}` }
  const image = media(source.featuredImage, fallbackImage, client, clientIsPublic)
  const cta = row(source.cta)
  const seo = row(source.seo)
  const period = publicText(source.period, client, clientIsPublic)
  const year = typeof source.year === 'number' ? String(source.year) : ''
  const summary = publicText(source.summary, client, clientIsPublic)

  return {
    title: neutralTitle,
    slug: text(source.slug),
    summary,
    client: clientIsPublic ? client || undefined : undefined,
    clientIsPublic,
    sector: publicText(source.sector, client, clientIsPublic) || undefined,
    year: year || undefined,
    period: period || undefined,
    image,
    heroEyebrow: publicText(source.heroEyebrow, client, clientIsPublic, 'Project'),
    heroTitle: publicText(source.heroTitle, client, clientIsPublic, neutralTitle) || neutralTitle,
    heroIntro: publicText(source.heroIntro, client, clientIsPublic, summary),
    contentSections: list(source.contentSections).map((item) => ({
      eyebrow: publicText(item.eyebrow, client, clientIsPublic) || undefined,
      title: publicText(item.title, client, clientIsPublic),
      body: publicText(item.body, client, clientIsPublic),
      image: row(item.image) ? media(item.image, { alt: `Projectbeeld ${neutralTitle}` }, client, clientIsPublic) : undefined,
      layout: item.layout === 'left' ? 'left' as const : 'right' as const,
      theme: item.theme === 'dark' ? 'dark' as const : item.theme === 'mist' ? 'mist' as const : 'light' as const,
    })).filter((item) => item.title && item.body),
    disciplines: [
      ...list(source.services).map((item) => ({ title: text(item.title), href: `/wat-we-doen/${text(item.slug)}`, type: 'Dienst' as const })),
      ...list(source.expertise).map((item) => ({ title: text(item.title), href: `/expertises/${text(item.slug)}`, type: 'Expertise' as const })),
    ].filter((item) => item.title && !item.href.endsWith('/')),
    gallery: list(source.gallery).map((item) => ({
      image: media(item.image, { alt: `Projectbeeld ${neutralTitle}` }, client, clientIsPublic),
      caption: publicText(item.caption, client, clientIsPublic) || undefined,
    })).filter((item) => item.image.src),
    cta: publicText(cta?.title, client, clientIsPublic) && text(cta?.buttonLabel) && text(cta?.buttonHref) ? {
      title: publicText(cta?.title, client, clientIsPublic),
      body: publicText(cta?.body, client, clientIsPublic),
      buttonLabel: text(cta?.buttonLabel),
      buttonHref: text(cta?.buttonHref),
    } : undefined,
    seo: {
      title: publicText(seo?.metaTitle, client, clientIsPublic, `${neutralTitle} | Powerspex`) || `${neutralTitle} | Powerspex`,
      description: publicText(seo?.metaDescription, client, clientIsPublic, summary),
      openGraphImage: row(seo?.openGraphImage) ? media(seo?.openGraphImage, image, client, clientIsPublic) : image,
    },
  }
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
    const result = await payload.find({ collection: 'projects', depth: 2, draft: false, limit: 1, where: { slug: { equals: slug } } })
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
    const result = await payload.find({ collection: 'projects', depth: 2, draft: false, limit: 100, sort: '-year' })
    const projects = result.docs.map(row).filter(Boolean).map((item) => mapProject(item as Row))
    if (projects.length) return projects
  } catch (error) {
    console.warn('Project overview CMS data is unavailable; rendering the approved fallback.', error instanceof Error ? error.message : error)
  }
  return approvedProjectFallbacks
}

export const getProject = cache(loadProject)
export const getProjects = cache(loadProjects)
