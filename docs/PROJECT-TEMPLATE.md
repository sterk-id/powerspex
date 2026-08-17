# Project-template

## Architectuur

Projecten gebruiken één Payload-collection en twee generieke routes:

- `/projecten` toont alle gepubliceerde projectrecords;
- `/projecten/[slug]` rendert één gepubliceerd project via het generieke `ProjectDetail`-component.

Er worden geen afzonderlijke React-pagina's per project gemaakt. Als Payload tijdelijk niet beschikbaar of nog leeg is, kan de frontend uitsluitend gecontroleerde, goedgekeurde fallbackcontent tonen uit `src/data/projects.ts`.

## CMS-model

De bestaande velden behouden hun betekenis:

- `title`, `slug`, `summary`;
- `client` en `clientIsPublic`;
- `sector`, `year`, `period`;
- `featuredImage`;
- `featured` en `featuredOrder`;
- relaties `services` en `expertise`.

Projectmetadata onderscheidt daarnaast expliciet:

- `client` als opdrachtgever en optioneel `endClient` als eindklant, elk met een eigen publicatievlag;
- een optionele, gevalideerde `location` met eigen publicatievlag;
- optionele `partners`, waarbij ieder item afzonderlijk voor publicatie wordt vrijgegeven;
- de interne groep `editorial` voor bronnen, controledatum, inhoudelijke goedkeuring en beeldrechtenstatus.

Het detailtemplate voegt generieke presentatievelden toe:

- `heroEyebrow`, `heroTitle`, `heroIntro`;
- `contentSections` met bovenregel, titel, tekst, optioneel beeld, beeldpositie en thema;
- `gallery` met goedgekeurd beeld en optioneel bijschrift;
- een gestructureerde CTA;
- SEO-velden voor titel, beschrijving en Open Graph-beeld.

## Opdrachtgever en privacy

`clientIsPublic=true` is een harde voorwaarde voor publieke weergave van `client`. Bij `false` gebruikt de frontend de klantnaam niet in projectmetadata, hero, SEO, Open Graph-alttekst of kaartweergave. Tekstvelden die de ingevulde klantnaam bevatten worden bij een niet-openbare klant niet gerenderd; de publieke titel valt zo nodig terug op een neutrale sectoromschrijving.

`endClient` is een afzonderlijke eindklant en wordt nooit uit de opdrachtgever afgeleid. De eindklant verschijnt uitsluitend wanneer het veld gevuld is én `endClientIsPublic=true`. Opdrachtgever en eindklant hebben dus onafhankelijke publicatiebesluiten.

`location` is een gecontroleerd tekstveld, geen adres- of mapsysteem. Een redacteur vult het uitsluitend vanuit een gevalideerde bron in; de waarde wordt nooit afgeleid uit klant, sector, titel of adres en verschijnt alleen bij `locationIsPublic=true`.

Samenwerkingspartijen worden als naam, optionele rol en publicatievlag vastgelegd. Alleen items met `isPublic=true` verschijnen compact in de projectmetadata. Er is bewust geen aparte partnercollection.

De namen van opdrachtgever, eindklant en niet-openbare partners en de projectlocatie hebben daarnaast field-level read access. Een unauthenticated Payload-response retourneert deze waarden dus niet wanneer hun publicatievlag uitstaat. Alle publieke projectkaarten en projectpagina's gebruiken dezelfde veilige mapper; Payload Local API omzeilt access-control standaard, maar geen publieke route retourneert het onbewerkte projectdocument.

Editors mogen klantnamen, klantlogo's of herleidbare klantinformatie alleen opnemen als de publicatiestatus en bron expliciet zijn goedgekeurd. Gebruik nooit een klantlogo zonder goedgekeurd mediarecord.

De groep `editorial` is uitsluitend intern en registreert bronlinks/notities, de controledatum, inhoudelijke goedkeuring, beeldrechtenstatus en een optionele beeldcredit. Field-level read access sluit deze groep uit van publieke API-responses; de frontendmapper leest of exposeert deze data bovendien nergens. Er worden geen persoonlijke goedkeurders opgeslagen.

Beeldrechtenstatus gebruikt `unknown`, `pending`, `approved` of `rejected`. Alleen `approved` betekent dat beeldgebruik inhoudelijk is vrijgegeven; de status publiceert nooit automatisch media of een projectrecord.

## Overzicht en detail

Het overzicht gebruikt titel, beeld, sector, jaar/periode en alleen bij openbare toestemming de opdrachtgever. Het detail toont uitsluitend beschikbare feiten; lege metadata, relaties, galerieën en CTA's leveren geen leeg blok op.

Gebruik `year` / **Realisatie** voor één formeel realisatie- of eindjaar wanneer dat letterlijk bronbaar is. Gebruik `period` / **Periode** voor een vrije maar brongetrouwe projectperiode, bijvoorbeeld `2021, 2023 & 2024`, `2022/2023`, `Sinds 2006` of `Al jaren`. Zet een periode nooit kunstmatig om naar één jaartal.

## Contentsecties

Gebruik contentsecties voor bronbare context, aanpak, uitvoering, technische scope en kwalitatieve resultaten. Voeg geen sectie toe om de pagina te vullen. Cijfers, percentages, vermogens, besparingen, doorlooptijden en andere resultaten mogen alleen uit een expliciete Powerspex-bron worden overgenomen.

## Diensten en expertises

De relaties `services` en `expertise` worden op de projectpagina getoond als betrokken disciplines en linken naar de bestaande detailroutes. Leg alleen relaties vast die aantoonbaar onderdeel waren van de projectscope. Een technisch onderdeel impliceert niet automatisch een dienst of expertise.

Projectrecords zijn de inhoudelijke bron voor deze projectrelaties. Voeg dezelfde relatie niet als losse projecttekst of nieuwe hardcoded kaart toe.

## Uitgelichte homepageprojecten

De bestaande homepagevolgorde blijft behouden:

1. expliciet geselecteerde projecten in de Homepage-global;
2. anders gepubliceerde projecten met `featured=true`, gesorteerd op `featuredOrder`.

Homepagekaarten linken altijd naar `/projecten/[slug]`.

## Een nieuw project toevoegen

1. Verzamel en archiveer de goedgekeurde Powerspex-bronnen en fotografie.
2. Maak een project als draft aan en vul titel, slug en uitsluitend bronbare metadata in.
3. Vul `client` alleen bewust in en zet `clientIsPublic` uitsluitend aan na expliciete toestemming.
4. Voeg een feitelijke samenvatting, hero en alleen onderbouwde contentsecties toe.
5. Koppel uitsluitend aantoonbare diensten en expertises.
6. Gebruik alleen projecteigen, goedgekeurde media met feitelijke alt-tekst.
7. Voeg geen cijfers, klantclaims, normen of resultaten toe zonder concrete bron.
8. Controleer SEO op vertrouwelijke gegevens.
9. Laat technische claims, klantnaam en publicatiescope menselijk goedkeuren.
10. Publiceer pas daarna het projectrecord.
