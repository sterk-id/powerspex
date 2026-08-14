import { Homepage } from '@/components/Homepage'
import { getHomepageData } from '@/lib/getHomepage'

export const revalidate = 60

export default async function Page() {
  const data = await getHomepageData()
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Powerspex',
    url: process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000',
  }

  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }} /><div id="main-content"><Homepage data={data} /></div></>
}
