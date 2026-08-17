# Database migrations

Powerspex gebruikt Payload-native migraties. SQLite en PostgreSQL hebben elk een eigen migratiemap omdat hun SQL-dialecten en adaptergedrag verschillen:

- `src/migrations/sqlite`: lokale SQLite-development en tests;
- `src/migrations/postgres`: staging en PostgreSQL-productie.

De Payload-config kiest de map op basis van de databaseadapter. SQLite draait met `push: false`: schemawijzigingen worden lokaal dus niet stilzwijgend door Drizzle gepusht. PostgreSQL heeft push alleen in niet-productieomgevingen; in productie staat push uit en zijn migraties verplicht.

## Nieuwe lokale setup met SQLite

1. Kopieer `.env.example` naar `.env.local`.
2. Zet `PAYLOAD_DATABASE=sqlite` en `SQLITE_DATABASE_URI=file:./powerspex.db`.
3. Stel een lokale `PAYLOAD_SECRET` in en gebruik `NEXT_PUBLIC_SERVER_URL=http://localhost:3000`.
4. Installeer dependencies met `pnpm install`.
5. Voer `pnpm db:migrate` uit.
6. Controleer desgewenst met `pnpm db:migrate:status`.
7. Start `pnpm dev` en open `/admin` om de eerste gebruiker aan te maken.

De lokale database, WAL/SHM-bestanden, `.env`-bestanden en secrets horen niet in Git. De ignore-regels sluiten alle `*.db`, `*.db-shm` en `*.db-wal` bestanden uit.

## Bestaande lokale SQLite-database van vóór de baseline

Een database die al bestond voordat de eerste gecommitteerde migratiebaseline werd toegevoegd, bevat geen bruikbare Payload-migratiegeschiedenis. Voer de baseline daar niet overheen uit: bestaande tabellen zouden dan conflicteren.

Maak eerst een back-up of exporteer benodigde lokale CMS-content. Omdat een lokale database een development-sandbox is, is de veilige eenmalige route daarna:

1. stop de developmentserver;
2. verplaats `powerspex.db` en eventuele `powerspex.db-shm`/`powerspex.db-wal` bestanden naar een back-uplocatie buiten de repository;
3. voer `pnpm db:migrate` uit om een nieuwe database op te bouwen;
4. start `pnpm dev` en maak zo nodig opnieuw een lokale admin-gebruiker aan;
5. importeer uitsluitend bewust behouden content via een gecontroleerde import.

Manipuleer `payload_migrations` niet handmatig en pas geen losse SQL-patches toe. Dat zou de database wel wijzigen maar de betrouwbare Payload-migratiegeschiedenis omzeilen.

Vanaf de huidige baseline worden bestaande lokale databases normaal met `pnpm db:migrate` bijgewerkt; een reset is alleen nodig voor de oudere, ongetrackte databases.

## Een schemawijziging maken

1. Werk de Payload-collectie of global bij.
2. Genereer voor SQLite een migratie met de lokale SQLite-environment actief:
   `pnpm payload migrate:create beschrijvende-naam`.
3. Genereer dezelfde schemawijziging voor PostgreSQL met `DATABASE_URI` actief en `NODE_ENV=production`.
4. Review altijd de gegenereerde `up`- en `down`-stappen en beide `index.ts`-bestanden.
5. Test SQLite met een lege tijdelijke database: voer `pnpm db:migrate` en `pnpm db:migrate:status` uit en start daarna de app.
6. Test de PostgreSQL-migratie vóór productie tegen een tijdelijke of staging-PostgreSQL-database met dezelfde major versie en extensies als productie.
7. Commit beide adapter-specifieke migraties samen met de schemawijziging.

Payload-migraties zijn de bron van waarheid. Gebruik development push niet om een productieomgeving te wijzigen.

## PostgreSQL-productie

Productie vereist `NODE_ENV=production`, een sterke `PAYLOAD_SECRET`, de canonieke `NEXT_PUBLIC_SERVER_URL` en een PostgreSQL-`DATABASE_URI`. SQLite wordt niet als productiealternatief geaccepteerd.

De deploymentpipeline gebruikt `pnpm ci`. Deze voert eerst `pnpm db:migrate` uit, daarna de idempotente project-contentmigratie met `pnpm content:migrate:projects` en pas daarna `pnpm build`. Als een schema- of contentmigratie faalt, moet de deployment stoppen. Start geen nieuwe applicatieversie tegen een achterlopend schema en laat productie niet afhangen van automatische schema-push.

## Projectcontent

Projectdefinities onder `src/content-migrations/projects` zijn de reproduceerbare bron voor gecontroleerde CMS-imports. De runner:

- zoekt projecten op unieke slug en maakt geen duplicaten;
- houdt de publicatiestatus expliciet op draft;
- overschrijft geen gepubliceerd of inhoudelijk goedgekeurd project;
- lost service- en expertiserelaties op via slugs, nooit via database-ID's;
- verifieert media met een vastgelegde SHA-256-checksum en hergebruikt een bestaand Media-record op bestandsnaam;
- kan veilig opnieuw worden uitgevoerd en meldt ontbrekende masterrecords zonder nepdata aan te maken.

Gebruik lokaal `pnpm content:migrate:projects` nadat de schema-migraties zijn uitgevoerd. Mediarechten en contentgoedkeuring blijven redactionele beslissingen; de import publiceert niets automatisch.

Voer vóór iedere productiemigratie een door restore geteste databaseback-up of provider snapshot uit. Controleer daarna `pnpm db:migrate:status`, applicatielogs en kernroutes. De gegenereerde `down`-functie ondersteunt technische rollback van de laatste batch, maar een rollback die kolommen of tabellen verwijdert kan data verliezen. Herstel in zo'n geval bij voorkeur de databaseback-up samen met de vorige applicatieversie. Test zowel voorwaartse migratie als rollback vooraf in staging.

Er is in deze stap geen verbinding met of wijziging aan een echte productiedatabase uitgevoerd.
