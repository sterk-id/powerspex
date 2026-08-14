import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ServiceDetail } from '@/components/ServiceDetail'
import { getService } from '@/lib/getService'
import { getSiteURL } from '@/lib/siteURL'

type Props = { params: Promise<{ slug: string }> }
export const revalidate = 60
export const dynamic = 'force-dynamic'

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = await getService(slug)
  if (!service) return { title: 'Dienst niet gevonden | Powerspex', robots: { index: false, follow: false } }
  const origin = getSiteURL()
  const canonical = new URL(`/wat-we-doen/${service.slug}`, origin).toString()
  const og = service.seo.openGraphImage ?? service.heroImage
  return {
    title: { absolute: service.seo.title }, description: service.seo.description,
    alternates: { canonical },
    openGraph: { type: 'website', locale: 'nl_NL', siteName: 'Powerspex', title: service.seo.title, description: service.seo.description, url: canonical, ...(og.src ? { images: [{ url: new URL(og.src, origin), alt: og.alt }] } : {}) },
  }
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params
  const service = await getService(slug)
  if (!service) notFound()
  return <ServiceDetail service={service} />
}
