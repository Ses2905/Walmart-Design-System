# Cleanup work order

Inventory of duplicates, misfiles, and dead weight across the 630 files in this project, split by **where the fix belongs**. Findings are marked ✅ confirmed (verified by byte size or file read) or ⚠️ needs your eye.

**Headline:** ~180 files and roughly 300 MB are removable, and almost all of it is local-only — so most of the cleanup happens here, not upstream. The *structural* fixes (naming, folder shape) are the ones that belong in the repo.

---

## A. Fix here — local-only, the repo doesn't have these

### A1. `uploads/` — 168 files, the raw upload dump ✅

This is the staging pile everything in `assets/` was renamed out of. It is not referenced by a single file in the system, and it triplicates in three separate ways:

- **Originals of assets already filed** — `Happy to Help.svg`, `Brand Colors.png`, every `EverydaySans-*.woff`, all the patch SVGs, the `.ase` swatches, the PDFs. All live in `assets/` under kebab-case names now.
- **Re-upload hash dupes** — `fonts.css` plus `fonts-88ec7053.css`, `fonts-c08fddfe.css`, `fonts-d8628718.css`, `fonts-da7a4bcc.css`, `fonts-fc0d5a8b.css` (six copies of one file); ten `EverydaySans-*-Web-<hash>.woff` alongside their unhashed twins; `Spark (Everyday Blue)-92e0dd8b.png`, `Spark (White)-48a0c430.png`.
- **Unrelated files** — eight PowerPoint decks that have nothing to do with the design system: `Business Case.pptx`, `Modern SaaS Company Sales Deck.pptx`, `Start-Up Pitch.pptx`, `Simple Yet Professional.pptx`, `Viral Mind.pptx`, `Voice of Customer Insights.pptx`, `Warm Glow Editorial Theme.pptx`, plus `Walmart final.pdf`.

**Action:** delete the folder. Nothing links to it. If you want the source-of-truth originals kept somewhere, they belong in the repo or a drive, not in a design system consumers will copy.

### A2. One photo stored three times ✅

Byte-identical, 5,462,684 bytes each — **16.4 MB for one image**:

```
assets/illustrations/vestibule-community.jpg
assets/illustrations/scenes/wmt-vestibule-community.jpg
assets/illustrations/scenes/wmt-vestibule.jpg
```

**Action:** keep `scenes/wmt-vestibule-community.jpg`, delete the other two.

### A3. Loose files at `assets/illustrations/` root ✅

Every other illustration is filed into `benefits/ marketing/ mascot/ scenes/ spot/ wallpapers/`. Four files sit unfiled at the root:

| File | What it is | Action |
|---|---|---|
| `vestibule-community.jpg` | dupe, see A2 | delete |
| `trimming-guide.png` | production/print artifact, not a brand asset | delete or move out of `assets/` |
| `imgi_15_Group-163.png` | scraper filename — 59 KB | ⚠️ see below |
| `imgi_16_Group-144.png` | scraper filename — 163 KB | ⚠️ see below |

⚠️ The two `imgi_*` files are suspiciously close in size to `mascot/sparky-expressions-1.png` (53 KB) and `sparky-expressions-2.png` (157 KB) — probably the same art at a different export setting. Worth a look: if they match, delete them; if they're distinct, rename and file them under `mascot/`.

### A4. Two patches misfiled as pins ✅

`assets/pins/walmart-patch-v2.svg` and `walmart-patch-v3.svg` (8,135 / 8,136 bytes) are patches, not enamel pins, and `github.md` records both as local-only. They're also why upstream's own pins card would 404 on two tiles.

