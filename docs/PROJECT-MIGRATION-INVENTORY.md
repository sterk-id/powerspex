# Projectreconciliatie dev psx2026

Status: broninventarisatie en reconciliatie. De projectselectie komt uitsluitend uit de Powerspex 2026-developmentomgeving. Dit document publiceert geen nieuwe projecten.

## 1. Primaire bron en afbakening

Primaire source of truth:

- [Projectindex dev psx2026](https://powerspex.nl/dev/psx2026/projects/)
- alle detailpagina's met een URL onder `/dev/psx2026/projects/`

De index bevat acht unieke projectdetailpagina's. Er is geen pagination of load-more. De interne vorige/volgende-projectlinks vormen dezelfde gesloten set. De oude `/portfolio/`- en `/referenties/`-collecties zijn niet gebruikt om projecten te selecteren.

Daarnaast zijn lokale implementatiebronnen vergeleken: Payload Projects, `src/data/projects.ts`, homepage-, dienst- en expertiserelaties en projectbeelden in `public/images`.

## 2. Volledige projectmatrix

| Projecttitel | Exacte dev psx2026-URL | Reeds gemigreerd | Status | Belangrijkste afwijkingen / actie |
| --- | --- | --- | --- | --- |
| Veolia – Bio-energiecentrale Industriepark Kleefse Waard | https://powerspex.nl/dev/psx2026/projects/veolia-bio-energiecentrale-industriepark-kleefse-waard/ | Nee | **NOG MIGREREN** | Niet aanwezig. Bron: Veolia; Energie & Biomassa; Industriepark Kleefse Waard (IPKW), Arnhem, Nederland; 2020; turnkey procesautomatisering/integratie. |
| Vattenfall – Migratie en upgrade PCS 7 stadsverwarming | https://powerspex.nl/dev/psx2026/projects/vattenfall-migratie-en-upgrade-pcs-7-stadsverwarming/ | Nee | **NOG MIGREREN** | Niet aanwezig. Bron: Vattenfall; Energie; Diemen, Nederland; 2021; migratie PCS 7 V7.1 SP2 naar V9.0 SP2 zonder onderbreking van de warmtelevering. |
| Vernieuwing automatisering stadsverwarming Eindhoven | https://powerspex.nl/dev/psx2026/projects/vernieuwing-automatisering-stadsverwarming-eindhoven/ | Nee | **NOG MIGREREN** | Niet aanwezig. Bron: Ennatuurlijk; Stadsverwarming (District Heating); Eindhoven, Nederland; 2020; volledige vernieuwing van de automatisering met PCS 7-architectuur. |
| Secundaire installatie 150kV – Velsen & IJmond | https://powerspex.nl/dev/psx2026/projects/secundaire-installatie-150kv-velsen-ijmond/ | Ja; lokaal Payload-draft | **BEHOUDEN** | Brongetrouw draftrecord met Qirion als opdrachtgever, Vattenfall als eindklant, sector, locatie, jaar, scope, vier contentsecties en gevalideerd featured image. Niet gepubliceerd en niet op de homepage. |
| Procesautomatisering WarmteStad Groningen | https://powerspex.nl/dev/psx2026/projects/procesautomatisering-warmtestad-groningen/ | Ja | **CORRIGEREN** | Fallback had afwijkende klant, lege sector/locatie, los realisatiejaar, verkorte scope en andere copy. Aantoonbare velden zijn gelijkgetrokken. |
| Turn-key bio-energie installatie – Emmtec Green Steam BV | https://powerspex.nl/dev/psx2026/projects/turn-key-bio-energie-installatie-emmtec-green-steam-bv/ | Nee; alleen voormalige homepagekaart | **NOG MIGREREN** | Bron: Emmtec Green Steam BV; Duurzame energie / Biomassa; GETEC Park, Emmen; 2023; turnkey engineering, automatisering en inbedrijfstelling. Homepagekaart verwijderd tot migratie. |
| E&I en procesautomatisering – E-Wood biomassacentrale Beveren | https://powerspex.nl/dev/psx2026/projects/ei-en-procesautomatisering-e-wood-biomassacentrale-beveren/ | Nee | **NOG MIGREREN** | Bron: Standardkessel Baumgarte (SBG), E-Wood als eindklant; Duurzame energie / Biomassa; Haven van Antwerpen (Beveren); 2021 en 2022; engineering, E&I, DCS & SIS, testen en training. |
| Automatisering warmtebuffers – Stadsverwarming Almere | https://powerspex.nl/dev/psx2026/projects/automatisering-warmtebuffers-stadsverwarming-almere/ | Nee | **NOG MIGREREN** | Niet aanwezig. Bron: Nuon (Vattenfall); Stadsverwarming; Almere; 2020; automatisering, E&I en inbedrijfstelling. |

## 3. Reconciliatie reeds gemigreerde projecten

### Procesautomatisering WarmteStad Groningen

| Veld | Dev psx2026 | Situatie na correctie |
| --- | --- | --- |
| Titel / slug | Procesautomatisering WarmteStad Groningen / `procesautomatisering-warmtestad-groningen` | Gelijk |
| Klant | WarmteStad (Gemeente Groningen & Waterbedrijf Groningen) | Gelijk en publiek |
| Sector | Duurzame energie / Warmtenetten | Gelijk en publiek |
| Locatie | Warmtecentrales Zernike Zonnepark & Dorkwerd | Gelijk en publiek |
| Jaar / periode | 2021, 2023, 2024 | Periode `2021, 2023 & 2024`; geen afwijkend los realisatiejaar |
| Scope | Regelfilosofie, engineering, levering, realisatie procesautomatisering | Gelijk |
| Copy | Casus; Opdracht aan Powerspex; Aanpak & oplossing; Resultaat | Dev-copy integraal overgenomen |
| Relatie | Dev noemt activiteiten en technologieën | Alleen aantoonbare huidige service `Procesautomatisering` |
| Beeld | `project_9.jpg` | Lokaal bestand is byte-identiek aan dev-bron |

Status: **CORRIGEREN** in deze branch; na merge inhoudelijk gelijkgetrokken met de primaire bron.

### Onderhoudswerk Twence

Twence komt niet voor op de dev-projectindex, niet in de acht detail-URL's en niet in de gesloten vorige/volgende-projectketen. Het lokale Twence-record was alleen een draft, was niet publiek en had één dienstrelatie. Na volledige inventarisatie zijn het draftrecord en zijn lokale Payload-relaties verwijderd. Er is geen Twence-content in Git opgenomen.

Status: **VERWIJDEREN** — uitgevoerd in de lokale Payload-database; media-validatie is gestopt.

## 4. Projecten buiten de dev-selectie

Deze eerder geïnventariseerde oude-site-items behoren niet tot de nieuwe migratiescope:

- Onderhoudswerk Twence;
- Elektrische installatie en besturing baggerzuigers;
- Parkeergarage Arnhem centraal;
- Concept engineering regelfilosofie geothermie Warmtesysteem Westland;
- Trainingsimulator AfvalEnergieCentrales.

`GETEC BioCoal Ketel 12` is geen afzonderlijk geselecteerd project. De dev-omgeving bevat de canonieke identiteit `Turn-key bio-energie installatie – Emmtec Green Steam BV`.

## 5. Fotografie-overzicht

| Project | Dev-projectbeeld | Lokale status |
| --- | --- | --- |
| Veolia | Geen uniek lokaal gevalideerd bestand | Inventariseren bij migratie |
| Vattenfall | Geen uniek lokaal gevalideerd bestand | Inventariseren bij migratie |
| Eindhoven | Geen uniek lokaal gevalideerd bestand | Inventariseren bij migratie |
| Velsen & IJmond | `project_10.jpg` | `project-velsen-ijmond.jpg` is byte-identiek |
| WarmteStad | `project_9.jpg` | `project-warmtestad-groningen.jpg` is byte-identiek |
| Emmtec | `project_8.jpg` | `project-emmtec-green-steam.jpg` is byte-identiek |
| E-Wood | `project_7.jpg` en dev-hero | Geen gevalideerd lokaal origineel |
| Almere | `project_6.jpg` en dev-hero | Geen gevalideerd lokaal origineel |

Een exacte match bewijst identiteit, niet zelfstandig gebruiksrecht of credit. Media wordt per migratie afzonderlijk goedgekeurd.

### Velsen & IJmond — migratiestatus

- Payload-status: reproduceerbaar draft via `pnpm content:migrate:projects`; niet publiek en niet uitgelicht;
- contentgoedkeuring: nog niet verleend;
- media: `project_10.jpg` is byte-identiek aan `public/images/project-velsen-ijmond.jpg` (1500 × 1000); de dev-pagina bevat geen alt-tekst of credit;
- mediarechtenstatus: in afwachting, omdat bestandsidentiteit geen zelfstandig bewijs van gebruiksrecht of rechthebbende is;
- overige beelden: `project_single-1.jpg` en `project_single-2.jpg` zijn gedeelde templatebeelden en niet als Velsen-projectspecifiek gevalideerd; daarom niet gemigreerd;
- relaties: Hardware engineering en Productie sluiten inhoudelijk aan op ontwerpen en paneelbouw. De import lost deze relaties op via slugs, maar laat ze leeg en rapporteert ze zolang hun gepubliceerde Payload-masterrecords ontbreken. Er is geen expertise afgeleid.

#### Bronvergelijking dev → Payload

| Veld | Beoordeling | Toelichting |
| --- | --- | --- |
| Titel | MATCH | Letterlijk overgenomen. |
| Opdrachtgever | MATCH | Qirion; de bron beschrijft Qirion als uitvoerende opdrachtgever. |
| Eindklant | MATCH | Vattenfall; de bron vermeldt dat Qirion in opdracht van Vattenfall werkte. |
| Sector | MATCH | `Energie / Hoogspanning`. |
| Locatie | MATCH | `Velsen & IJmond`. |
| Jaar | MATCH | 2020. |
| Periode | NIET AANWEZIG IN BRON | Leeg gelaten. |
| Scope | MATCH | `Engineering, paneelbouw, site works, testing & inbedrijfstelling`. |
| Casus | MATCH | Volledige broncopy overgenomen. |
| Opdracht aan Powerspex | MATCH | Volledige broncopy overgenomen. |
| Aanpak & oplossing | MATCH | Volledige broncopy overgenomen; opsomming alleen typografisch genormaliseerd. |
| Resultaat | MATCH | Volledige broncopy overgenomen; opsomming alleen typografisch genormaliseerd. |
| Diensten | MENSELIJKE BESLISSING NODIG | Hardware engineering en Productie zijn inhoudelijk aantoonbare kandidaten, maar hun Payload-masterrecords ontbreken. |
| Expertises | MATCH | Geen formele expertise uit de bron afgeleid. |
| SEO-titel | MATCH | Dev-paginatitel overgenomen. |
| SEO-description | NIET AANWEZIG IN BRON | De dev-metadata bevat een niet-projectspecifieke Engelstalige templateplaceholder; veld blijft leeg. De frontend gebruikt de brongetrouwe scope als veilige fallback. |

## 6. Relaties en CMS-aandachtspunten

- Dev-disciplinelijsten mengen services met activiteiten en technologieën. Alleen aantoonbare mappings naar de bestaande taxonomie mogen worden gemigreerd.
- Sommige projecten noemen opdrachtgever en eindklant gecombineerd. Het generieke model ondersteunt beide, maar publicatievlaggen moeten per project worden gevalideerd.
- Bestaande generieke velden voor locatie, partners en interne bron-/goedkeuringsregistratie volstaan; geen projectspecifieke schema-uitbreiding is nodig.
- Meerdere bronjaren horen in `period` wanneer één `year` de inhoud vervormt.

## 7. Aanbevolen implementatievolgorde

Na afzonderlijke content- en media-goedkeuring:

1. Turn-key bio-energie installatie – Emmtec Green Steam BV;
2. E&I en procesautomatisering – E-Wood biomassacentrale Beveren;
3. Automatisering warmtebuffers – Stadsverwarming Almere;
4. Vernieuwing automatisering stadsverwarming Eindhoven;
5. Vattenfall – Migratie en upgrade PCS 7 stadsverwarming;
6. Veolia – Bio-energiecentrale Industriepark Kleefse Waard.

Dit is geen publicatiegoedkeuring en start geen migratie.

## 8. Resterende contentvragen

- Opdrachtgever/eindklant-publicatievlaggen per project formeel bevestigen.
- Service- en expertise-relaties valideren zonder technologieën als taxonomie te behandelen.
- Voor niet byte-identiek beschikbare beelden origineel, projectspecificiteit, credit en gebruiksrecht vaststellen.
- Bevestigen of bronresultaten, zoals ononderbroken warmtelevering, letterlijk mogen worden gepubliceerd.
- Redirects bepalen voor oude WordPress-project-URL's; dit document wijzigt geen redirects.
