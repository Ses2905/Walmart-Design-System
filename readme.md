# Walmart Ads Design System

A design system for building on-brand interfaces for Walmart Global Ads — Ad Center, Campaign Manager, and the broader Walmart Connect advertiser experience — grounded in the **2025 Walmart brand refresh** (the first major identity update in ~17 years). It packages the real typeface (Everyday Sans), the refreshed color palette, the official logos (Walmart + Walmart Connect), the functional icon set, design tokens, and a library of React UI components for campaign management surfaces.

> **Mission:** *Reach shoppers. Grow sales.* An advertiser's job here is to plan, launch, and optimize campaigns with confidence — the design language is warm, clear, confident, and unpretentious. It should feel like a capable, trustworthy media partner, not a luxury boutique or a black-box ad-tech console.

---

## Sources

This system was built from the official **Walmart Brand Asset Library** (provided as a local folder, `Walmart/`) plus a set of uploaded brand files:

- **`Walmart/Logos/`** — Spark + wordmark lockups (SVG, RGB & reverse).
- **`Walmart/Font/Everyday Sans (Web Fonts)`** + uploaded `EverydaySans-*-Web.woff` — the licensed brand typeface (Commercial Type). Desktop OTFs also provided.
- **`Walmart/Icons + Illustrations/Icons/`** — named functional/general line icons (SVG).
- **`Walmart/x_To Organize + File/All assets/WMT-Colors-ASE/`** — Adobe ASE swatch files (parsed for exact hex).
- **`uploads/Walmart Brand Guidelines.pdf`** and **`uploads/Brand Guidelines - Walmart (Icons & Illustrations).pdf`** — the brand & icon usage guidelines.

There is **no product source code** in the package — it is a brand/identity kit. The components and guideline cards in this system are an on-brand recreation of Walmart Ads surfaces (campaign lists, ad group forms, status badges) built strictly from the brand foundations (color, type, components, iconography), not a reverse-engineering of any Walmart codebase.

### Color provenance (2025 refresh)
Parsed directly from the official ASE swatch file:

| Token | Hex | Role |
|---|---|---|
| True Blue | `#0053E2` | Primary brand + actions (replaced the older `#0071CE`) |
| Bentonville Blue | `#001E60` | Deep navy — text, headers, footers |
| Everyday Blue | `#4DBDF5` | The Spark — friendly secondary mid-blue, energy and highlights |
| Sky Blue | `#A9DDF7` | Light blue — tints, surfaces |

The palette is deliberately **blue-only plus the Everyday Blue accent** — no purples or other accent hues in UI or imagery.

---

## Content Fundamentals

How Walmart Ads writes. The voice is **warm, direct, plainspoken, and confidence-first** — a capable media partner, not a black-box ad platform throwing jargon at you.

- **Tone:** Optimistic, practical, inclusive, never hype-y or jargon-filled. Confidence without arrogance. "Clear" beats "clever."
- **Person:** Speaks to the advertiser as **"you"**; the brand is **"we."** Calls to action are imperative and direct — *"Launch campaign," "Save as draft," "Create ad group," "Explore Ad Center."*
- **Casing:** **Sentence case** for almost everything — headings, buttons, nav, body. Reserve ALL-CAPS for short status/eyebrow flags only (**SPONSORED**, **REJECTED**). Avoid Title Case In Headlines.
- **Status & performance language:** Clarity is the hero. State what's true and what happens next: *"Approved and live within 2 hours," "Under review," "Optimized," "3 campaigns need your review."* Concrete numbers and timeframes, not vague "processing."
- **Numbers:** Currency uses the supermarket convention — big dollar figure, small raised cents (`$12⁹⁸`) — for budgets and spend. Metrics are specific and tabular (*"128,400 impressions"*, *"2.5% CTR"*).
- **Sentence length:** Short. Scannable. One idea per line. Fragments are fine in UI (*"Live in 2 hours"*).
- **Emoji:** **Not used** in the interface or marketing copy. The Spark and the blue color system carry the warmth instead.
- **Inclusivity:** Broad, everyday, no niche slang or exclusionary references. Walmart Ads serves sellers and brands of every size.

**Example copy:**
> **Headline:** "Reach shoppers. Grow sales."
> **Sub:** "Manage every campaign in one place."
> **CTA:** "Launch campaign" · "Save as draft" · "Ask Sparky"
> **Status:** "Active · Optimized · Approved and live within 2 hours"
> **Reassurance:** "Every campaign across your Walmart Ads account."

---

## Visual Foundations

The look is **bright, blue, and friendly** — confident navy-and-True-Blue with the Everyday Blue as the accent that signals energy and what's performing.

