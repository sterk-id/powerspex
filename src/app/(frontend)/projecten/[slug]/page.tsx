import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ProjectDetail } from '@/components/ProjectDetail'
import { getProject } from '@/lib/getProjects'
import { getSiteURL } from '@/lib/siteURL'

type Props = { params: Promise<{ slug: string }> }
export const revalidate = 60
export const dynamic = 'force-dynamic'

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = await getProject(slug)
  if (!project) return { title: 'Project niet gevonden | Powerspex', robots: { index: false, follow: false } }
  const origin = getSiteURL()
  const canonical = new URL(`/projecten/${project.slug}`, origin).toString()
  const og = project.seo.openGraphImage ?? project.image
  return {
    title: { absolute: project.seo.title }, description: project.seo.description, alternates: { canonical },
    openGraph: { type: 'article', locale: 'nl_NL', siteName: 'Powerspex', title: project.seo.title, description: project.seo.description, url: canonical, ...(og.src ? { images: [{ url: new URL(og.src, origin), alt: og.alt }] } : {}) },
  }
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const project = await getProject(slug)
  if (!project) notFound()
  return <ProjectDetail project={project} />
}
