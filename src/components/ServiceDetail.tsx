import type { ServiceDetailData } from '@/data/services'
import { DetailPage } from './DetailPage'

export function ServiceDetail({ service }: { service: ServiceDetailData }) {
  return <DetailPage detail={{ ...service, featuredLinks: service.expertise, relatedLinks: service.relatedServices }} />
}
