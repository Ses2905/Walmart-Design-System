# Walmart Design System

A design system for building on-brand Walmart interfaces, marketing, and prototypes — grounded in the **2025 Walmart brand refresh** (the first major identity update in ~17 years). It packages the real typeface (Everyday Sans), the refreshed color palette, the official logos, the functional icon set, design tokens, and a library of React UI components plus a storefront UI kit.

> **Mission:** *Save money. Live better.* Walmart's job is to help people save money and live better — the design language is warm, clear, confident, and unpretentious. It should feel like a helpful, trustworthy store associate, not a luxury boutique or a tech startup.

---

## Sources

This system was built from the official **Walmart Brand Asset Library** (provided as a local folder, `Walmart/`) plus a set of uploaded brand files:

- **`Walmart/Logos/`** — Spark + wordmark lockups (SVG, RGB & reverse).
- **`Walmart/Font/Everyday Sans (Web Fonts)`** + uploaded `EverydaySans-*-Web.woff` — the licensed brand typeface (Commercial Type). Desktop OTFs also provided.
- **`Walmart/Icons + Illustrations/Icons/`** — named functional/general line icons (SVG).
- **`Walmart/x_To Organize + File/All assets/WMT-Colors-ASE/`** — Adobe ASE swatch files (parsed for exact hex).
- **`uploads/Walmart Brand Guidelines.pdf`** and **`uploads/Brand Guidelines - Walmart (Icons & Illustrations).pdf`** — the brand & icon usage guidelines.

There is **no product source code** in the package — it is a brand/identity kit. The UI kit in this system is therefore an on-brand recreation of the Walmart storefront experience built strictly from the brand foundations (color, type, components, iconography), not a reverse-engineering of walmart.com's codebase.

### Color provenance (2025 refresh)
Parsed directly from the official ASE swatch file:

| Token | Hex | Role |
|---|---|---|
| True Blue | `#0053E2` | Primary brand + actions (replaced the older `#0071CE`) |
| Bentonville Blue | `#001E60` | Deep navy — text, headers, footers |
| Everyday Blue | `#4DBDF5` | The Spark — savings, energy, highlights |
| Everyday Blue | `#4DBDF5` | Friendly secondary mid-blue |
| Sky Blue | `#A9DDF7` | Light blue — tints, surfaces |

The palette is deliberately **blue-only plus the Everyday Blue accent** — no purples or other accent hues in UI or imagery.

---

## Content Fundamentals

How Walmart writes. The voice is **warm, direct, plainspoken, and benefit-first** — a friendly neighbor who happens to run the world's largest store.

- **Tone:** Optimistic, practical, inclusive, never hype-y or jargon-filled. Confidence without arrogance. "Helpful" beats "clever."
- **Person:** Speaks to the customer as **"you"**; the brand is **"we."** Calls to action are imperative and friendly — *"Shop now," "Add to cart," "Save with Walmart+," "See all deals."*
- **Casing:** **Sentence case** for almost everything — headings, buttons, nav, body. Reserve ALL-CAPS for the small badge flags only (**ROLLBACK**, **CLEARANCE**) and short eyebrows. Avoid Title Case In Headlines.
- **Savings language:** Money is the hero. Lead with the price and the savings: *"Was $16.98 — You save $4.00," "Rollback," "Everyday low price."* Concrete dollar amounts, not vague "discounts."
- **Numbers:** Prices use the supermarket convention — big dollar figure, small raised cents (`$12⁹⁸`). Quantities and review counts are specific (*"(1,284)"*, *"arrives in 2 days"*).
- **Sentence length:** Short. Scannable. One idea per line. Fragments are fine in UI (*"Free shipping, arrives tomorrow"*).
- **Emoji:** **Not used** in the interface or marketing copy. The Spark and the blue color system carry the warmth instead.
- **Inclusivity:** Broad, everyday, family-oriented. Avoid niche slang, regionalisms, or exclusionary references. Walmart serves everyone.

**Example copy:**
> **Headline:** "Everyday low prices on everything you need."
> **Sub:** "Pickup, delivery, and shipping — all in one place."
> **CTA:** "Shop deals" · "Reserve a time" · "Add to cart"
> **Savings:** "Rollback · Was $22.00 · You save $7.12"
> **Reassurance:** "Free 90-day returns. Free shipping over $35."

---

## Visual Foundations

The look is **bright, blue, and friendly** — confident navy-and-True-Blue with the Everyday Blue as the accent that signals savings and energy.

