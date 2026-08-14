# Service Detail-template

De dynamische route `/wat-we-doen/[slug]` rendert gepubliceerde documenten uit de Payload-collectie **Diensten**. Software Engineering heeft daarnaast een gecontroleerde codefallback, zodat de eerste dienstpagina lokaal beoordeeld kan worden voordat de CMS-content is ingevoerd.

## CMS-model

Basisvelden zijn titel, slug, groep, bovenregel, korte samenvatting, hero-titel, hero-intro en hero-afbeelding. De inhoud bestaat uit een optionele introductie, herhaalbare werkzaamheden, gerelateerde expertises, gevalideerde certificeringen/standaarden, processtappen, gerelateerde projecten, FAQ en CTA. SEO bevat metatitel, metabeschrijving en een optionele Open Graph-afbeelding.

Titel, slug, groep en korte samenvatting zijn verplicht. Alle bezoekerssecties zijn conditioneel: een lege sectie wordt niet gerenderd. Certificeringen en standaarden verschijnen uitsluitend wanneer `Inhoudelijk gevalideerd voor publicatie` aanstaat.

## Services en expertises

Een dienst beschrijft wat een klant rechtstreeks kan afnemen. Een expertise beschrijft specialistische kennis. De relatie `Gerelateerde expertises` verbindt beide zonder ze inhoudelijk gelijk te stellen. Voor Software Engineering wordt Cybersecurity & OT-security prominent als expertise getoond.

## Een dienst toevoegen

1. Maak in Payload Admin een nieuwe Dienst als concept.
2. Vul de verplichte basisvelden en een unieke slug in.
3. Voeg alleen onderbouwde werkzaamheden en inhoud toe.
4. Koppel uitsluitend gepubliceerde expertises en projecten.
5. Controleer metadata, alt-teksten, responsive weergave en links.
6. Laat technische claims, normen, certificeringen, klantnamen en projecten inhoudelijk goedkeuren vóór publicatie.

## Content-integriteit

Verzin geen certificeringen, normen, klanten, projecten, resultaten, cijfers, technische capabilities of securityclaims. Onbevestigde informatie mag als leeg CMS-veld bestaan, maar krijgt geen placeholder op de publieke pagina. AI-content blijft concept en wordt nooit automatisch gepubliceerd.
