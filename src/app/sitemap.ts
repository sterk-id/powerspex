import type { MetadataRoute } from 'next'
import { getSiteURL } from '@/lib/siteURL'

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = getSiteURL()
  return [{ url: origin, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 }]
}
