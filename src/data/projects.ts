import type { ImageData } from './homepage'

export type ProjectContentSection = {
  eyebrow?: string
  title: string
  body: string
  image?: ImageData
  layout: 'left' | 'right'
  theme: 'light' | 'mist' | 'dark'
}

export type ProjectSummaryData = {
  title: string
  slug: string
  summary: string
  client?: string
  sector?: string
  year?: string
  period?: string
  image: ImageData
}

export type ProjectDetailData = ProjectSummaryData & {
  clientIsPublic: boolean
  heroEyebrow: string
  heroTitle: string
  heroIntro: string
  contentSections: ProjectContentSection[]
  disciplines: Array<{ title: string; href: string; type: 'Dienst' | 'Expertise' }>
  gallery: Array<{ image: ImageData; caption?: string }>
  cta?: { title: string; body: string; buttonLabel: string; buttonHref: string }
  seo: { title: string; description: string; openGraphImage?: ImageData }
}

export const warmtestadGroningen: ProjectDetailData = {
  title: 'Procesautomatisering WarmteStad Groningen',
  slug: 'procesautomatisering-warmtestad-groningen',
  summary: 'Engineering, levering en installatie van de complete procesautomatisering voor de WarmteStad Centrale Zernike en Zonnepark Dorkwerd.',
  client: 'WarmteStad Groningen',
  clientIsPublic: true,
  sector: 'Industrie & productie',
  year: '2024',
  period: '2021, 2023 & 2024',
  image: { src: '/images/project-warmtestad-groningen.jpg', alt: 'Procesinstallatie van WarmteStad Groningen' },
  heroEyebrow: 'Project · Procesautomatisering',
  heroTitle: 'Procesautomatisering voor WarmteStad Groningen',
  heroIntro: 'Powerspex werkte de regelfilosofie en toetsing van het procesontwerp uit en verzorgde vervolgens de engineering, levering en realisatie van de complete procesautomatisering.',
  contentSections: [
    {
      eyebrow: 'Context',
      title: 'Een duurzame warmtevoorziening met veel samenhang',
      body: 'Het warmtenet van WarmteStad benut onder meer restwarmte van datacenters. Warmtewisselaars, warmtepompen, warmtekrachtkoppeling, piek- en back-upketels en buffers vormen samen een installatie waarvan de procesvoering in onderlinge samenhang moest worden uitgewerkt.',
      layout: 'right',
      theme: 'light',
    },
    {
      eyebrow: 'Aanpak en uitvoering',
      title: 'Van regelfilosofie naar complete procesautomatisering',
      body: 'Powerspex heeft eerst de complete regelfilosofie en de toetsing van het procesontwerp uitgewerkt. Daarna volgden de complete engineering, levering en realisatie van de procesautomatisering voor de Centrale Zernike en Zonnepark Dorkwerd.',
      layout: 'left',
      theme: 'mist',
    },
    {
      eyebrow: 'Vervolg',
      title: 'Uitbreidingen voor zonthermie en seizoensopslag',
      body: 'Na de oorspronkelijke oplevering voerde Powerspex vervolgopdrachten uit voor uitbreidingen met zonthermie en een ATES-systeem. Daarmee werd seizoensopslag van warmte en koude mogelijk via midden- en lagetemperatuuropslag.',
      layout: 'right',
      theme: 'light',
    },
  ],
  disciplines: [{ title: 'Procesautomatisering', href: '/wat-we-doen/procesautomatisering', type: 'Dienst' }],
  gallery: [],
  seo: {
    title: 'Procesautomatisering WarmteStad Groningen | Powerspex',
    description: 'Projectreferentie over de engineering, levering en realisatie van procesautomatisering voor WarmteStad Groningen.',
    openGraphImage: { src: '/images/project-warmtestad-groningen.jpg', alt: 'Procesinstallatie van WarmteStad Groningen' },
  },
}

export const approvedProjectFallbacks = [warmtestadGroningen]
