# Powerspex design system

Deze basis is visueel afgeleid van de publieke Powerspex 2026-referentiesite. De implementatie herbouwt de patronen in herbruikbare Next.js-componenten; er is geen Elementor-markup of WordPress-HTML overgenomen.

## Kleuren

| Token | Waarde | Gebruik |
| --- | --- | --- |
| `--psx-blue` | `#0084ab` | Merkaccent, links, nummering en focus |
| `--psx-navy` | `#183a64` | Tekst, knoppen en primaire UI |
| `--psx-deep` | `#0b2b3f` | Hero-, nieuws- en footerachtergrond |
| `--psx-mist` | `#f2f5fb` | Impact- en contactachtergrond |
| `--psx-muted` | `#69727d` | Secundaire tekst |
| `--psx-line` | `#dce0e3` | Borders en scheidingslijnen |

## Typografie

- Primair merkfont: Special Gothic, lokaal geleverd in gewichten 400, 500, 600 en 700.
- Displaytitel: `clamp(4rem, 8.2vw, 7.5rem)`, gewicht 600, line-height 1.
- Sectietitel: `clamp(2.5rem, 5.2vw, 5.5rem)`, gewicht 600.
- Kaarttitel: `clamp(1.55rem, 2.2vw, 2.2rem)`.
- Bovenregels: 14 px, gewicht 600, uppercase, subtiele letter spacing.
- Koppen gebruiken negatieve letter spacing (`-0.04em`), zoals de compacte displaytypografie van de referentie.

## Layout en grid

- Maximale container: 1380 px (`86.25rem`).
- Zijmarge: `clamp(20px, 4.4vw, 64px)`.
- Desktop gebruikt 12 kolommen voor asymmetrische projectcomposities.
- Diensten gebruiken drie kolommen op desktop, twee op tablet en één op mobiel.
- Sectieafstand: `clamp(112px, 12vw, 192px)`.
- Breakpoints: 1216 px voor desktopnavigatie en 768 px voor mobiele composities.

## Header en navigatie

- Transparante header over de hero met wit Powerspex-logo.
- Desktopnavigatie staat in een witte capsule; `Werken bij` gebruikt de blauwe merkkleur.
- Het mega-menu gebruikt dezelfde witte, afgeronde taal en behoudt keyboard-, Escape- en focusgedrag.
- Mobiel wordt een afzonderlijke accordion in een afgerond wit paneel gebruikt.

## Knoppen en formulieren

- Primaire buttons zijn capsules (`999px`) met een ronde blauwe actie-indicator.
- Hover verschuift de button 2 px omhoog en wisselt naar merkblauw.
- Formuliervelden gebruiken rechte lijnen in plaats van zware invoerkaders.
- De homepage toont alleen een visuele formulier-preview; daadwerkelijke verwerking volgt later.

## Cards en beelden

- Geen generieke afgeronde kaartvlakken; beeld en typografie bepalen de hiërarchie.
- Dienstbeelden hebben een verhouding van circa 5:4 met subtiele zoom-hover.
- Projectbeelden zijn groter (circa 1.45:1) en verspringen asymmetrisch over het 12-kolomsgrid.
- Nummering gebruikt het referentiepatroon `[01]` in merkblauw.
- Introbeelden overlappen en gebruiken één hoekuitsparing; hero en nieuws krijgen een diagonale randuitsparing.
- Ontbrekende CMS-media behouden een rustige merkfallback.

## Motion en toegankelijkheid

- Interactie blijft beperkt tot korte hovertransities van 220–500 ms.
- `prefers-reduced-motion` schakelt animaties en smooth scrolling uit.
- Focus is zichtbaar met een 3 px blauwe outline.
- Essentiële content gebruikt geen carrousel of hover-only bediening.
