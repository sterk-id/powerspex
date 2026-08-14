import type { MetadataRoute } from 'next'
import { getSiteURL } from '@/lib/siteURL'

export default function robots(): MetadataRoute.Robots {
  const origin = getSiteURL()
  return { rules: { userAgent: '*', allow: '/', disallow: ['/admin/', '/api/'] }, sitemap: `${origin}/sitemap.xml` }
}
