# Powerspex — Codex instructions

## Product intent
Build a fast, sober, premium industrial B2B website. The site must communicate engineering depth, reliability and real in-house capability. Avoid generic agency language and decorative UI that does not help orientation.

## Architecture
- Next.js App Router + TypeScript.
- Payload CMS is the source of truth for editable content.
- PostgreSQL in production.
- Keep frontend and CMS in one repository.
- Prefer server components. Add client components only where interaction requires them.
- No page-specific visual hacks. Add or improve reusable components instead.

## Content model
Distinguish explicitly between:
1. services: things a customer can buy directly;
2. expertise: specialist knowledge that differentiates Powerspex;
3. projects: proof;
4. knowledge/news: editorial content.

Current service taxonomy:
- Project engineering
- Procesautomatisering
- Software engineering
- Hardware engineering
- Productie
- Service, onderhoud & inspectie

Current expertise taxonomy:
- Cybersecurity & OT-security
- Functional Safety
- Explosieveiligheid
- Simulaties

## Navigation
Desktop primary navigation:
- Wat we doen
- Projecten
- Over Powerspex
- Nieuws & kennis
- Contact
- CTA: Werken bij

`Wat we doen` opens one mega-menu. Do not create additional mega-menus unless evidence shows they are needed.

Mega-menu groups:
- Engineering & automatisering
- Realisatie & lifecycle
- Expertises

Mobile navigation uses accordion disclosure rather than a scaled-down desktop mega-menu.

## Design rules
- Industrial, precise, confident, human.
- Photography should show real people, installations, panels, workshop and projects.
- Strong editorial typography and generous whitespace.
- Limit accent colors. Prefer the official Powerspex brand tokens once confirmed.
- Cards must not all look identical when information hierarchy differs.
- Avoid carousels for core content.
- Avoid excessive animation and parallax.
- Respect prefers-reduced-motion.

## CMS rules
- Editors manage text, images, relationships, ordering and visibility.
- Editors do not control arbitrary spacing, font sizes, colors or CSS.
- Use structured fields before rich text where the content has meaning.
- All publishable editorial collections use drafts/versions.
- AI-generated content must enter as draft and never auto-publish.
- Technical claims, certifications, safety standards and customer names require human approval.

## Quality gates
Before a PR is ready:
- Typecheck passes.
- Lint passes.
- Production build passes.
- No horizontal overflow at 320px.
- Keyboard navigation works for header and mega-menu.
- Focus states are visible.
- Images have useful alt text or are correctly decorative.
- Heading hierarchy is valid.
- Lighthouse regressions should be investigated.
- No old WordPress URL is changed without redirect mapping.

## Migration rule
Do not translate Elementor JSON into React. Rebuild layouts with Powerspex components and migrate only meaningful content/media.
