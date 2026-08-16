import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ExpertiseDetail } from '@/components/ExpertiseDetail'
import { getExpertise } from '@/lib/getExpertise'
import { getSiteURL } from '@/lib/siteURL'

type Props = { params: Promise<{ slug: string }> }
export const revalidate = 60
export const dynamic = 'force-dynamic'

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const expertise = await getExpertise(slug)
  if (!expertise) return { title: 'Expertise niet gevonden | Powerspex', robots: { index: false, follow: false } }
  const origin = getSiteURL()
  const canonical = new URL(`/expertises/${expertise.slug}`, origin).toString()
  const og = expertise.seo.openGraphImage ?? expertise.heroImage
  return { title: { absolute: expertise.seo.title }, description: expertise.seo.description, alternates: { canonical }, openGraph: { type: 'website', locale: 'nl_NL', siteName: 'Powerspex', title: expertise.seo.title, description: expertise.seo.description, url: canonical, ...(og.src ? { images: [{ url: new URL(og.src, origin), alt: og.alt }] } : {}) } }
}

export default async function ExpertisePage({ params }: Props) {
  const { slug } = await params
  const expertise = await getExpertise(slug)
  if (!expertise) notFound()
  return <ExpertiseDetail expertise={expertise} />
}
