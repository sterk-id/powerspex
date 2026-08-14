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
  capabilitiesEyebrow?: string
  capabilitiesTitle?: string
  capabilities: Array<{ title: string; description: string }>
  expertise: Array<{ title: string; summary: string; href: string }>
  relatedServices: Array<{ title: string; summary: string; href: string }>
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
  relatedServices: [],
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

export const hardwareEngineering: ServiceDetailData = {
  title: 'Hardware engineering',
  slug: 'hardware-engineering',
  eyebrow: 'Engineering & automatisering',
  shortSummary: 'Elektrotechnische engineering voor betrouwbare industriële installaties en besturingssystemen.',
  heroTitle: 'Hardware engineering voor industriële besturingen',
  heroIntro: 'Powerspex ontwerpt elektrische besturingen voor industriële automatiseringsomgevingen. Als zelfstandige engineeringopdracht of in samenhang met andere technische disciplines.',
  heroImage: { src: '/images/project-engineering.jpg', alt: 'Hardware engineering bij Powerspex' },
  intro: {
    title: 'Van elektrotechnisch ontwerp naar uitvoerbare engineering',
    body: 'Hardware engineering omvat het ontwerpen van elektrische besturingen in E-plan, het specificeren en inkopen van benodigde materialen en de technische afstemming richting montage. Powerspex kan deze engineering zelfstandig leveren en waar nodig afstemmen met project engineering, software engineering, productie en specialistische expertises.',
    image: { src: '/images/people-workshop.jpg', alt: 'Powerspex medewerkers in de eigen werkplaats' },
  },
  capabilities: [
    { title: 'Elektrotechnisch ontwerp', description: 'Ontwerp van elektrische besturingen voor industriële automatiseringsomgevingen.' },
    { title: 'E-plan engineering', description: 'Uitwerking van elektrische besturingen met E-plan.' },
    { title: 'Materiaalspecificatie', description: 'Specificatie van de materialen die voor de ontworpen besturing nodig zijn.' },
    { title: 'Inkoop', description: 'Inkoop van de benodigde materialen als onderdeel van de afgesproken opdracht.' },
    { title: 'Technische afstemming', description: 'Afstemming met klanten en betrokken technische disciplines gedurende de engineering.' },
    { title: 'Begeleiding richting realisatie', description: 'Afstemming en begeleiding van montage om het ontwerp uitvoerbaar over te dragen.' },
  ],
  expertise: [{
    title: 'Functional Safety',
    summary: 'Functional Safety richt zich op instrumentatiesystemen die een veiligheidsfunctie uitvoeren. Safety Instrumented Systems (SIS), veiligheidsfuncties, SIL en de toepassing van IEC 61508 en IEC 61511 vragen om specialistische kennis naast de hardware-engineeringopdracht.',
    href: '/expertises/functional-safety',
  }],
  relatedServices: [{
    title: 'Productie',
    summary: 'Hardware engineering levert het ontwerp. Indien gewenst kan Powerspex dit in de eigen werkplaats doorvertalen naar productie; productie is geen verplicht onderdeel van de engineeringopdracht.',
    href: '/wat-we-doen/productie',
  }],
  standards: [],
  process: [
    { number: '01', title: 'Vraagstuk en uitgangspunten', description: 'We brengen de industriële omgeving, de gewenste besturing en de benodigde technische afstemming in beeld.' },
    { number: '02', title: 'Elektrotechnische engineering', description: 'De elektrische besturing en benodigde materialen worden uitgewerkt in E-plan.' },
    { number: '03', title: 'Technische afstemming', description: 'De engineering wordt afgestemd met de klant en de disciplines die voor de opdracht relevant zijn.' },
    { number: '04', title: 'Overdracht naar realisatie', description: 'Het ontwerp wordt uitvoerbaar overgedragen richting montage of productie, binnen of buiten Powerspex.' },
  ],
  projects: [],
  faq: [
    { question: 'Kan Powerspex Hardware Engineering als zelfstandige opdracht uitvoeren?', answer: 'Ja. Hardware engineering kan als zelfstandige engineeringopdracht worden uitgevoerd. Afhankelijk van het vraagstuk kan Powerspex ook andere technische disciplines of specialistische expertises betrekken.' },
    { question: 'Is productie altijd onderdeel van Hardware Engineering?', answer: 'Nee. Hardware engineering betreft het ontwerp en de technische uitwerking. Productie is een afzonderlijke dienst. Indien gewenst kan het ontwerp wel worden doorvertaald naar productie in de eigen werkplaats van Powerspex.' },
    { question: 'Wat is Functional Safety?', answer: 'Functional Safety richt zich op instrumentatiesystemen die een veiligheidsfunctie uitvoeren. Zulke systemen worden doorgaans Safety Instrumented Systems (SIS) genoemd. Begrippen als veiligheidsfuncties, SIL, IEC 61508 en IEC 61511 horen bij dit specialistische vakgebied.' },
    { question: 'Wat is het verschil tussen Functional Safety en Explosieveiligheid?', answer: 'Functional Safety gaat over systemen die een veiligheidsfunctie uitvoeren. Explosieveiligheid richt zich op veiligheid in omgevingen waar een explosieve atmosfeer kan voorkomen. Het zijn verschillende specialistische vakgebieden en worden daarom afzonderlijk beoordeeld.' },
  ],
  cta: { title: 'Een hardware- of elektrotechnisch vraagstuk bespreken?', body: 'Bespreek de installatie, de engineeringopdracht en de gewenste samenwerking met Powerspex.', buttonLabel: 'Neem contact op', buttonHref: 'mailto:mail@powerspex.nl' },
  seo: {
    title: 'Hardware Engineering | Powerspex',
    description: 'Elektrotechnische hardware engineering voor industriële besturingen, zelfstandig of in samenhang met andere technische disciplines.',
    openGraphImage: { src: '/images/project-engineering.jpg', alt: 'Hardware engineering bij Powerspex' },
  },
}