- **Color usage:** White and very light cool-grey (`#F5F6F8`) surfaces dominate. **True Blue** carries primary actions and links. **Bentonville Blue** is the text and the "brand" color for headers/footers and dark sections. **Everyday Blue** is used *sparingly and intentionally* — status highlights, the Spark, key metrics — never for body text or large fields (it fails contrast). The system is **blue-only plus Everyday Blue** — no purples or other accent hues.
- **Typography:** Everyday Sans throughout. Friendly, slightly rounded humanist sans. Headlines (h1/h2) are **Light** with tight tracking (`-0.02em`); sub-headers (h3–h6) are Regular; body is Regular at a comfortable 15px/1.55. Only the display size (`--text-display`) and numerals/prices go up to Black weight.
- **Shape & corners:** Soft but not bubbly. **Buttons and chips are full pills** (`border-radius: 999px`) — the single most recognizable shape cue. Cards use **12–16px** radii; feature tiles/modals **24px**. Inputs **12px**.
- **Cards:** White, 1px subtle cool-grey border (`#DEE1E6`), generous padding, **soft navy-tinted shadow** on hover (`0 4px 12px rgba(0,30,96,.10)`). Resting cards are often flat (border only) and lift on hover. No heavy drop shadows, no neon glows.
- **Elevation:** Shadows are **soft and tinted with navy** (`rgba(0,30,96,...)`), never pure black. Low spread, low opacity. Elevation communicates interactivity (hover) more than hierarchy.
- **Backgrounds:** Predominantly solid white / light grey. Dark sections use **Bentonville Blue** (not black). **No gradients** in UI chrome (a subtle one may appear in marketing hero art only). No busy textures or patterns in the interface.
- **Imagery:** Sparky (the mascot) and platform/marketing illustrations from `assets/illustrations/`, bright and clean on white. Where an image isn't available, use clean blue-only placeholder tiles (a navy functional icon on a soft sky-blue square). The palette is **strictly the blue family plus Everyday Blue** — no purples or off-brand accents.
- **Borders:** 1px (`#DEE1E6` subtle, `#C3C6CD` default). Selected/active states use True Blue or Bentonville Blue borders at 1.5px.
- **Hover states:** Buttons **darken** (True Blue → `#0045BD`); ghost/secondary pick up a faint blue or grey wash; cards raise a soft shadow. Links underline on hover.
- **Press/active states:** A further darken (`#003AA0`). Subtle, no dramatic scale bounce.
- **Focus:** Visible **True Blue ring** — `0 0 0 3px rgba(0,83,226,.35)` on inputs, 2px outline on other controls. Accessibility is non-negotiable at Walmart's scale.
- **Motion:** Quick and functional. `120–200ms`, `cubic-bezier(0.2,0,0,1)` standard easing. Fades and short slides (toggle thumb, tab underline). **No bounce, no spinning, no decorative looping animation.** Reduced-motion respected.
- **Transparency / blur:** Used lightly — e.g. a translucent white scrim behind an overlaid icon on illustration or imagery. Not a glassmorphism-heavy system.
- **Layout:** Max content width ~`1392px`, 24px gutters. A persistent blue header (Bentonville Blue) with search front-and-center. Generous whitespace; dense but never cramped campaign tables and data grids. Everyday Blue accents anchor the eye to what's live or performing.

---

## Iconography

Walmart ships **three distinct icon languages** — keep them separate:

1. **Functional icons** (`assets/icons/ui/*.svg`) — solid-fill, single-weight glyphs for the interface: `search`, `cart`, `home`, `favorite`, `location`, `filter`, `pick-up`, `shipping`, `credit-card`, `pharmacy`, etc. (40 included). They are **monochrome** and inherit color — filled shapes (`fill="currentColor"`), not stroked outlines. In this system they are exposed through the **`<Icon>` component** (`variant="solid"`, the default), which inlines the SVG so it tints via `currentColor` (navy by default, white on dark, True Blue for emphasis). Original art is solid navy fills; never multicolor, never a stroke/outline style.
   - *Source:* Walmart Brand Asset Library → Icons. Normalized (added `viewBox`, converted fills to `currentColor`) into `components/core/icon-data.js`. Every icon shares a common **square viewBox** — the shorter dimension is padded to match the longer one, coordinates untouched — so no glyph reads visually heavier or lighter than another purely because of its canvas shape.

2. **Outline icons** (`assets/icons/functional/primary/*.svg`) — a line-style companion set (68 icons) covering the same interface use case as Functional but with a lighter, single-weight outline look — `cart-outline`, `search-outline`, `calendar`, `truck`, `wallet`, `qr-code`, etc. A **separate name space** on the same `<Icon>` component via `variant="outline"`, since several concepts (bell, cart, clock, heart, lock, search…) exist in both styles under different names. Also `currentColor`-driven; the two variants are not meant to be mixed within one surface.
   - *Source:* Walmart Brand Asset Library → Icons (`WMT-Icons-Functional-*-RGB.ai`, archived in `assets/icons/functional/ai-files/`). Names are best-effort visual labels assigned during extraction — no icon names were embedded in the source file.

