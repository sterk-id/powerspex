# Powerspex website

Nieuwe code-first website voor Powerspex, als vervanging van de WordPress/Elementor-implementatie.

## Architectuur
- Next.js App Router + TypeScript
- Payload CMS als contentlaag
- PostgreSQL in productie
- Frontend en CMS in één repository
- GitHub/Codex voor technisch beheer

## Informatiearchitectuur
De website maakt expliciet onderscheid tussen:

### Diensten
- Project engineering
- Procesautomatisering
- Software engineering
- Hardware engineering
- Productie
- Service, onderhoud & inspectie

### Expertises
- Cybersecurity & OT-security
- Functional Safety
- Explosieveiligheid
- Simulaties

## Navigatie
Primaire desktopnavigatie:
- Wat we doen
- Projecten
- Over Powerspex
- Nieuws & kennis
- Contact
- Werken bij

`Wat we doen` opent één mega-menu met drie groepen: Engineering & automatisering, Realisatie & lifecycle en Expertises.

## Huidige fase
**Stap 1: homepage als referentiepagina.**

De homepage wordt gebruikt om het design system, de navigatie, componenten en eerste CMS-modellen vast te leggen. Zie `docs/STEP-1.md` en `AGENTS.md`.

## Belangrijk
De nieuwe site is geen automatische conversie van Elementor. We migreren betekenisvolle content en media, maar bouwen de layout opnieuw met herbruikbare Powerspex-componenten.

## Lokaal starten

Vereisten: Node.js 20.9 of nieuwer. Frontend en Payload draaien in hetzelfde Next.js-proces. Lokale development kan bewust SQLite gebruiken; productie vereist PostgreSQL.

1. Kopieer `.env.example` naar `.env.local`.
2. Gebruik lokaal expliciet `PAYLOAD_DATABASE=sqlite`, of vul `DATABASE_URI` in voor PostgreSQL.
3. Genereer een unieke `PAYLOAD_SECRET` van minimaal 32 tekens.
4. Installeer dependencies met `pnpm install`.
5. Maak of actualiseer de lokale database met `pnpm db:migrate`.
6. Start met `pnpm dev` en open [http://localhost:3000](http://localhost:3000).
7. Open [http://localhost:3000/admin](http://localhost:3000/admin) om de eerste Payload-gebruiker aan te maken.

Zie `docs/DATABASE-MIGRATIONS.md` voor schemawijzigingen, bestaande pre-migration SQLite-databases en het productieproces.

Zolang de Homepage-global nog niet is ingevuld, rendert de publieke homepage met gecontroleerde fallback-content uit `src/data/homepage.ts`.

### Environment variables

- `PAYLOAD_DATABASE`: zet alleen bij lokale development/tests expliciet op `sqlite`. Wordt in productie niet geaccepteerd als vervanging voor PostgreSQL.
- `DATABASE_URI`: PostgreSQL connection string; verplicht in productie.
- `SQLITE_DATABASE_URI`: lokale SQLite-URL; standaard `file:./powerspex.db` en nooit voor productie.
- `PAYLOAD_SECRET`: geheime sleutel voor Payload-sessies; verplicht in productie en nooit committen.
- `NEXT_PUBLIC_SERVER_URL`: canonieke publieke origin; verplicht in productie en lokaal doorgaans `http://localhost:3000`.

Bij `NODE_ENV=production` stopt de configuratie direct met een duidelijke fout als `PAYLOAD_SECRET`, `DATABASE_URI` of `NEXT_PUBLIC_SERVER_URL` ontbreekt. Er is in productie geen fallback-secret en geen SQLite-fallback. Voor lokale development blijven de voorbeeldwaarden uit `.env.example` direct bruikbaar.

## Scripts

- `pnpm dev`: start de ontwikkelserver.
- `pnpm build`: maakt de productiebuild.
- `pnpm start`: start de productiebuild.
- `pnpm lint`: voert ESLint uit.
- `pnpm typecheck`: controleert TypeScript zonder output te schrijven.
- `pnpm payload generate:types`: genereert Payload-types nadat de databaseconfiguratie beschikbaar is.
- `pnpm db:migrate`: voert nog niet uitgevoerde migraties uit voor de geselecteerde adapter.
- `pnpm db:migrate:status`: toont de migratiestatus.
- `pnpm ci`: voert productiemigraties uit en bouwt daarna de applicatie; gebruik dit alleen met een gecontroleerde productie-`DATABASE_URI`.

## Contentbeheer

Payload bevat afzonderlijke collecties voor Diensten, Expertises, Projecten, Media en Gebruikers, plus de global Homepage. Publiceerbare inhoud gebruikt drafts/versions. De homepage gebruikt geselecteerde relaties; ontbrekende selecties en media hebben veilige fallbacks. Technische claims, cijfers, klantnamen en projectinhoud worden pas na menselijke goedkeuring gepubliceerd.
