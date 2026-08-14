export type ImageData = { src?: string; alt: string }
export type LinkData = { label: string; href: string }
export type HomepageData = {
  seo: { title: string; description: string }
  hero: { eyebrow: string; title: string; intro: string; primaryCta: LinkData; secondaryCta: LinkData; image: ImageData }
  intro: { eyebrow: string; title: string; body: string }
  services: Array<{ title: string; description: string; href: string; image: ImageData }>
  expertise: Array<{ title: string; href: string }>
  impact: { eyebrow: string; title: string; body: string; stats: Array<{ value: string; label: string }> }
  projects: Array<{ title: string; meta: string; image: ImageData; href: string }>
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
    image: { alt: 'Powerspex specialist bij een industriële installatie' },
  },
  intro: {
    eyebrow: 'Partner in industriële automatisering',
    title: 'Gedreven door mensen. Sterk in techniek.',
    body: 'Complexe industriële vraagstukken vragen om overzicht én specialistische diepgang. Powerspex brengt engineering, automatisering, productie en service samen en schakelt waar nodig eigen specialistische expertise in.',
  },
  services: [
    { title: 'Project engineering', description: 'Van technisch ontwerp en projectbeheersing tot een uitvoerbaar industrieel project.', href: '/wat-we-doen/project-engineering', image: { alt: 'Project engineering' } },
    { title: 'Procesautomatisering', description: 'Besturing en optimalisatie van industriële processen met grip op veiligheid en beschikbaarheid.', href: '/wat-we-doen/procesautomatisering', image: { alt: 'Procesautomatisering' } },
    { title: 'Software engineering', description: 'Industriële software, PLC, SCADA en DCS met cybersecurity vanaf het ontwerp meegenomen.', href: '/wat-we-doen/software-engineering', image: { alt: 'Software engineering' } },
    { title: 'Hardware engineering', description: 'Elektrotechnische engineering voor betrouwbare industriële installaties en besturingssystemen.', href: '/wat-we-doen/hardware-engineering', image: { alt: 'Hardware engineering' } },
    { title: 'Productie', description: 'Paneel- en systeemproductie in eigen werkplaats, als onderdeel van een project of zelfstandige opdracht.', href: '/wat-we-doen/productie', image: { alt: 'Productie in de werkplaats' } },
    { title: 'Service, onderhoud & inspectie', description: 'Onderhoud, storingen, inspecties en modificaties met eigen technische specialisten.', href: '/wat-we-doen/service-onderhoud-inspectie', image: { alt: 'Service en inspectie' } },
  ],
  expertise: [
    { title: 'Cybersecurity & OT-security', href: '/expertises/cybersecurity-ot-security' },
    { title: 'Functional Safety', href: '/expertises/functional-safety' },
    { title: 'Explosieveiligheid', href: '/expertises/explosieveiligheid' },
    { title: 'Simulaties', href: '/expertises/simulaties' },
  ],
  impact: {
    eyebrow: 'Bewezen in de praktijk',
    title: 'Techniek die standhoudt.',
    body: 'Projecten laten zien hoe Powerspex verschillende disciplines samenbrengt. Gevalideerde impactcijfers kunnen hier later via het CMS worden gepubliceerd.',
    stats: [],
  },
  projects: [],
  contact: {
    title: 'Een technisch vraagstuk dat om overzicht én diepgang vraagt?',
    body: 'Bespreek de uitdaging met Powerspex. We kijken eerst wat er technisch en organisatorisch echt nodig is.',
  },
}
