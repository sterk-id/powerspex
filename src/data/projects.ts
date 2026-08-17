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
  endClient?: string
  location?: string
  partners: Array<{ name: string; role?: string }>
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
  summary: 'Regelfilosofie, engineering, levering, realisatie procesautomatisering',
  client: 'WarmteStad (Gemeente Groningen & Waterbedrijf Groningen)',
  clientIsPublic: true,
  partners: [],
  sector: 'Duurzame energie / Warmtenetten',
  location: 'Warmtecentrales Zernike Zonnepark & Dorkwerd',
  period: '2021, 2023 & 2024',
  image: { src: '/images/project-warmtestad-groningen.jpg', alt: 'Procesinstallatie van WarmteStad Groningen' },
  heroEyebrow: 'Project · Procesautomatisering',
  heroTitle: 'Procesautomatisering WarmteStad Groningen',
  heroIntro: '',
  contentSections: [
    {
      title: 'Casus',
      body: 'WarmteStad Groningen beheert het duurzame warmtenet van de stad Groningen en voorziet meer dan 10.000 huishoudens van warmte die wordt gewonnen uit zon, water, lucht en restwarmte. Een belangrijk onderdeel van dit systeem is het benutten van restwarmte uit datacenters, die via warmtewisselaars en warmtepompen wordt ingezet voor stadsverwarming. Om deze complexe en duurzame energievoorziening betrouwbaar te laten functioneren, was een robuuste en toekomstbestendige procesautomatisering noodzakelijk.',
      layout: 'right',
      theme: 'light',
    },
    {
      title: 'Opdracht aan Powerspex',
      body: 'WarmteStad heeft Powerspex gevraagd om de volledige procesautomatisering van de warmtecentrales te verzorgen. De opdracht omvatte niet alleen de technische realisatie, maar begon al in een vroeg stadium met het uitwerken van de regelfilosofie en het toetsen van het procesontwerp. Een bijzondere uitdaging was dat de combinatie van warmteleverende units, buffers en energiebronnen in deze vorm nog niet eerder in Nederland was gerealiseerd.',
      layout: 'left',
      theme: 'mist',
    },
    {
      title: 'Aanpak & oplossing',
      body: 'Powerspex heeft het project integraal opgepakt, van concept tot oplevering. In nauwe samenwerking met WarmteStad is eerst een complete regelfilosofie ontwikkeld die rekening houdt met:\n\n• restwarmte uit datacenters\n• warmtepompen\n• warmtekrachtkoppelingen (WKK’s), zowel gekoppeld als standalone\n• piekbelasting- en back-upketels\n\nOp basis hiervan heeft Powerspex de volledige engineering, levering en realisatie van de procesautomatisering uitgevoerd, waaronder:\n\n• een redundant Siemens S7-1500 PLC-systeem\n• softwareontwikkeling in Siemens TIA Portal en WinCC\n• implementatie van de eigen Powerspex-regelfilosofie\n\nNa de initiële oplevering is het systeem verder uitgebreid met:\n\n• zonthermie\n• een ATES-systeem voor seizoensopslag van warmte en koude\n• Midden Temperatuur Opslag (MTO)\n• Lage Temperatuur Opslag (LTO)',
      layout: 'right',
      theme: 'light',
    },
    {
      title: 'Resultaat',
      body: 'Het warmtenet van Groningen beschikt nu over een betrouwbaar, flexibel en schaalbaar geautomatiseerd systeem, dat duurzaam opgewekte warmte efficiënt verdeelt naar duizenden huishoudens.\n\nDankzij de gekozen automatiseringsoplossing kan WarmteStad:\n\n• verschillende warmtebronnen slim combineren\n• inspelen op wisselende warmtevraag\n• het systeem verder uitbreiden zonder ingrijpende herontwerpen\n\nHet project had daarnaast een sterk lerend en innovatief karakter, waarbij de samenwerking tussen een jonge organisatie en een multidisciplinair projectteam heeft geleid tot een toekomstbestendige oplossing.',
      layout: 'left',
      theme: 'mist',
    },
  ],
  disciplines: [{ title: 'Procesautomatisering', href: '/wat-we-doen/procesautomatisering', type: 'Dienst' }],
  gallery: [],
  seo: {
    title: 'Procesautomatisering WarmteStad Groningen – Powerspex',
    description: '',
    openGraphImage: { src: '/images/project-warmtestad-groningen.jpg', alt: 'Procesinstallatie van WarmteStad Groningen' },
  },
}

export const approvedProjectFallbacks = [warmtestadGroningen]
