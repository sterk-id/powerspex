import type { Metadata } from 'next'
import { ProjectOverview } from '@/components/ProjectOverview'
import { getProjects } from '@/lib/getProjects'
import { getSiteURL } from '@/lib/siteURL'

export const revalidate = 60
export const dynamic = 'force-dynamic'

export async function generateMetadata(): Promise<Metadata> {
  const canonical = new URL('/projecten', getSiteURL()).toString()
  return {
    title: { absolute: 'Projecten | Powerspex' },
    description: 'Bekijk projectreferenties van Powerspex in industriële engineering, automatisering en uitvoering.',
    alternates: { canonical },
    openGraph: { type: 'website', locale: 'nl_NL', siteName: 'Powerspex', title: 'Projecten | Powerspex', description: 'Projectreferenties van Powerspex in industriële engineering, automatisering en uitvoering.', url: canonical },
  }
}

export default async function ProjectsPage() {
  return <ProjectOverview projects={await getProjects()} />
}
