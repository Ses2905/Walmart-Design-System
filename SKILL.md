---
name: walmart-design
description: Use this skill to generate well-branded interfaces and assets for Walmart Global Ads (Ad Center, Campaign Manager, Walmart Connect advertiser surfaces), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI components for prototyping campaign-management interfaces.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## What's here
- `readme.md` — the full design guide: brand context, **Content Fundamentals** (voice/tone), **Visual Foundations**, **Iconography**, and an index/manifest.
- `styles.css` — global entry point; `@import`s every token file and the `@font-face` rules. Link this one file to inherit the whole system.
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `base.css` (CSS custom properties).
- `assets/` — `logos/` (Walmart + Walmart Connect wordmarks, Spark, color & reverse), `fonts/` (Everyday Sans `.woff`), `icons/` (40 functional solid-fill icons), `placeholders/` (blue-only stand-in tiles), `illustrations/`, `patches/`/`merch/`/`pins/` (associate recognition, not UI icons).
- `components/` — React UI primitives (`Icon`, `Button`, `Badge`, `Card`, `Input`, `Checkbox`, `Switch`, `Chip`, `Table`, `Tabs`).
- `guidelines/` — foundation specimen cards (color, type, spacing, brand, icon, logo).
- `templates/` — `.dc.html` document templates (one-pager, presentation, product review, report).

## Quick brand cheat-sheet
- **Colors:** True Blue `#0053E2` (actions/links), Bentonville Blue `#001E60` (text/headers/dark sections), Everyday Blue `#4DBDF5` (the Spark, status highlights only — never body text), Sky Blue `#A9DDF7`. The palette is blue-only plus the Everyday Blue accent — no purples (purples are pictogram-only, not used here).
- **Type:** Everyday Sans. Sentence case everywhere except short status badges (SPONSORED, REJECTED). Headings (h1/h2) are **Light**, sub-headers (h3–h6) **Regular** — not bold. Tight tracking on headlines. Numerals use Everyday Sans Mono, tabular.
- **Shape:** Buttons & chips are full pills (999px). Cards 12–16px radius, soft navy-tinted shadows on hover.
- **Voice:** Warm, plainspoken, confidence-first — for advertisers, not shoppers. "You" = advertiser, "we" = brand. Lead with status and performance ("Approved and live within 2 hours"). No emoji.
- **Icons:** Use the shipped functional set (solid-fill, single-weight, `currentColor`, shared square grid). Where imagery isn't available, use the blue-only placeholder tiles in `assets/placeholders/`. Never hand-draw icons or use emoji.

## Using components in static HTML
Load React + Babel, then the compiled bundle, then read components off the namespace:
```html
<link rel="stylesheet" href="styles.css">
<script src="_ds_bundle.js"></script>
<script type="text/babel">
  const { Button, Table, Badge } = window.WalmartDesignSystem_e58acd;
</script>
```
(The namespace is `WalmartDesignSystem_<hash>` — confirm it from the bundle header or a `@dsCard` example.) For throwaway mocks you can also just copy assets and write plain HTML/CSS against the tokens in `styles.css`.

> Everyday Sans is licensed from Commercial Type — ship the webfonts only within properly-licensed Walmart properties.
