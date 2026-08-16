import type { ServiceDetailData } from './services'

export type ExpertiseDetailData = ServiceDetailData

export const cybersecurityOTSecurity: ExpertiseDetailData = {
  title: 'Cybersecurity & OT-security',
  slug: 'cybersecurity-ot-security',
  eyebrow: 'Specialistische expertise',
  shortSummary: 'Digitale veiligheid voor industriële automatiseringsomgevingen, in samenhang met de besturing, software en technische context van de installatie.',
  heroTitle: 'Cybersecurity voor industriële automatisering',
  heroIntro: 'Powerspex benadert digitale veiligheid als onderdeel van de industriële automatiseringsomgeving. Zo kan cybersecurity vanaf het ontwerp worden meegenomen in de samenhang tussen software, besturing en OT-context.',
  heroImage: { src: '/images/software-engineering.jpg', alt: 'Powerspex-medewerker werkt aan industriële besturingssoftware' },
  intro: {
    title: 'Digitale veiligheid hoort bij de technische samenhang',
    body: 'Industriële automatisering verbindt software, besturing en installaties. Daardoor staat cybersecurity niet los van het technische ontwerp. Powerspex brengt de digitale veiligheid van de automatiseringsomgeving in samenhang met de industriële toepassing en de betrokken engineeringdisciplines.',
    image: { src: '/images/procesautomatisering.jpg', alt: 'Medewerker bij apparatuur in een industriële procesinstallatie' },
  },
  capabilitiesEyebrow: 'Cybersecurity & OT-security',
  capabilitiesTitle: 'Expertisegebieden',
  capabilities: [
    { title: 'Industriële automatiseringsomgevingen', description: 'Cybersecurity benaderen vanuit de werking en technische context van industriële automatisering.' },
    { title: 'IT- en OT-context', description: 'De digitale omgeving en de operationele installatie in hun onderlinge samenhang bekijken.' },
    { title: 'Security vanaf het ontwerp', description: 'Digitale veiligheid vroeg meenemen bij het ontwerpen en uitwerken van industriële automatisering.' },
    { title: 'Samenhang met besturingssoftware', description: 'Cybersecurity verbinden met de softwarematige besturing en visualisatie van de industriële installatie.' },
  ],
  expertise: [],
  relatedServicesEyebrow: 'Waar deze expertise wordt ingezet',
  relatedServices: [
    { title: 'Software engineering', summary: 'Bij industriële besturingssoftware kan digitale veiligheid vanaf het ontwerp in de softwarematige uitwerking worden meegenomen.', href: '/wat-we-doen/software-engineering' },
    { title: 'Procesautomatisering', summary: 'Binnen procesautomatisering hangt cybersecurity samen met het proces, de besturing en de bredere OT-omgeving.', href: '/wat-we-doen/procesautomatisering' },
  ],
  standards: [],
  process: [],
  projects: [],
  faq: [
    { question: 'Waarom is cybersecurity onderdeel van industriële automatisering?', answer: 'Industriële automatisering verbindt software en besturing met de operationele installatie. Digitale veiligheid moet daarom in samenhang met die technische omgeving worden bekeken en kan vanaf het ontwerp worden meegenomen.' },
    { question: 'Hoe hangt Cybersecurity samen met Software Engineering?', answer: 'Software Engineering werkt de softwarematige besturing en visualisatie uit. Cybersecurity & OT-security is specialistische expertise die bij die uitwerking kan worden betrokken om digitale veiligheid in de industriële context mee te nemen.' },
    { question: 'Hoe hangt Cybersecurity samen met Procesautomatisering?', answer: 'Procesautomatisering brengt proces, besturing en technische omgeving samen. Cybersecurity & OT-security kan binnen dat bredere automatiseringsvraagstuk worden ingezet voor de digitale veiligheid van de OT-omgeving.' },
  ],
  cta: { title: 'Een cybersecurityvraagstuk in een industriële omgeving?', body: 'Bespreek de automatiseringsomgeving, de technische context en het digitale veiligheidsvraagstuk met Powerspex.', buttonLabel: 'Neem contact op', buttonHref: 'mailto:mail@powerspex.nl' },
  seo: { title: 'Cybersecurity & OT-security | Powerspex', description: 'Specialistische cybersecurity en OT-security voor industriële automatiseringsomgevingen, in samenhang met software, besturing en procesautomatisering.', openGraphImage: { src: '/images/software-engineering.jpg', alt: 'Powerspex-medewerker werkt aan industriële besturingssoftware' } },
}
