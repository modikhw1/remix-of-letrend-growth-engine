LeTrend design system, site structure, centralized data architecture.

## Centraliserade datafiler (redigera här!)
- `src/data/content.ts` — All text: rubriker, CTA:er, priser, FAQ, stats, etc.
- `src/data/images.ts` — Alla bilder: sökvägar + alt-texter
- `src/data/cases.ts` — Kundcase-data (slug, stats, quotes, challenge/goal/result)
- `src/index.css` — Färgpalett (HSL-variabler rad 8–60)
- `tailwind.config.ts` — Font, animationer, skuggor

## Colors (HSL in index.css)
- Background (Linen): 35 40% 93%
- Accent (Caramel): 28 45% 48%
- Brand (Cocoa): 25 40% 22%
- Sage (Eucalyptus): 150 15% 38%
- Gold (Honey): 38 55% 62%
- Foreground (Ink): 30 30% 10%

## Typography
- Headings + Body: Outfit (font-sans)

## Site Structure (6 pages + case detail)
- / — Home | /hur-det-fungerar | /plattformen | /kundcase | /kundcase/:slug | /om-oss | /kom-igang

## Key decisions
- All page text sourced from content.ts — never hardcode in components
- All images sourced from images.ts
- Logo ticker names in content.ts → global.logoTicker.names
- Pricing plans shared between Pricing page and GetStarted page
- CTA text standardized: "Boka ett samtal" everywhere via global.cta.primary
