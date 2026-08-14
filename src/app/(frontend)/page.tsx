import type { Metadata } from 'next'
import { Homepage } from '@/components/Homepage'
import { getHomepageData } from '@/lib/getHomepage'
import { getSiteURL } from '@/lib/siteURL'

export const revalidate = 60
export const dynamic = 'force-dynamic'

export async function generateMetadata(): Promise<Metadata> {
  const data = await getHomepageData()
  const origin = getSiteURL()
  const canonical = new URL('/', origin).toString()

  return {
    title: { absolute: data.seo.title },
    description: data.seo.description,
    alternates: { canonical },
    openGraph: {
      type: 'website',
      locale: 'nl_NL',
      siteName: 'Powerspex',
      title: data.seo.title,
      description: data.seo.description,
      url: canonical,
      ...(data.hero.image.src ? { images: [{ url: new URL(data.hero.image.src, origin), alt: data.hero.image.alt }] } : {}),
    },
  }
}

export default async function Page() {
  const data = await getHomepageData()
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Powerspex',
    url: getSiteURL(),
  }

  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }} /><div id="main-content"><Homepage data={data} /></div></>
}
