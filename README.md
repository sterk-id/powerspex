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

Vereisten: Node.js 20.9 of nieuwer. Frontend en Payload draaien in hetzelfde Next.js-proces. Lokaal gebruikt Payload standaard SQLite; productie gebruikt PostgreSQL.

1. Kopieer `.env.example` naar `.env.local`.
2. Laat `DATABASE_URI` lokaal leeg voor SQLite, of vul een bereikbare PostgreSQL-database in.
3. Genereer een unieke `PAYLOAD_SECRET` van minimaal 32 tekens.
4. Installeer dependencies met `pnpm install`.
5. Start met `pnpm dev` en open [http://localhost:3000](http://localhost:3000).
6. Open [http://localhost:3000/admin](http://localhost:3000/admin) om de eerste Payload-gebruiker aan te maken.

Zolang de Homepage-global nog niet is ingevuld, rendert de publieke homepage met gecontroleerde fallback-content uit `src/data/homepage.ts`.

### Environment variables

- `DATABASE_URI`: PostgreSQL connection string voor productie; leeg gebruikt lokaal `powerspex.db` (SQLite).
- `PAYLOAD_SECRET`: geheime sleutel voor Payload-sessies; nooit committen.
- `NEXT_PUBLIC_SERVER_URL`: canonieke publieke origin, lokaal standaard `http://localhost:3000`.

## Scripts

- `pnpm dev`: start de ontwikkelserver.
- `pnpm build`: maakt de productiebuild.
- `pnpm start`: start de productiebuild.
- `pnpm lint`: voert ESLint uit.
- `pnpm typecheck`: controleert TypeScript zonder output te schrijven.
- `pnpm payload generate:types`: genereert Payload-types nadat de databaseconfiguratie beschikbaar is.

## Contentbeheer

Payload bevat afzonderlijke collecties voor Diensten, Expertises, Projecten, Media en Gebruikers, plus de global Homepage. Publiceerbare inhoud gebruikt drafts/versions. De homepage gebruikt geselecteerde relaties; ontbrekende selecties en media hebben veilige fallbacks. Technische claims, cijfers, klantnamen en projectinhoud worden pas na menselijke goedkeuring gepubliceerd.
