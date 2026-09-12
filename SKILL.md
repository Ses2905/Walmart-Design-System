---
name: walmart-design
description: Use this skill to generate well-branded interfaces and assets for Walmart, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## What's here
- `readme.md` — the full design guide: brand context, **Content Fundamentals** (voice/tone), **Visual Foundations**, **Iconography**, and an index/manifest.
- `styles.css` — global entry point; `@import`s every token file and the `@font-face` rules. Link this one file to inherit the whole system.
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `base.css` (CSS custom properties).
- `assets/` — `logos/` (Spark + wordmark, color & reverse), `fonts/` (Everyday Sans `.woff`), `icons/` (40 functional line icons), `placeholders/` (blue-only product/category stand-in tiles), `illustrations/`.
- `components/` — React UI primitives (`Icon`, `Button`, `Badge`, `Card`, `Input`, `Checkbox`, `Switch`, `Chip`, `Price`, `Rating`, `ProductCard`, `Tabs`).
- `ui_kits/storefront/` — interactive storefront recreation (home, search, product, cart).
- `guidelines/` — foundation specimen cards.

## Quick brand cheat-sheet
- **Colors:** True Blue `#0053E2` (actions/links), Bentonville Blue `#001E60` (text/headers/dark sections), Everyday Blue `#4DBDF5` (savings/highlights only — never body text), Everyday Blue `#4DBDF5`, Sky Blue `#A9DDF7`. The palette is blue-only plus the Everyday Blue accent — no purples., Sky Blue `#A9DDF7`. Purples are pictogram-only.
- **Type:** Everyday Sans. Sentence case everywhere except ROLLBACK/CLEARANCE badges. Bold/Black headlines, tight tracking.
- **Shape:** Buttons & chips are full pills (999px). Cards 12–16px radius, soft navy-tinted shadows on hover.
- **Voice:** Warm, plainspoken, benefit-first. "You" = customer, "we" = brand. Lead with price and savings. No emoji.
- **Icons:** Use the shipped functional set (single-weight line, `currentColor`). Where product photography isn't available, use the blue-only placeholder tiles in `assets/placeholders/`. Never hand-draw icons or use emoji.

## Using components in static HTML
Load React + Babel, then the compiled bundle, then read components off the namespace:
```html
<link rel="stylesheet" href="styles.css">
<script src="_ds_bundle.js"></script>
<script type="text/babel">
  const { Button, ProductCard, Price } = window.WalmartDesignSystem_e58acd;
</script>
```
(The namespace is `WalmartDesignSystem_<hash>` — confirm it from the bundle header or a `@dsCard` example.) For throwaway mocks you can also just copy assets and write plain HTML/CSS against the tokens in `styles.css`.

> Everyday Sans is licensed from Commercial Type — ship the webfonts only within properly-licensed Walmart properties.
