import type { ExpertiseDetailData } from '@/data/expertise'
import { ServiceDetail } from './ServiceDetail'

export function ExpertiseDetail({ expertise }: { expertise: ExpertiseDetailData }) {
  return <ServiceDetail service={expertise} />
}
