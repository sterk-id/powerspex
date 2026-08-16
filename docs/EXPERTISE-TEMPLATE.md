# Generiek Expertise-template

## Doel en onderscheid

Een **dienst** is een opdracht die een klant rechtstreeks kan afnemen. Een **expertise** is specialistische kennis die binnen verschillende industriële vraagstukken en diensten kan worden ingezet. De website legt dit verschil klantgericht uit zonder de interne taxonomie op detailpagina's te benoemen.

Alle expertisepagina's gebruiken de dynamische route `/expertises/[slug]`, de bestaande Payload-collection `expertise` en het gedeelde detailpresentatiepatroon. Er worden geen hardcoded routes per expertise gemaakt.

`DetailPage` is de generieke presentatielaag met het neutrale datatype `DetailPageData`. `ServiceDetail` en `ExpertiseDetail` zijn dunne wrappers met ieder een eigen semantisch datatype. Zij vertalen hun relaties en alleen de inhoudelijk afwijkende sectielabels naar de gedeelde presentatie. Daardoor is Expertise niet afhankelijk van een Service-component en blijft de markup centraal onderhouden.

## CMS-model

De kernvelden `title`, `slug`, `summary`, `heroImage`, `relatedServices` en `navigationOrder` blijven bestaan. Het volledige model bevat daarnaast:

- hero: `eyebrow`, `heroTitle`, `heroIntro` en `heroImage`;
- intro: titel, tekst en optionele afbeelding;
- expertisegebieden: herhaalbare titel en omschrijving, met instelbare sectiekoppen;
- optionele verdiepende contentsecties met bovenregel, titel, tekst, afbeelding, beeldpositie en een beperkt thema;
- relaties naar bestaande Services en Projects;
- gevalideerde standaarden en certificeringen;
- optionele werkwijze, FAQ en CTA;
- SEO: metatitel, metabeschrijving en Open Graph-afbeelding.

Titel, slug en summary zijn verplicht. Alle presentatiesecties zijn optioneel en renderen alleen met bruikbare inhoud. Editors beheren inhoud, relaties, volgorde en zichtbaarheid; visuele vrijheid blijft beperkt tot de vooraf bepaalde contentsectievarianten.

## Relaties

`relatedServices` benoemt waar de expertise inhoudelijk kan worden ingezet. De relatie maakt een expertise niet afhankelijk van één dienst. `relatedProjects` wordt alleen gebruikt wanneer de expertise aantoonbaar onderdeel was van de goedgekeurde projectscope.

## Standaarden en certificeringen

Elk item heeft een exacte naam, type, toelichting/scope en `validated`. Publiek worden uitsluitend items met `validated=true` getoond. De typen onderscheiden:

- norm of standaard;
- certificering;
- opleiding of persoonscertificering;
- bedrijfs- of procescertificering.

Een toegepaste norm bewijst geen certificering. Valideer vóór publicatie de certificaathouder, instantie, scope en eventuele geldigheid. Zonder die onderbouwing blijft het item ongepubliceerd en verschijnt geen lege sectie.

## Nieuwe expertise toevoegen

1. Maak in Payload een draft in de collection **Expertises**.
2. Vul de kern, hero, intro en alleen aantoonbaar onderbouwde expertisegebieden in.
3. Leg relaties naar diensten en projecten expliciet vast.
4. Voeg normen of certificeringen alleen na inhoudelijke validatie toe en zet pas daarna `validated` aan.
5. Vul alleen een aanpak, FAQ of CTA in waarvoor goedgekeurde broncontent bestaat.
6. Controleer SEO, beeldrechten, alt-tekst, interne links en mobiele weergave.
7. Laat technische claims, veiligheidsstandaarden, certificeringen en klantnamen door een mens goedkeuren en publiceer daarna de draft.

## Cybersecurity & OT-security

De eerste volledige pagina gebruikt uitsluitend de reeds goedgekeurde repositorypositionering: digitale veiligheid van industriële automatiseringsomgevingen, IT/OT-context, security vanaf het ontwerp en samenhang met Software Engineering en Procesautomatisering. Er zijn geen normen, certificeringen, aanpakstappen of projecten gepubliceerd omdat de huidige bronnen daarvoor onvoldoende exacte validatie bevatten.

De bestaande foto van industriële besturingssoftware is gebruikt. Een specifiek, goedgekeurd Powerspex-beeld voor cybersecurity in een OT-omgeving blijft een redactioneel aandachtspunt.

## Content-integriteit

Gebruik alleen goedgekeurde Powerspex-content en aantoonbare publieke Powerspex-bronnen. Leid geen diensten, audits, technologieën, normrelaties, certificeringen, partners, medewerkersaantallen of klantcases af. AI-content blijft draft en wordt nooit automatisch gepubliceerd. Bij twijfel: maak het veld technisch beschikbaar, maar laat de publieke sectie weg.
