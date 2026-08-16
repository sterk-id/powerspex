# Projectportfolio-inventarisatie voor CMS-migratie

Status: bron- en contentinventarisatie. Dit document publiceert geen projecten, wijzigt geen productiecontent en legt geen nieuwe claims vast. WarmteStad Groningen is de afgeronde pilot en valt buiten de telling en batches.

Telling: 8 kandidaatprojecten buiten WarmteStad Groningen; Batch A: 4, Batch B: 3 en Batch C: 1.

## 1. Gebruikte bronnen en werkwijze

### Repository

- `src/data/homepage.ts`: drie bestaande homepagekaarten, waarvan WarmteStad al is gemigreerd;
- `src/data/services.ts`: alleen WarmteStad heeft al een projectrelatie;
- `src/data/expertise.ts`: geen bestaande projectrelaties;
- `src/data/projects.ts`: uitsluitend de goedgekeurde WarmteStad-pilot;
- `src/collections/Projects.ts` en `docs/PROJECT-TEMPLATE.md`: huidig model en publicatieregels;
- `public/images`: drie projectgenaamde bestanden voor WarmteStad, Emmtec Green Steam en Velsen & IJmond.

### Publieke Powerspex-bronnen

- [Referentieoverzicht](https://powerspex.nl/referenties/)
- [Concept engineering regelfilosofie geothermie Warmtesysteem Westland](https://powerspex.nl/portfolio/warmtesysteem-westland/)
- [Trainingsimulator AfvalEnergieCentrales](https://powerspex.nl/portfolio/training-simulator-afval-energie-centrales/)
- [Onderhoudswerk Twence](https://powerspex.nl/portfolio/twence-onderhoud/)
- [GETEC BioCoal Ketel 12](https://powerspex.nl/portfolio/getec-biocoal-ketel-12/)
- [E&I Biomassaketel E-Wood](https://powerspex.nl/portfolio/biomassaketel-e-wood/)
- [Elektrische installatie en besturing baggerzuigers](https://powerspex.nl/portfolio/baggerzuigers/)
- [Parkeergarage Arnhem centraal](https://powerspex.nl/portfolio/arnhem-parkeergarage/)
- [Aanvullende Powerspex-bron over E-Wood](https://powerspex.nl/ewood/)

De publieke referentiepagina's zijn leidend voor identiteit, opdrachtgever, realisatie en scope. Repositorylabels gelden alleen als aanvullende aanwijzing. Een homepagekaart is geen voldoende bron voor een sector, relatie of technische scope als de openbare projectbron die informatie niet bevestigt.

### Beoordelingsregels

- `clientIsPublic: ja` betekent dat Powerspex de klant zelf op een openbare referentiepagina noemt; het is geen uitspraak over afzonderlijk vastgelegde contractuele toestemming.
- Sector blijft leeg wanneer de Powerspex-bron geen sectortaxonomie letterlijk noemt. Werkgebieden, installatietypen en eindklanten worden niet tot sector vertaald.
- Alleen huidige taxonomierelaties die rechtstreeks aansluiten op een genoemde discipline of ondubbelzinnige opdrachtomschrijving worden voorgesteld.
- Productnamen en technologieën zoals PCS7, Yokogawa, TIA Portal en SLA zijn geen dienst of expertise.
- Een publiek bronbeeld is pas migreerbaar nadat het originele bestand, gebruiksrecht, projectspecificiteit en alt-tekst redactioneel zijn bevestigd.
- `READY` betekent inhoudelijk bouwbaar als draft. Het is geen toestemming om automatisch te publiceren.

## 2. Volledige projectmatrix

### 2.1 Onderhoudswerk Twence

| Veld | Validatie |
| --- | --- |
| Projectnaam | Onderhoudswerk Twence |
| Publieke klantnaam | Twence B.V. |
| clientIsPublic | Ja; klant en eindklant staan publiek op de Powerspex-referentie. |
| Voorgestelde slug | `onderhoudswerk-twence` |
| Publieke bron | [Powerspex-referentie](https://powerspex.nl/portfolio/twence-onderhoud/) |
| Projectspecifieke fotografie | Publieke bron heeft `ABB-1024x684.jpg`; niet aanwezig in `public/images`. Voorstel: als draft zonder projectbeeld bouwen totdat origineel en rechten zijn goedgekeurd. |
| Sector | Niet letterlijk bronbaar; leeg laten. |
| Locatie | Niet letterlijk als projectlocatie vermeld; leeg laten. |
| Realisatiejaar | Geen enkel jaar. |
| Periode | `Al jaren`, letterlijk onder Realisatie. |
| Gevalideerde scope | Kalibratie van instrumenten op de verbrandingslijn en overige E&I-werkzaamheden tijdens onderhoudstops; de bron specificeert onder meer temperatuurmetingen, drukschakelaars/transmitters, meetleidingen en aandrijvingen. |
| Dienst(en) | Service, onderhoud & inspectie; bron noemt `Service/buitendienst` en onderhoudstops/kalibratie. |
| Expertise(s) | Geen aantoonbare expertise. |
| Intro/bodycopy | Voldoende voor een compacte intro en één feitelijke scope-/werkzaamhedensectie. |
| SEO-data | Bronbare paginatitel en projectspecifiek bronbeeld; geen bruikbare meta description. Nieuwe beschrijving uitsluitend uit scope formuleren. |
| Ontbrekende informatie | Beeldgoedkeuring of expliciete keuze voor beeldloos; eventueel redactioneel besluit of `Al jaren` als periode gewenst is. |
| Publicatierisico | Laag: klant, doorlopende realisatie en werkzaamheden zijn expliciet publiek. Geen resultaten of certificeringen overnemen. |
| Advies | **READY** — kan veilig als compacte, beeldloze draft worden gebouwd. |

### 2.2 E&I Biomassaketel E-Wood

| Veld | Validatie |
| --- | --- |
| Projectnaam | E&I Biomassaketel E-Wood |
| Publieke klantnaam | Standardkessel Baumgarte (SBG); eindklant E-Wood, joint venture van Indaver en SUEZ. |
| clientIsPublic | Ja; alle namen staan publiek op de Powerspex-referentie. |
| Voorgestelde slug | `biomassaketel-e-wood` |
| Publieke bron | [Powerspex-referentie](https://powerspex.nl/portfolio/biomassaketel-e-wood/) en [aanvullend Powerspex-artikel](https://powerspex.nl/ewood/) |
| Projectspecifieke fotografie | Referentie heeft `Project-Ewood-1024x768.jpeg`; aanvullend artikel bevat meerdere projectbeelden. Geen bestand in `public/images`. Voorstel: beeldloos bouwen totdat origineel en rechten zijn goedgekeurd. |
| Sector | Niet als taxonomie genoemd; leeg laten. `Waste-to-energy` is installatiecontext, geen bevestigde sectorwaarde. |
| Locatie | Doel, België; letterlijk genoemd in de aanvullende Powerspex-bron. |
| Realisatiejaar | 2022 als eindjaar. |
| Periode | `2021/2022`, letterlijk bronbaar. |
| Gevalideerde scope | Gehele E&I-deel leveren, monteren en in bedrijf stellen, waaronder hoofdverdeling/MCC's, E&I-bekabeling en kabelbanen, noodstroom, DCS, SIS, instrumentatie en intern videosysteem. |
| Dienst(en) | Hardware engineering; Productie (bron noemt paneelbouw). Andere huidige diensten niet toevoegen zonder bevestiging. |
| Expertise(s) | Geen. Een genoemd SIS bewijst niet dat Powerspex' formele expertise-relatie Functional Safety voor dit project mag worden gepubliceerd. |
| Intro/bodycopy | Referentie biedt compacte scope; aanvullend Powerspex-artikel biedt voldoende projectcontext en uitvoeringscopy. KPI's en klantcitaat niet migreren zonder afzonderlijke goedkeuring. |
| SEO-data | Bronbare titels en projectspecifieke bronbeelden; geen bruikbare meta description. |
| Ontbrekende informatie | Alleen beeldgoedkeuring; optioneel bevestigen of eindklant en samenwerking met Yokogawa publiek gestructureerd moeten worden getoond. |
| Publicatierisico | Laag-middel: meerdere publieke bedrijfsnamen en technische systemen vragen zorgvuldige, letterlijke overname. |
| Advies | **READY** — sterke bron en concrete scope; beeldloos publiceren is technisch en inhoudelijk verdedigbaar. |

### 2.3 Elektrische installatie en besturing baggerzuigers

| Veld | Validatie |
| --- | --- |
| Projectnaam | Elektrische installatie en besturing baggerzuigers |
| Publieke klantnaam | Damen Dredging Equipment |
| clientIsPublic | Ja; publiek genoemd door Powerspex. |
| Voorgestelde slug | `elektrische-installatie-besturing-baggerzuigers` |
| Publieke bron | [Powerspex-referentie](https://powerspex.nl/portfolio/baggerzuigers/) |
| Projectspecifieke fotografie | Referentie heeft `Damen-Powerspex-1024x683.jpg`; niet aanwezig in `public/images`. Voorstel: beeldloos bouwen totdat origineel en rechten zijn goedgekeurd. |
| Sector | Niet letterlijk als taxonomie genoemd; leeg laten. `Maritieme sector` van de algemene dienstenpagina niet aan dit project toekennen. |
| Locatie | Geen specifieke locatie; de bron zegt dat de zuigers wereldwijd worden verkocht. Dat is geen projectlocatie. |
| Realisatiejaar | Geen enkel jaar. |
| Periode | `Sinds 2006`, letterlijk bronbaar. |
| Gevalideerde scope | Elektrische installatie en besturing van baggerzuigers. |
| Dienst(en) | Software engineering; Hardware engineering; Productie (paneelbouw). Veldmontage/IBS niet zonder redactionele bevestiging als Service, onderhoud & inspectie modelleren. |
| Expertise(s) | Geen aantoonbare expertise. |
| Intro/bodycopy | Kort maar voldoende voor een compacte projectintro en scopetekst zonder aanvullende claims. |
| SEO-data | Bronbare paginatitel en projectspecifiek bronbeeld; geen bruikbare meta description. |
| Ontbrekende informatie | Beeldgoedkeuring; eventueel meer goedgekeurde bodycopy, maar niet noodzakelijk voor een compacte publicatie. |
| Publicatierisico | Laag: klant, periode, scope en disciplines zijn expliciet. Vermijd uitspraken over aantallen, typen of locaties van zuigers. |
| Advies | **READY** — langlopende, herkenbare referentie met drie aantoonbare diensten. |

### 2.4 Parkeergarage Arnhem centraal

| Veld | Validatie |
| --- | --- |
| Projectnaam | Parkeergarage Arnhem centraal |
| Publieke klantnaam | Gemeente Arnhem |
| clientIsPublic | Ja; klant en eindklant staan publiek op de Powerspex-referentie. |
| Voorgestelde slug | `parkeergarage-arnhem-centraal` |
| Publieke bron | [Powerspex-referentie](https://powerspex.nl/portfolio/arnhem-parkeergarage/) |
| Projectspecifieke fotografie | Referentie heeft `IMG_5369-1024x768.jpg`; niet aanwezig in `public/images`. Voorstel: beeldloos bouwen totdat origineel en rechten zijn goedgekeurd. |
| Sector | Niet letterlijk bronbaar; leeg laten. |
| Locatie | Arnhem Centraal; letterlijk onderdeel van projectnaam en scope. |
| Realisatiejaar | 2022 |
| Periode | Geen. |
| Gevalideerde scope | Vervangen en verbeteren van de besturing van beveiligingen en ventilatie in de parkeergarage; uitgevoerd met 7Solutions. |
| Dienst(en) | Hardware engineering; Productie (paneelbouw). TIA Portal is technologie; SLA en veldmontage niet automatisch aan een huidige dienst koppelen. |
| Expertise(s) | Geen aantoonbare expertise. |
| Intro/bodycopy | Kort maar voldoende voor een compacte projectintro en scopetekst. |
| SEO-data | Bronbare paginatitel en projectspecifiek bronbeeld; geen bruikbare meta description. |
| Ontbrekende informatie | Beeldgoedkeuring; optioneel toestemming/keuze voor gestructureerde vermelding van 7Solutions. |
| Publicatierisico | Laag: publieke overheidsklant, jaar en concrete scope zijn expliciet. Geen veiligheidsresultaten claimen. |
| Advies | **READY** — duidelijke identiteit, jaar, scope en twee aantoonbare diensten. |

### 2.5 GETEC BioCoal Ketel 12

| Veld | Validatie |
| --- | --- |
| Projectnaam | GETEC BioCoal Ketel 12 volgens portfolio; homepage noemt `Turn-key bio-energie installatie – Emmtec Green Steam BV`. |
| Publieke klantnaam | Emmtec Green Steam B.V.; eindklant GETEC Park Emmen. |
| clientIsPublic | Ja; beide namen staan op de openbare Powerspex-referentie. |
| Voorgestelde slug | `getec-biocoal-ketel-12` na bevestiging van canonieke titel; bestaande homepage-URL vereist daarna een redirectmapping. |
| Publieke bron | [Powerspex-referentie](https://powerspex.nl/portfolio/getec-biocoal-ketel-12/) plus repository-homepagekaart |
| Projectspecifieke fotografie | `public/images/project-emmtec-green-steam.jpg` is door de repository als projectbeeld gekoppeld; portfolio heeft `20230906_113147-1024x768.jpg`. De onderlinge identiteit en het originele/gebruiksgerechtigde beeld moeten worden bevestigd. |
| Sector | `Energie & utilities` staat alleen in repository-homepagedata en niet in de projectbron; voorlopig niet publiceren. |
| Locatie | GETEC Park Emmen is letterlijk genoemd als eindklant/projectbestemming; leg alleen `Emmen` vast na redactionele keuze voor locatiepresentatie. |
| Realisatiejaar | Portfolio: eindjaar 2023. Homepage: 2023. |
| Periode | `2022/2023`, letterlijk in portfolio. |
| Gevalideerde scope | Leveren van een biokolen gestookte stoomketelinstallatie voor GETEC Park Emmen, samen met Kaisec B.V. |
| Dienst(en) | Hardware engineering; Productie (paneelbouw). Instrumentatie engineering, veldmontage en PCS7 hebben geen één-op-één huidige dienstrelatie. |
| Expertise(s) | Simulaties, omdat `Simulatie` expliciet als toegepaste discipline is vermeld; bevestig dat de enkelvoudige bronterm naar de huidige expertise-taxonomie mag worden gemapt. |
| Intro/bodycopy | Voldoende voor een compacte intro en scope, maar te beperkt voor meerdere inhoudssecties. |
| SEO-data | Twee bronbare titels en twee kandidaatbeelden; geen bruikbare meta description. Canonieke identiteit moet eerst worden gekozen. |
| Ontbrekende informatie | Canonieke titel/slug; relatie tussen homepagebeeld en portfolio-item; bevestiging expertise-mapping Simulaties; redirect voor bestaande homepage-URL. |
| Publicatierisico | Middel: twee publieke namen/identiteiten voor vermoedelijk hetzelfde project en afwijkende beeldreferenties. |
| Advies | **READY MET KLEINE CONTENTVRAAG** — inhoud is voldoende zodra identiteit, beeld en expertise-mapping zijn bevestigd. |

### 2.6 Concept engineering regelfilosofie geothermie Warmtesysteem Westland

| Veld | Validatie |
| --- | --- |
| Projectnaam | Concept engineering regelfilosofie geothermie Warmtesysteem Westland |
| Publieke klantnaam | ETP; eindklant Warmtesysteem Westland. |
| clientIsPublic | Ja; beide namen staan publiek op de Powerspex-referentie. |
| Voorgestelde slug | `warmtesysteem-westland-regelfilosofie` |
| Publieke bron | [Powerspex-referentie](https://powerspex.nl/portfolio/warmtesysteem-westland/) |
| Projectspecifieke fotografie | Referentie heeft `referentie-wsw-1024x764.jpg`; niet aanwezig in `public/images`. Beeldloos voorstel mogelijk na dienstvalidatie. |
| Sector | Niet letterlijk als taxonomie genoemd; leeg laten. `Geothermie` is bronlabel/technische context, niet de huidige sector-taxonomie. |
| Locatie | Niet afzonderlijk bronbaar; `Westland` is onderdeel van de systeemnaam en wordt niet automatisch als locatieveld gebruikt. |
| Realisatiejaar | 2020 |
| Periode | Geen. |
| Gevalideerde scope | Systeemstudie, functioneel ontwerp/regelfilosofie en toetsing met PsxCad in meerdere scenario's voor een proof of concept. |
| Dienst(en) | Nog te bevestigen. De bron noemt `Simulatie Engineering/R&D/geothermie`, maar geen huidige dienst letterlijk. Project engineering of Procesautomatisering niet afleiden zonder inhoudelijke goedkeuring. |
| Expertise(s) | Simulaties is aantoonbaar via Simulatie Engineering en PsxCad. Geen aparte expertise Geothermie in de huidige taxonomie. |
| Intro/bodycopy | Ruim voldoende: context, aanpak, vier werkzaamheden en kwalitatieve uitkomst zijn publiek beschreven. Vermijd de promotionele resultaatclaim totdat redactioneel goedgekeurd. |
| SEO-data | Bronbare paginatitel en projectspecifiek bronbeeld; geen bruikbare meta description. |
| Ontbrekende informatie | Minimaal één huidige dienstrelatie bevestigen; beeldgoedkeuring of beeldloos besluit; keuze of ETP of eindklant als primaire publieke opdrachtgever wordt getoond. |
| Publicatierisico | Middel: sterke inhoud, maar publicatie zonder aantoonbare huidige dienst schendt het minimumcriterium. |
| Advies | **READY MET KLEINE CONTENTVRAAG** — na één expliciete dienstkeuze is dit een sterke volgende case. |

### 2.7 Trainingsimulator AfvalEnergieCentrales

| Veld | Validatie |
| --- | --- |
| Projectnaam | Trainingsimulator AfvalEnergieCentrales |
| Publieke klantnaam | O&O-fonds; eindklant AEC's Nederland. Attero, HVC en AVR worden als actief participerende AEC's genoemd. |
| clientIsPublic | Ja; alle namen staan publiek in de Powerspex-referentie. Primaire opdrachtgeverpresentatie nog redactioneel kiezen. |
| Voorgestelde slug | `trainingsimulator-afvalenergiecentrales` |
| Publieke bron | [Powerspex-referentie](https://powerspex.nl/portfolio/training-simulator-afval-energie-centrales/) |
| Projectspecifieke fotografie | Referentie heeft `foto5-1024x472.jpeg`; niet aanwezig in `public/images`. Beeldloos voorstel mogelijk na dienstvalidatie. |
| Sector | Niet als taxonomie genoemd; leeg laten. |
| Locatie | Lelystad wordt letterlijk genoemd voor de aanvullend geleverde en mede geïnstalleerde hardware; het totale project is niet tot één locatie beperkt. Niet als generieke projectlocatie publiceren zonder nuance. |
| Realisatiejaar | Eindjaar 2023. |
| Periode | `2021-2023`, letterlijk bronbaar. |
| Gevalideerde scope | Ontwikkelen en leveren van twee generieke trainingsimulatorvarianten voor AfvalEnergieCentrales met PsxCad; aanvullende hardwarelevering en mede-installatie voor Lelystad. |
| Dienst(en) | Nog te bevestigen. De bron noemt `Simulatie Engineering/R&D`, geen huidige dienst. Software engineering ligt technisch voor de hand maar mag niet worden afgeleid. |
| Expertise(s) | Simulaties is expliciet aantoonbaar via Simulatie Engineering en PsxCad. |
| Intro/bodycopy | Ruim voldoende voor context, twee varianten, toepassing en aanvullende hardware. Toekomstopties niet als gerealiseerd resultaat formuleren. |
| SEO-data | Bronbare paginatitel en projectspecifiek bronbeeld; geen bruikbare meta description. |
| Ontbrekende informatie | Minimaal één huidige dienstrelatie; primaire opdrachtgeverpresentatie; beeldgoedkeuring of beeldloos besluit. |
| Publicatierisico | Middel: meerdere publieke organisaties en geen expliciete huidige dienstrelatie. |
| Advies | **READY MET KLEINE CONTENTVRAAG** — sterke case voor Simulaties zodra de dienst- en opdrachtgevermapping is bevestigd. |

### 2.8 Secundaire installatie 150kV – Velsen & IJmond

| Veld | Validatie |
| --- | --- |
| Projectnaam | Secundaire installatie 150kV – Velsen & IJmond; alleen aanwezig in repository-homepagedata. |
| Publieke klantnaam | Niet beschikbaar. |
| clientIsPublic | Onbekend. |
| Voorgestelde slug | Bestaande kaart gebruikt `secundaire-installatie-150kv-velsen-ijmond`; nog niet als projectslug goedkeuren. |
| Publieke bron | Geen openbare Powerspex-project-/portfoliobron gevonden. |
| Projectspecifieke fotografie | `public/images/project-velsen-ijmond.jpg` toont een generiek windparkbeeld en is niet als projectspecifiek bewijs te valideren. Niet gebruiken voor een projectdetail. |
| Sector | `Energie & utilities` staat alleen in de homepagekaart; niet door een goedgekeurde projectbron bevestigd. |
| Locatie | `Velsen & IJmond` staat in de titel, maar zonder projectbron is de exacte projectidentiteit onvoldoende gevalideerd. |
| Realisatiejaar | 2020 volgens homepagekaart; niet onafhankelijk bevestigd. |
| Periode | Geen. |
| Gevalideerde scope | Geen concrete broncopy beschikbaar. |
| Dienst(en) | Geen aantoonbare relatie. |
| Expertise(s) | Geen aantoonbare relatie. |
| Intro/bodycopy | Niet beschikbaar. |
| SEO-data | Alleen kaarttitel en generiek beeld; onvoldoende. |
| Ontbrekende informatie | Publieke/goedkeurde Powerspex-bron, opdrachtgever/privacybesluit, concrete scope, dienstrelatie, jaarbevestiging en projectspecifieke fotografie of expliciet beeldloos besluit. |
| Publicatierisico | Hoog: vrijwel alle minimale publicatiecriteria ontbreken en het huidige beeld kan een andere opdracht suggereren. |
| Advies | **BLOCKED** — niet bouwen of publiceren totdat een goedgekeurd projectdossier beschikbaar is. |

## 3. Prioritering

### Batch A — direct veilig als draft te bouwen

1. **Onderhoudswerk Twence** — expliciete publieke klant, doorlopende periode, concrete werkzaamheden en directe relatie met Service, onderhoud & inspectie.
2. **E&I Biomassaketel E-Wood** — rijke Powerspex-bronnen, duidelijke periode, concrete E&I-scope en aantoonbare Hardware engineering/Productie.
3. **Elektrische installatie en besturing baggerzuigers** — publieke klant, letterlijke periode en drie aantoonbare diensten; compact beeldloos format volstaat.
4. **Parkeergarage Arnhem centraal** — publieke opdrachtgever, locatie, jaar, afgebakende scope en twee aantoonbare diensten.

Voor alle vier geldt: bouw eerst als draft en publiceer voorlopig zonder projectbeeld, tenzij het originele bronbeeld en de gebruiksrechten vooraf expliciet worden goedgekeurd.

### Batch B — één of enkele eenvoudige contentvragen

1. **GETEC BioCoal Ketel 12** — kies canonieke titel/slug, bevestig beeldidentiteit en mapping naar Simulaties.
2. **Warmtesysteem Westland** — bevestig minimaal één huidige dienst en primaire opdrachtgeverpresentatie.
3. **Trainingsimulator AfvalEnergieCentrales** — bevestig minimaal één huidige dienst en primaire opdrachtgeverpresentatie.

### Batch C — voorlopig niet publiceren

1. **Secundaire installatie 150kV – Velsen & IJmond** — geen valide publieke projectbron, klant, scope, relatie of projectspecifiek beeld.

## 4. Openstaande contentvragen

### Batchoverstijgend

- Mogen de openbare WordPress-bronbeelden worden gemigreerd, en waar zijn originelen, rechten en credits vastgelegd?
- Wil Powerspex projecten zonder goedgekeurd beeld publiceren met de bestaande neutrale headerfallback?
- Welke naam krijgt voorrang wanneer opdrachtgever en eindklant beide publiek zijn?
- Mogen oude disciplinebenamingen alleen na expliciete inhoudelijke mapping aan de huidige service-/expertisetaxonomie worden gekoppeld?
- Moeten partners/samenwerkingspartijen publiek en gestructureerd worden getoond?
- Moeten bestaande WordPress-portfolio-URL's één-op-één worden behouden of via een expliciete redirectmapping naar nieuwe slugs gaan?

### Projectspecifiek

- GETEC: is de homepagecase `Turn-key bio-energie installatie – Emmtec Green Steam BV` exact hetzelfde project als `GETEC BioCoal Ketel 12`?
- GETEC: hoort `project-emmtec-green-steam.jpg` aantoonbaar bij deze case en mag `Simulatie` naar expertise Simulaties worden gemapt?
- Warmtesysteem Westland: welke huidige dienst is aantoonbaar betrokken?
- Trainingsimulator AEC: welke huidige dienst is aantoonbaar betrokken en wie wordt primaire opdrachtgever?
- Velsen & IJmond: kan een goedgekeurd brondossier met klant, scope, dienst, jaar en echt projectbeeld worden geleverd?

## 5. Fotografie-overzicht

| Project | In `public/images` | Publiek Powerspex-bronbeeld | Migratieadvies |
| --- | --- | --- | --- |
| Onderhoudswerk Twence | Nee | `ABB-1024x684.jpg` | Eerst origineel, projectspecificiteit en rechten goedkeuren; anders beeldloos. |
| E&I Biomassaketel E-Wood | Nee | `Project-Ewood-1024x768.jpeg` plus artikelbeelden | Eerst origineel/rechten selecteren; anders beeldloos. |
| Baggerzuigers | Nee | `Damen-Powerspex-1024x683.jpg` | Eerst origineel en rechten goedkeuren; anders beeldloos. |
| Parkeergarage Arnhem centraal | Nee | `IMG_5369-1024x768.jpg` | Eerst origineel en rechten goedkeuren; anders beeldloos. |
| GETEC BioCoal Ketel 12 | `project-emmtec-green-steam.jpg` | `20230906_113147-1024x768.jpg` | Identiteit tussen beide beelden/projectnamen bevestigen. |
| Warmtesysteem Westland | Nee | `referentie-wsw-1024x764.jpg` | Eerst origineel en rechten goedkeuren; anders beeldloos. |
| Trainingsimulator AEC | Nee | `foto5-1024x472.jpeg` | Eerst origineel en rechten goedkeuren; anders beeldloos. |
| Velsen & IJmond | `project-velsen-ijmond.jpg` | Geen projectbron gevonden | Lokaal beeld is generiek windparkbeeld; niet als projectbewijs gebruiken. |

WarmteStad (`project-warmtestad-groningen.jpg`) is al als pilot afgehandeld en staat alleen ter volledigheid buiten deze tabel.

## 6. Generieke CMS-gaps

Het huidige Projects-model is voldoende voor een minimale titel, opdrachtgever, jaar/periode, scope, relaties, contentsecties, beeld, CTA en SEO. Voor de gevonden portefeuille ontbreken vier generieke, herhaaldelijk relevante structuren:

1. **Eindklant naast opdrachtgever** — zes openbare referenties onderscheiden `Klantnaam` en `Eindklant`. Eén `client`-veld verliest die betekenis of dwingt namen in vrije tekst. Nodig als optioneel tweede naamveld met eigen publicatiegoedkeuring.
2. **Projectlocatie** — E-Wood, Arnhem en delen van GETEC/AEC hebben letterlijk bronbare locatie-informatie. Een optioneel gestructureerd locatieveld voorkomt dat locatie in titel of body moet worden verstopt. Het moet leeg kunnen blijven en nooit automatisch worden afgeleid.
3. **Partners/samenwerkingspartijen** — GETEC, E-Wood, Arnhem en Warmtesysteem Westland noemen partners of uitvoeringspartners. Een optionele herhaalbare structuur met naam, rol en publicatievlag voorkomt project-specifieke copyhacks.
4. **Bron- en goedkeuringsregistratie** — het projectrecord mist interne velden voor bron-URL/dossier, gecontroleerd-op, contentgoedkeuring en beeldrechten/credits. Deze provenance hoort niet publiek te renderen, maar is generiek nodig om latere migraties controleerbaar te houden.

Aanvullend verdient het bestaande `period`-veld een vaste redactierichtlijn voor waarden als `2022/2023`, `Sinds 2006` en `Al jaren`; hiervoor is niet per se een schemawijziging nodig. De frontend kan al zonder beeld en zonder lege facts renderen, dus een verplicht projectbeeld is geen CMS-gap.

## 7. Aanbevolen implementatievolgorde

1. Leg eerst de generieke beslissingen vast over eindklant, locatie, partners, bronprovenance en beeldrechten; pas daarna eventueel het schema generiek aan in een afzonderlijke opdracht.
2. Bouw **Onderhoudswerk Twence** als eerste compacte, beeldloze servicecase. Dit test doorlopende perioden en Service, onderhoud & inspectie zonder extra taxonomie.
3. Bouw **Parkeergarage Arnhem centraal** als tweede. Dit test een enkel jaar, letterlijk bronbare locatie en twee diensten.
4. Bouw **Elektrische installatie en besturing baggerzuigers**. Dit test `Sinds 2006` en meerdere diensten zonder een verzonnen sector.
5. Bouw **E&I Biomassaketel E-Wood**. Dit test opdrachtgever/eindklant, locatie, partner en een rijkere technische scope.
6. Los de drie Batch B-vragen op en migreer daarna GETEC, Warmtesysteem Westland en Trainingsimulator AEC in die volgorde.
7. Houd Velsen & IJmond buiten het CMS totdat een volledig goedgekeurd projectdossier beschikbaar is.

Geen van deze stappen autoriseert publicatie. Elk nieuw record begint als draft; technische claims, klantnamen, relaties en media krijgen menselijke goedkeuring vóór publicatie.
