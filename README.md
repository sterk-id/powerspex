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