**Action:** move to `assets/patches/` (or delete — they're raster-backed shells like the rest, see A5).

### A5. Dead patch and pin artwork ✅

The base64-stripping defect left these as empty `<image>` wrappers. Confirmed by size:

- **282–315 bytes (definitively empty):** `patches/people-powered-button.svg`, `patches/we-appreciate-you-always-button.svg`, `patches/make-a-difference-that-matters-button.svg` (311 B), `pins/spark-pin.svg` (315 B), and per `github.md` also `patches/international.svg`
- **~8 KB (wrapper + a little metadata, still no usable art):** the remaining `assets/patches/*.svg` and `assets/pins/*.svg`

The only patch line that renders is `assets/patches/associates-week-2025/` — 21 files, 9–21 KB of real vector geometry, and the one set the Pins + Patches card draws from.

**Action:** your call, and it's a judgement one. Deleting them makes the system honest; keeping them preserves the filename list for when someone re-exports flat PNGs from the source Illustrator files. My recommendation: delete the sub-400-byte ones (they are unambiguously nothing), keep the 8 KB ones with a `README` in the folder noting they need re-export.

### A6. `assets/brand/` — 10 source files, local-only ⚠️

Seven PDFs (brand books, mural panoramas, the CoreID iconography deck), three `.ase` swatch files, one PNG. Nothing in the system references them; the `.ase` files are where the hex values in `tokens/colors.css` came from.

**Action:** these are *provenance*, not assets a consumer needs — and they're heavy. Move them out of the shipped tree (a `reference/` folder outside `assets/`, or the repo) so `assets/` only holds things a consuming project would actually load.

---

## B. Fix upstream — structural, and sync carries it down

These are renames and moves. Do them in the repo so future compares stay readable.

### B1. Name collisions between the two patch sets ✅ — highest-value fix

Four names exist in **both** `assets/patches/` and `assets/patches/associates-week-2025/`, pointing at genuinely different files:

| Name | `patches/` | `associates-week-2025/` |
|---|---|---|
| `happy-to-help.svg` | 8,074 B (dead) | 21,088 B (live) |
| `whats-that-spell.svg` | 8,125 B (dead) | 17,673 B (live) |
| `we-appreciate-you-always` | 282 B, `-button` suffix (dead) | 9,347 B (live) |
| `our-people-make-the-difference` | 8,092 B, `-button` suffix (dead) | 12,067 B (live) |

Anyone globbing `assets/patches/**/happy-to-help.svg` gets two hits and no way to tell which is current. Namespace the old set — `assets/patches/legacy/` or `assets/patches/2024/` — so the live set is unambiguous.

### B2. The `-button` suffix means nothing ✅

`our-people-make-the-difference-button.svg` is 8,092 B; `people-powered-button.svg` is 282 B. Same suffix, one has content, one doesn't — the suffix is describing the physical merch format, not anything about the file. Either drop it or make it a folder (`patches/buttons/`).

### B3. Icon folder shape is inconsistent ✅

```
assets/icons/*.svg           ← 40 solid, at the root
assets/icons/outline/*.svg   ← 68, nested
assets/icons/category/*.svg  ← 38, nested
assets/icons/category/reverse/*.svg  ← 38, nested
```

The solid set is the only one without its own folder, purely because it shipped first. Moving it to `assets/icons/solid/` makes the three icon languages structurally parallel — which matters, since the whole point is that they're *not* interchangeable.

⚠️ This one has a real cost: `components/core/icon-data.js` inlines all 40 SVGs, so the move needs the generator re-run, not just a `git mv`. Worth doing, but do it deliberately.

### B4. `assets/fonts/desktop-otf/` — 10 print fonts in a web tree ✅

Desktop OTFs can't be loaded by a browser and no `@font-face` references them. They're for designers opening Illustrator, not for consumers.

**Action:** move out of `assets/fonts/` (which every consuming project copies wholesale) into a `reference/fonts-desktop/` alongside the A6 material.

### B5. Twelve italic webfonts with no `@font-face` ✅

`tokens/typography.css` declares no italic faces, but these ship: four `EverydaySansHeadline-*Italic-Web.woff`, five `EverydaySansUI-*Italic-Web.woff`, plus `EverydaySansUI-Italic-VF_wght-Web.woff` and `EverydaySansUI-Upright-VF_wght-Web.woff` (two variable fonts nothing uses).

**Action:** decide once — either add the `@font-face` blocks, or drop the files. Right now consumers copy ~12 unusable font files and the two VFs are the only variable fonts in a system that's otherwise all static cuts.

### B6. Headshot filenames break every convention in the project ✅

Arrived in the 2026-09-16 sync at `assets/imagery/headshots/`. Nine files, and the only ones in 630 that aren't kebab-case:

- **Spaces in every filename** — `Brian Chan.jpeg`, `Pratibha Raju Prem Kumar.jpg`
- **Four different extension conventions** — `.jpeg`, `.jpg`, `.JPG`, `.png`
- **Two contain a zero-width space (U+200B)** before the extension — `Niharika Gupta​.jpg`, `Soumya Mohan​.png`. Invisible in every editor and file listing. Any hand-typed path to these two will fail with no visible reason why.

The zero-width space is the urgent one — it's a latent bug, not a style preference. Rename all nine to kebab-case with normalized extensions.

### B7. `navigation/forms.card.html` is misfiled ✅

`components/navigation/` holds exactly one component (`Tabs`) and a card named `forms.card.html`. A forms specimen in the navigation folder is a leftover. Meanwhile `components/core/` carries three cards (`core.card.html`, `table.card.html`, `category-icon.card.html`) with no naming pattern between them.

**Action:** name cards after what they document and file them next to it.

---

## C. Leave alone — these look like duplicates but aren't

Flagging these explicitly because a naive cleanup will break the system:

- **`assets/icons/**/*.svg` (184 files) look unreferenced.** They are — by *path*. `icon-data.js`, `icon-data-outline.js`, and `category-icon-data.js` inline the SVG source keyed by name, so no file ever links to the path. The SVGs are still the source of truth the generators read. **Do not delete.**
- **`assets/patches/associates-week-2025/*` look unreferenced.** The card builds `<img src>` in a JS template loop, so the paths never appear as literals. They render.
- **`assets/placeholders/`, `assets/logos/wordmark-connect-*`, `assets/motion/*`** — referenced dynamically or held deliberately for consumers, not by a guideline card.
- **`templates/*/support.js` (×4) and `templates/*/doc-page.js` (×2)** — duplicated *by design*. Each template folder must be self-contained so it can be copied out on its own. Leave them.
- **`components/**/*.prompt.md` (12 files)** — per-component authoring notes, not build output.

---

## D. Suggested order

1. **Land the pending push** — the 37 files in `github.md`'s Pending push block. Must happen first; restructuring upstream before this means reconciling 37 uncommitted edits against moved paths by hand.
2. **Do §A here** — delete `uploads/`, the dupe photos, the loose root files; relocate `assets/brand/`. None of it touches the repo, so it can happen in parallel with step 1.
3. **Do §B in the repo**, in one restructure commit. B1 first (highest value, lowest risk), B3 last (needs the icon generator re-run).
4. **Sync down.** Then `github.md`'s screen map and `HANDOFF.md`'s package-contents table both need updating to the new paths.

**Rough recovery:** §A1 and §A2 alone are ~180 files. The `uploads/` PowerPoints, the 5 MB photo triplicate, and the 5 MB `mobile-retail-store.png` pair are where the weight actually is.