3. **Category icons** (`assets/icons/general/primary/*.svg`, reverse colorway in `assets/icons/general/reverse/*.svg`) — two-tone merchandising illustrations for category tiles and browse nav (`auto`, `baby`, `electronics`, `pets`, `toys`, `grocery`, etc., 38 included) — sized for a browsing surface, not an inline text glyph. Colors are baked in as the `--wm-true-blue` / `--wm-everyday-blue` tokens (with literal hex fallbacks) plus a white detail mark. Exposed through the **`<CategoryIcon>` component**; `reverse` switches to the dark-background colorway, which is an art-directed alternate (different icons invert different shapes), not a mechanical color flip.
   - *Source:* Walmart Brand Asset Library → Icons (`WMT-Icons-General-*-RGB.ai`, archived alongside `assets/icons/general/primary/` and `general/reverse/`). Names are best-effort visual labels assigned during extraction.

4. **Blue-only placeholder tiles** (`assets/placeholders/*.svg`) — where real photography or illustration isn't available yet, use clean stand-in tiles: a single solid-navy icon centered on a soft sky-blue (`#EAF6FD`) rounded square. Strictly on-brand blues — no multi-color illustration, no purple. Swap them for real imagery when you have it.

**Rules:**
- **No emoji**, ever, in UI or marketing.
- **No hand-drawn one-off SVG icons** — use a shipped set; if something is missing, match that set's fill style and square viewBox.
- The **Spark** is a brand mark, not an icon. Always Everyday Blue; never recolored, rotated, or stretched.

---

## Index / Manifest

**Root**
- `styles.css` — global entry point (consumers link this). `@import`s all tokens + base.
- `tokens/` — `colors.css`, `typography.css` (+ `@font-face`), `spacing.css` (radius/shadow/motion/layout), `base.css` (reset).
- `readme.md` — this file.
- `SKILL.md` — Agent-Skill manifest for portable use.

**Assets** (`assets/`) — restructured into a categorized tree; see `MIGRATION.md`-era history for why.
- `logos/walmart/` — `spark/` (Everyday Blue + white, PNG and SVG), `wordmark/` (standard Walmart wordmark), `platforms/<sub-brand>/wordmark/` (Walmart Connect, Ad Center, DSP, Marketplace/SellerCenter, Sam's Club Connect, Scintilla, Walmart International), `teams/` (internal team wordmarks). `logos/advertisers-clients/`, `commerce-media-networks/`, `industry-publications/`, `internal-tools/`, `partners-vendors/` are structured starter libraries (README + manifest only — no artwork yet; nothing invented).
- `fonts/` — Everyday Sans web fonts (`.woff` only; desktop `.otf` originals for design tooling live outside the shipped tree at `reference/fonts-desktop/`)
- `icons/ui/` — 40 functional solid-fill icons on a shared square grid (`icon-data.js`); `icons/functional/primary/` — 68 line-style icons (`icon-data-outline.js`; reverse is a currentColor swap, no separate asset); `icons/general/{primary,reverse}/` — 38 two-tone merchandising icons each way (`category-icon-data.js`); `icons/pictograms/` — 34 in-store/category illustration icons; each family's `ai-files/`/raw source archived alongside it.
- `placeholders/` — blue-only stand-in tiles (navy icon on sky-blue square)
- `illustrations/` — `mascot/` (Sparky), `benefits/`, `scenes/` (flat editorial illustration plus corporate/marketing photography — store exteriors, business-transformation and analytics spot imagery), `marketing/`, `digital-assets/` (app + Walmart+ product shots), `pins-patches/` (culture patches, buttons, merch marks, and enamel pins — consolidated from three old folders; `associates-week-2025.svg` is the 2025 campaign badge, `we-heart-our-people.svg` the Associates Week hearts patch); `cypress-tx-{panorama,mural-cropped}.pdf` (mural/panorama reference photography) and `trimming-guide.png` (print production reference, not a UI asset) sit at the `illustrations/` root
- `imagery/internal/headshots/<org>/` — team headshots, kebab-case, foldered by org (design, engineering, product, uxr); `imagery/{concepts,products,stores-services}/` — brand photography
- `motion/` — brand video/gif reference (store, wordmark, product/spark motion)
- `favicons/` — app icons and favicons at standard sizes
- `brand/` — source brand-guideline PDFs; `colors/` — Adobe `.ase` color swatches (print source of truth)

**Components** (React; `window.WalmartDesignSystem_e58acd.*`)
- `core/` — `Icon`, `CategoryIcon`, `Button`, `Badge`, `Card`, `Input`, `Checkbox`, `Switch`, `Chip`, `Table`
- `navigation/` — `Tabs`

**Foundation cards** (`guidelines/*.html`) — color, type, spacing, and brand specimens shown in the Design System tab.

---

*Built from the official Walmart brand refresh assets. Everyday Sans is licensed from Commercial Type; ship the webfonts only within properly-licensed Walmart properties.*