- **Color usage:** White and very light cool-grey (`#F5F6F8`) surfaces dominate. **True Blue** carries primary actions and links. **Bentonville Blue** is the text and the "brand" color for headers/footers and dark sections. **Everyday Blue** is used *sparingly and intentionally* — savings flags, the Spark, key highlights — never for body text or large fields (it fails contrast). The system is **blue-only plus Everyday Blue** — no purples or other accent hues.
- **Typography:** Everyday Sans throughout. Friendly, slightly rounded humanist sans. Headlines are **Bold/Black with tight tracking** (`-0.02em`); body is Regular at a comfortable 16px/1.55. Prices use Black weight with the raised-cents treatment.
- **Shape & corners:** Soft but not bubbly. **Buttons and chips are full pills** (`border-radius: 999px`) — the single most recognizable shape cue. Cards use **12–16px** radii; feature tiles/modals **24px**. Inputs **12px**.
- **Cards:** White, 1px subtle cool-grey border (`#DEE1E6`), generous padding, **soft navy-tinted shadow** on hover (`0 4px 12px rgba(0,30,96,.10)`). Resting cards are often flat (border only) and lift on hover. No heavy drop shadows, no neon glows.
- **Elevation:** Shadows are **soft and tinted with navy** (`rgba(0,30,96,...)`), never pure black. Low spread, low opacity. Elevation communicates interactivity (hover) more than hierarchy.
- **Backgrounds:** Predominantly solid white / light grey. Dark sections use **Bentonville Blue** (not black). **No gradients** in UI chrome (a subtle one may appear in marketing hero art only). No busy textures or patterns in the interface.
- **Imagery:** Bright, clean, well-lit product photography on white. Lifestyle imagery is warm, natural, and diverse/family-oriented. Where photography isn't available, use clean blue-only placeholder tiles (a navy functional icon on a soft sky-blue square). The palette is **strictly the blue family plus Everyday Blue** — no purples or off-brand accents.
- **Borders:** 1px (`#DEE1E6` subtle, `#C3C6CD` default). Selected/active states use True Blue or Bentonville Blue borders at 1.5px.
- **Hover states:** Buttons **darken** (True Blue → `#0045BD`); ghost/secondary pick up a faint blue or grey wash; cards raise a soft shadow. Links underline on hover.
- **Press/active states:** A further darken (`#003AA0`). Subtle, no dramatic scale bounce.
- **Focus:** Visible **True Blue ring** — `0 0 0 3px rgba(0,83,226,.35)` on inputs, 2px outline on other controls. Accessibility is non-negotiable at Walmart's scale.
- **Motion:** Quick and functional. `120–200ms`, `cubic-bezier(0.2,0,0,1)` standard easing. Fades and short slides (toggle thumb, tab underline). **No bounce, no spinning, no decorative looping animation.** Reduced-motion respected.
- **Transparency / blur:** Used lightly — e.g. a translucent white scrim behind the save-to-list heart on product images. Not a glassmorphism-heavy system.
- **Layout:** Max content width ~`1392px`, 24px gutters. A persistent blue header (Bentonville Blue) with search front-and-center. Generous whitespace; dense but never cramped product grids. Everyday Blue accents anchor the eye to savings.

---

## Iconography

Walmart ships **two distinct icon languages** — keep them separate:

1. **Functional icons** (`assets/icons/*.svg`) — solid-fill, single-weight glyphs for the interface: `search`, `cart`, `home`, `favorite`, `location`, `filter`, `pick-up`, `shipping`, `credit-card`, `pharmacy`, etc. (40 included). They are **monochrome** and inherit color — filled shapes (`fill="currentColor"`), not stroked outlines. In this system they are exposed through the **`<Icon>` component**, which inlines the SVG so it tints via `currentColor` (navy by default, white on dark, True Blue for emphasis). Original art is solid navy fills; never multicolor, never a stroke/outline style.
   - *Source:* Walmart Brand Asset Library → Icons. Normalized (added `viewBox`, converted fills to `currentColor`) into `components/core/icon-data.js`. Every icon shares a common **square viewBox** — the shorter dimension is padded to match the longer one, coordinates untouched — so no glyph reads visually heavier or lighter than another purely because of its canvas shape.

2. **Blue-only placeholder tiles** (`assets/placeholders/*.svg`) — where real product photography isn't available, the UI kit uses clean stand-in tiles: a single navy line icon centered on a soft sky-blue (`#EAF6FD`) rounded square. Strictly on-brand blues — no multi-color illustration, no purple. Swap them for real product photos when you have them.

**Rules:**
- **No emoji**, ever, in UI or marketing.
- **No hand-drawn one-off SVG icons** — use the shipped functional set; if something is missing, match its solid single-weight fill style and square viewBox.
- The **Spark** is a brand mark, not an icon. Always Everyday Blue; never recolored, rotated, or stretched.

---

## Index / Manifest

**Root**
- `styles.css` — global entry point (consumers link this). `@import`s all tokens + base.
- `tokens/` — `colors.css`, `typography.css` (+ `@font-face`), `spacing.css` (radius/shadow/motion/layout), `base.css` (reset).
- `readme.md` — this file.
- `SKILL.md` — Agent-Skill manifest for portable use.

**Assets** (`assets/`)
- `logos/` — `spark-everyday-blue.svg`, `spark-white.svg`, `wordmark-trueblue.svg`, `wordmark-white.svg`
- `fonts/` — Everyday Sans web fonts (`.woff`)
- `icons/` — 40 functional solid-fill icons on a shared square grid (also bundled in `icon-data.js`)
- `placeholders/` — blue-only product/category stand-in tiles (navy icon on sky-blue square)
- `illustrations/` — `vestibule-community.jpg` (community mural), `trimming-guide.png`

**Components** (React; `window.WalmartDesignSystem_e58acd.*`)
- `core/` — `Icon`, `Button`, `Badge`, `Card`, `Input`, `Checkbox`, `Switch`, `Chip`, `Table`
- `navigation/` — `Tabs`

**Foundation cards** (`guidelines/*.html`) — color, type, spacing, and brand specimens shown in the Design System tab.

---

*Built from the official Walmart brand refresh assets. Everyday Sans is licensed from Commercial Type; ship the webfonts only within properly-licensed Walmart properties.*
