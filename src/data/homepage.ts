export type ImageData = { src?: string; alt: string }
export type LinkData = { label: string; href: string }
export type HomepageData = {
  seo: { title: string; description: string }
  hero: { eyebrow: string; title: string; intro: string; primaryCta: LinkData; secondaryCta: LinkData; image: ImageData }
  intro: { eyebrow: string; title: string; body: string; primaryImage: ImageData; secondaryImage: ImageData }
  services: Array<{ title: string; description: string; href: string; image: ImageData }>
  expertise: Array<{ title: string; href: string }>
  impact: { eyebrow: string; title: string; body: string; stats: Array<{ value: string; label: string }> }
  projects: Array<{ title: string; meta: string; image: ImageData; href: string }>
  news: Array<{ title: string; meta: string; image: ImageData; href: string }>
  contact: { title: string; body: string }
}

export const homepage: HomepageData = {
  seo: {
    title: 'Powerspex | Industriële automatisering',
    description: 'Powerspex combineert engineering, industriële automatisering, productie, service en specialistische expertise.',
  },
  hero: {
    eyebrow: 'Van analyse tot uitvoering, met zekerheid',
    title: 'Koers houden wanneer het complex wordt',
    intro: 'Powerspex helpt industriële organisaties om processen veilig, betrouwbaar en toekomstbestendig te automatiseren — van engineering tot productie, inbedrijfstelling en lifecycle support.',
    primaryCta: { label: 'Ontdek wat we doen', href: '#wat-we-doen' },
    secondaryCta: { label: 'Bekijk projecten', href: '#projecten' },
    image: { src: '/images/hero-powerspex.jpg', alt: 'Powerspex specialist bij een industriële installatie' },
  },
  intro: {
    eyebrow: 'Partner in industriële automatisering',
    title: 'Gedreven door mensen. Sterk in techniek.',
    body: 'Complexe industriële vraagstukken vragen om overzicht én specialistische diepgang. Powerspex brengt engineering, automatisering, productie en service samen en schakelt waar nodig eigen specialistische expertise in.',
    primaryImage: { src: '/images/people-detail.jpg', alt: 'Powerspex specialist aan het werk' },
    secondaryImage: { src: '/images/people-workshop.jpg', alt: 'Powerspex-medewerker in een industriële installatie' },
  },
  services: [
    { title: 'Project engineering', description: 'Van technisch ontwerp en projectbeheersing tot een uitvoerbaar industrieel project.', href: '/wat-we-doen/project-engineering', image: { src: '/images/project-engineering.jpg', alt: 'Project engineering bij Powerspex' } },
    { title: 'Procesautomatisering', description: 'Besturing en optimalisatie van industriële processen met grip op veiligheid en beschikbaarheid.', href: '/wat-we-doen/procesautomatisering', image: { src: '/images/procesautomatisering.jpg', alt: 'Procesautomatisering bij Powerspex' } },
    { title: 'Software engineering', description: 'Industriële software, PLC, SCADA en DCS met cybersecurity vanaf het ontwerp meegenomen.', href: '/wat-we-doen/software-engineering', image: { src: '/images/software-engineering.jpg', alt: 'Software engineering bij Powerspex' } },
    { title: 'Hardware engineering', description: 'Elektrotechnische engineering voor betrouwbare industriële installaties en besturingssystemen.', href: '/wat-we-doen/hardware-engineering', image: { src: '/images/project-engineering.jpg', alt: 'Hardware engineering bij Powerspex' } },
    { title: 'Productie', description: 'Paneel- en systeemproductie in eigen werkplaats, als onderdeel van een project of zelfstandige opdracht.', href: '/wat-we-doen/productie', image: { src: '/images/people-workshop.jpg', alt: 'Powerspex-medewerker in een industriële installatie' } },
    { title: 'Service, onderhoud & inspectie', description: 'Onderhoud, storingen, inspecties en modificaties met eigen technische specialisten.', href: '/wat-we-doen/service-onderhoud-inspectie', image: { src: '/images/service-inspectie.jpg', alt: 'Service en inspectie door Powerspex' } },
  ],
  expertise: [
    { title: 'Cybersecurity & OT-security', href: '/expertises/cybersecurity-ot-security' },
    { title: 'Functional Safety', href: '/expertises/functional-safety' },
    { title: 'Explosieveiligheid', href: '/expertises/explosieveiligheid' },
    { title: 'Simulaties', href: '/expertises/simulaties' },
  ],
  impact: {
    eyebrow: 'Bewezen in de praktijk',
    title: 'Onze impact',
    body: 'Samen met onze opdrachtgevers brengen we richting in complexe industriële vraagstukken. Met technische expertise, ervaring en uitvoering realiseren we oplossingen die bijdragen aan veiligheid, beschikbaarheid en continuïteit.',
    stats: [],
  },
  projects: [
    { title: 'Procesautomatisering WarmteStad Groningen', meta: 'Duurzame energie / Warmtenetten · 2021, 2023 & 2024', image: { src: '/images/project-warmtestad-groningen.jpg', alt: 'Procesinstallatie van WarmteStad Groningen' }, href: '/projecten/procesautomatisering-warmtestad-groningen' },
  ],
  news: [
    { title: 'Aan de Knoppen: Norman Calmer', meta: '20 mei 2026', image: { alt: 'Aan de Knoppen: Norman Calmer' }, href: 'https://powerspex.nl/aan-de-knoppen-norman-calmer/' },
    { title: 'Alexander Slag 12,5 jaar in dienst', meta: '9 april 2026', image: { alt: 'Alexander Slag 12,5 jaar in dienst' }, href: 'https://powerspex.nl/werkjubileum-alexander-slag/' },
    { title: 'Team Powerspex finisht met toptijden in Halve van Hengelo', meta: '30 maart 2026', image: { alt: 'Team Powerspex tijdens de Halve van Hengelo' }, href: 'https://powerspex.nl/halvevanhengelo2026/' },
  ],
  contact: {
    title: 'Een technisch vraagstuk dat om overzicht én diepgang vraagt?',
    body: 'Bespreek de uitdaging met Powerspex. We kijken eerst wat er technisch en organisatorisch echt nodig is.',
  },
}