export const production: ServiceDetailData = {
  title: 'Productie',
  slug: 'productie',
  eyebrow: 'Realisatie & lifecycle',
  shortSummary: 'Industriële paneel- en kastenbouw in de eigen werkplaats, als zelfstandige opdracht of binnen een groter Powerspex-traject.',
  heroTitle: 'Industriële productie in eigen werkplaats',
  heroIntro: 'Powerspex bouwt besturingspanelen en kasten in eigen beheer. Als zelfstandige productieopdracht of als onderdeel van een geïntegreerd engineering- en automatiseringstraject.',
  heroImage: { src: '/images/people-workshop.jpg', alt: 'Powerspex vakmensen aan het werk in de eigen werkplaats' },
  intro: {
    title: 'Eigen werkplaats. Eigen vakmensen. Grip op realisatie',
    body: 'Hardware engineering gaat over ontwerpen en engineeren; Productie gaat over bouwen en realiseren. Powerspex kan een aangeleverd engineeringspakket zelfstandig omzetten in een gebouwd paneel of een kast. De paneelbouw wordt door Powerspex-vakmensen in de eigen werkplaats uitgevoerd. Is engineering vooraf nodig, dan kan die als aanvullende dienst worden betrokken.',
    image: { src: '/images/service-inspectie.jpg', alt: 'Powerspex-specialist bij een industrieel besturingspaneel' },
  },
  capabilitiesEyebrow: 'Productie',
  capabilitiesTitle: 'Wat we bouwen',
  capabilities: [
    { title: 'Besturingspanelen en -kasten', description: 'Paneel- en kastenbouw voor industriële besturingen op basis van de afgesproken technische opdracht.' },
    { title: 'MCC-panelen', description: 'Bouw en levering van motor control center-panelen voor industriële installaties.' },
    { title: 'PLC-panelen', description: 'Bouw en levering van panelen voor PLC-gebaseerde besturingen.' },
    { title: 'Remote I/O-panelen', description: 'Paneelbouw voor remote I/O-toepassingen in het veld.' },
    { title: 'Klemmenkasten', description: 'Bouw en levering van klemmenkasten voor industriële installaties.' },
    { title: 'Werk- en drukknopkasten', description: 'Bouw en levering van werkschakelaars en drukknopkasten voor bediening in het veld.' },
  ],
  expertise: [{
    title: 'Explosieveiligheid',
    summary: 'Voor productie in explosiegevaarlijke omgevingen kan Powerspex de expertise Explosieveiligheid gericht betrekken. Dit is een specialistisch vakgebied naast de productieopdracht en staat los van Functional Safety.',
    href: '/expertises/explosieveiligheid',
  }],
  relatedServices: [{
    title: 'Engineering nodig vóór productie?',
    summary: 'Heeft de opdracht nog een elektrotechnisch ontwerp of een uitgewerkt engineeringspakket nodig? Hardware Engineering kan aanvullend worden ingezet, maar is geen vereiste om Productie bij Powerspex af te nemen.',
    href: '/wat-we-doen/hardware-engineering',
  }],
  standards: [],
  process: [
    { number: '01', title: 'Technische basis en opdracht', description: 'We bespreken wat gebouwd moet worden en welke technische informatie als basis beschikbaar is.' },
    { number: '02', title: 'Voorbereiding', description: 'De productie wordt voorbereid op basis van de afgesproken scope en het beschikbare engineeringspakket.' },
    { number: '03', title: 'Productie', description: 'Onze vakmensen bouwen het paneel of de kast in de eigen werkplaats.' },
    { number: '04', title: 'Controle', description: 'Het gerealiseerde werk wordt gecontroleerd tegen de technische opdracht.' },
    { number: '05', title: 'Oplevering', description: 'Het paneel of de kast wordt volgens de gemaakte afspraken opgeleverd.' },
  ],
  projects: [],
  faq: [
    { question: 'Heeft Powerspex een eigen werkplaats?', answer: 'Ja. Powerspex beschikt over een eigen werkplaats, waar eigen vakmensen de productie en paneelbouw uitvoeren.' },
    { question: 'Kan Productie als zelfstandige opdracht worden uitgevoerd?', answer: 'Ja. Productie is een zelfstandige dienst. Powerspex kan een aangeleverd engineeringspakket in de eigen werkplaats realiseren, zonder dat ook andere Powerspex-diensten onderdeel van de opdracht hoeven te zijn.' },
    { question: 'Moet Powerspex ook de Hardware Engineering uitvoeren?', answer: 'Nee. Hardware Engineering is optioneel. Als er al een bruikbaar engineeringspakket ligt, kan Powerspex de productie als zelfstandige opdracht uitvoeren. Indien nodig kan Hardware Engineering aanvullend worden ingezet.' },
    { question: 'Welke producten kan Powerspex in eigen beheer bouwen?', answer: 'Powerspex bouwt onder meer besturingspanelen en -kasten, MCC- en PLC-panelen, remote I/O-panelen, klemmenkasten, werkschakelaars en drukknopkasten.' },
    { question: 'Bouwt Powerspex explosieveilige panelen?', answer: 'Ja. Voor panelen voor explosiegevaarlijke omgevingen wordt de specialistische expertise Explosieveiligheid betrokken. De eisen en benodigde onderbouwing worden per opdracht beoordeeld.' },
  ],
  cta: { title: 'Een productie- of paneelbouwvraagstuk?', body: 'Bespreek wat er gebouwd moet worden, welke technische basis beschikbaar is en hoe Powerspex de realisatie kan verzorgen.', buttonLabel: 'Neem contact op', buttonHref: 'mailto:mail@powerspex.nl' },
  seo: {
    title: 'Productie en paneelbouw | Powerspex',
    description: 'Industriële paneel- en kastenbouw door Powerspex in de eigen werkplaats, zelfstandig of als onderdeel van een groter traject.',
    openGraphImage: { src: '/images/people-workshop.jpg', alt: 'Productie en paneelbouw in de Powerspex-werkplaats' },
  },
}
