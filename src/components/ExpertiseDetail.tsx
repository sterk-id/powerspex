import type { ExpertiseDetailData } from '@/data/expertise'
import { DetailPage } from './DetailPage'

export function ExpertiseDetail({ expertise }: { expertise: ExpertiseDetailData }) {
  return <DetailPage
    detail={{ ...expertise, featuredLinks: [], relatedLinks: expertise.relatedServices }}
    config={{ relatedLinksEyebrow: 'Waar deze expertise wordt ingezet' }}
  />
}
