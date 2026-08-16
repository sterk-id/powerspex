import type { DetailContentData } from './detailPage'

export interface ExpertiseDetailData extends DetailContentData {
  relatedServices: Array<{ title: string; summary: string; href: string }>
}

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
  relatedServices: [
    { title: 'Software engineering', summary: 'Bij industriële besturingssoftware kan digitale veiligheid vanaf het ontwerp in de softwarematige uitwerking worden meegenomen.', href: '/wat-we-doen/software-engineering' },
    { title: 'Procesautomatisering', summary: 'Binnen procesautomatisering hangt cybersecurity samen met het proces, de besturing en de bredere OT-omgeving.', href: '/wat-we-doen/procesautomatisering' },
  ],
  standards: [],
  process: [],
  projects: [],
  faq: [
    { question: 'Waarom is cybersecurity onderdeel van industriële automatisering?', answer: 'Industriële automatisering verbindt software en besturing met de operationele installatie. Digitale veiligheid moet daarom in samenhang met die technische omgeving worden bekeken en kan vanaf het ontwerp worden meegenomen.' },
    { question: 'Hoe hangt cybersecurity samen met software engineering?', answer: 'Bij de uitwerking van industriële besturingssoftware en visualisatie kan digitale veiligheid vanaf het ontwerp worden meegenomen, afgestemd op de installatie en de technische omgeving.' },
    { question: 'Hoe hangt cybersecurity samen met procesautomatisering?', answer: 'Binnen procesautomatisering wordt digitale veiligheid bekeken in samenhang met het proces, de besturing en de bredere OT-omgeving.' },
  ],
  cta: { title: 'Een cybersecurityvraagstuk in een industriële omgeving?', body: 'Bespreek de automatiseringsomgeving, de technische context en het digitale veiligheidsvraagstuk met Powerspex.', buttonLabel: 'Neem contact op', buttonHref: 'mailto:mail@powerspex.nl' },
  seo: { title: 'Cybersecurity & OT-security | Powerspex', description: 'Specialistische cybersecurity en OT-security voor industriële automatiseringsomgevingen, in samenhang met software, besturing en procesautomatisering.', openGraphImage: { src: '/images/software-engineering.jpg', alt: 'Powerspex-medewerker werkt aan industriële besturingssoftware' } },
}

export const functionalSafety: ExpertiseDetailData = {
  title: 'Functional Safety',
  slug: 'functional-safety',
  eyebrow: 'Specialistische expertise',
  shortSummary: 'Functionele veiligheid voor instrumentatiesystemen die een veiligheidsfunctie uitvoeren binnen industriële processen.',
  heroTitle: 'Veiligheidsfuncties als onderdeel van industriële automatisering',
  heroIntro: 'Powerspex ontwerpt en bouwt veiligheidssystemen voor industriële processen. Functional Safety brengt de veiligheidsfunctie, het instrumentatiesysteem en de technische realisatie in samenhang.',
  heroImage: { src: '/images/service-inspectie.jpg', alt: 'Powerspex-specialist bij een industrieel besturingspaneel' },
  intro: {
    title: 'Een eigen discipline naast de besturing',
    body: 'Een veiligheidsfunctie bewaakt de grenzen van toegestane procescondities. Het instrumentatiesysteem dat zo’n functie uitvoert, wordt aangeduid als een Safety Instrumented System (SIS). Powerspex behandelt deze systemen als een specialistisch vakgebied naast de reguliere besturing en hardware-engineering.',
    image: { src: '/images/project-engineering.jpg', alt: 'Twee Powerspex-medewerkers bespreken een technisch schema' },
  },
  capabilitiesEyebrow: 'Functional Safety',
  capabilitiesTitle: 'Expertisegebieden',
  capabilities: [
    { title: 'Veiligheidsfuncties', description: 'Instrumentatiefuncties die de grenzen van toegestane procescondities bewaken.' },
    { title: 'Safety Instrumented Systems', description: 'Ontwerp en constructie van instrumentatiesystemen die een veiligheidsfunctie uitvoeren.' },
    { title: 'Functional Safety Management', description: 'Processen, systemen en organisatorische procedures voor het ontwerpen en bouwen van een veiligheidssysteem.' },
    { title: 'Realisatie van veiligheidssystemen', description: 'Planmatig ontwerpen, bouwen, verifiëren en valideren van een veiligheidssysteem binnen de afgesproken scope.' },
  ],
  relatedServices: [{
    title: 'Hardware engineering',
    summary: 'Functional Safety kan specialistisch aansluiten op het elektrotechnisch ontwerp van industriële besturingen en veiligheidssystemen.',
    href: '/wat-we-doen/hardware-engineering',
  }],
  standards: [
    { name: 'IEC 61508', type: 'Norm / standaard', description: 'Powerspex heeft de processen voor het ontwerp en de constructie van veiligheidssystemen op deze standaard ingericht.' },
    { name: 'IEC 61511', type: 'Norm / standaard', description: 'Deze van IEC 61508 afgeleide standaard is specifiek van toepassing binnen de procesindustrie.' },
  ],
  process: [],
  projects: [],
  faq: [
    { question: 'Wat is Functional Safety?', answer: 'Functional Safety betreft instrumentatiesystemen die bedoeld zijn om een veiligheidsfunctie uit te voeren. Een veiligheidsfunctie bewaakt de grenzen van toegestane procescondities.' },
    { question: 'Wat is een Safety Instrumented System?', answer: 'Een Safety Instrumented System, afgekort SIS, is een instrumentatiesysteem dat is bedoeld om een veiligheidsfunctie uit te voeren.' },
    { question: 'Wat betekent SIL binnen Functional Safety?', answer: 'SIL staat voor Safety Integrity Level. Het is een begrip binnen Functional Safety dat samenhangt met de eisen aan de betrouwbaarheid en faalkans van een veiligheidsfunctie. Welke eisen gelden, wordt per veiligheidsfunctie bepaald.' },
    { question: 'Wat is het verschil tussen Functional Safety en Explosieveiligheid?', answer: 'Functional Safety richt zich op systemen die een veiligheidsfunctie uitvoeren. Explosieveiligheid richt zich op veiligheid in omgevingen waar een explosieve atmosfeer kan voorkomen. Het zijn verschillende veiligheidsdisciplines.' },
  ],
  cta: { title: 'Een vraagstuk rond functionele veiligheid?', body: 'Bespreek de veiligheidsfunctie, het industriële proces en de technische context met Powerspex.', buttonLabel: 'Neem contact op', buttonHref: 'mailto:mail@powerspex.nl' },
  seo: {
    title: 'Functional Safety | Powerspex',
    description: 'Functional Safety voor industriële processen: veiligheidsfuncties, Safety Instrumented Systems en de realisatie van veiligheidssystemen.',
    openGraphImage: { src: '/images/service-inspectie.jpg', alt: 'Powerspex-specialist bij een industrieel besturingspaneel' },
  },
}
