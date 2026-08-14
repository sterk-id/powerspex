import type { ImageData } from './homepage'

export type ServiceDetailData = {
  title: string
  slug: string
  eyebrow: string
  shortSummary: string
  heroTitle: string
  heroIntro: string
  heroImage: ImageData
  intro?: { title: string; body: string; image?: ImageData }
  capabilities: Array<{ title: string; description: string }>
  expertise: Array<{ title: string; summary: string; href: string }>
  standards: Array<{ name: string; type: string; description: string }>
  process: Array<{ number: string; title: string; description: string }>
  projects: Array<{ title: string; meta: string; href: string; image: ImageData }>
  faq: Array<{ question: string; answer: string }>
  cta?: { title: string; body: string; buttonLabel: string; buttonHref: string }
  seo: { title: string; description: string; openGraphImage?: ImageData }
}

export const softwareEngineering: ServiceDetailData = {
  title: 'Software engineering',
  slug: 'software-engineering',
  eyebrow: 'Engineering & automatisering',
  shortSummary: 'Industriële software, PLC, SCADA en DCS met cybersecurity vanaf het ontwerp meegenomen.',
  heroTitle: 'Software voor industriële processen',
  heroIntro: 'Powerspex ontwikkelt industriële software als onderdeel van procesautomatisering: van besturing en visualisatie tot integratie en inbedrijfstelling.',
  heroImage: { src: '/images/software-engineering.jpg', alt: 'Software engineering bij Powerspex' },
  intro: {
    title: 'Besturing, inzicht en samenhang',
    body: 'Software engineering verbindt het proces met de techniek eromheen. Powerspex werkt aan industriële besturingen en visualisaties en brengt software, hardware en proceskennis samen binnen één uitvoerbare oplossing.',
    image: { src: '/images/people-detail.jpg', alt: 'Powerspex specialist werkt aan industriële automatisering' },
  },
  capabilities: [
    { title: 'Industriële software', description: 'Software voor het besturen, bewaken en ondersteunen van industriële processen.' },
    { title: 'PLC-besturing', description: 'Besturingssoftware die aansluit op het proces en de installatie.' },
    { title: 'SCADA & visualisatie', description: 'Bediening en visualisatie voor inzicht in de actuele procesvoering.' },
    { title: 'DCS', description: 'Software engineering binnen gedistribueerde procesbesturing.' },
    { title: 'Integratie', description: 'Samenhang tussen besturing, visualisatie en de technische omgeving van de installatie.' },
    { title: 'Testen & inbedrijfstelling', description: 'Software gecontroleerd testen en toepassen in de uiteindelijke installatie.' },
  ],
  expertise: [{ title: 'Cybersecurity & OT-security', summary: 'Digitale veiligheid is een belangrijk onderdeel van industriële automatisering. Powerspex kan cybersecurity en OT-security vanaf het ontwerp meenemen in software- en automatiseringsvraagstukken, afgestemd op de installatie en omgeving.', href: '/expertises/cybersecurity-ot-security' }],
  standards: [],
  process: [
    { number: '01', title: 'Vraagstuk en omgeving', description: 'We brengen het proces, de installatie en de gewenste werking samen in beeld.' },
    { number: '02', title: 'Engineering', description: 'De software wordt uitgewerkt in samenhang met de besturing, visualisatie en technische omgeving.' },
    { number: '03', title: 'Testen', description: 'De werking wordt gecontroleerd voordat de software in de installatie wordt toegepast.' },
    { number: '04', title: 'Inbedrijfstelling', description: 'De software wordt in de industriële omgeving toegepast en samen met de installatie in werking gebracht.' },
  ],
  projects: [],
  faq: [
    { question: 'Welke informatie helpt bij de start van een softwarevraagstuk?', answer: 'Informatie over het proces, de installatie, de bestaande situatie en de gewenste werking helpt om het vraagstuk helder te bespreken.' },
    { question: 'Hoe wordt cybersecurity meegenomen?', answer: 'Cybersecurity en OT-security kunnen vanaf het ontwerp worden meegenomen, afgestemd op de installatie en omgeving. Waar specialistische verdieping nodig is, wordt deze expertise gericht betrokken.' },
    { question: 'Werkt Powerspex ook met bestaande installaties?', answer: 'De uitgangssituatie van de bestaande installatie wordt eerst in beeld gebracht. Op basis daarvan wordt bepaald welke aanpak technisch en organisatorisch passend is.' },
  ],
  cta: { title: 'Softwarevraagstuk in een industriële omgeving?', body: 'Bespreek de installatie, het proces en de gewenste aanpak met Powerspex.', buttonLabel: 'Neem contact op', buttonHref: 'mailto:mail@powerspex.nl' },
  seo: { title: 'Software Engineering | Powerspex', description: 'Industriële Software Engineering voor besturing, visualisatie en integratie binnen procesautomatisering.' },
}
