# Asset restructure — deployment work order

Branch under review: `updated-assets` @ `4dd5ff3d5b30`
Target: replace `assets/` with the new structure, on `main`, in one reviewable commit.

---

## A. What went wrong on the branch

The new tree was committed as a **new folder beside the old one**, not as a replacement:

```
assets/                 338 files   ← old structure, still live
updated assets/         923 files   ← new structure, added
```

Three consequences:

1. **Both trees are live.** 1,261 asset files, most of them the same artwork twice. Nothing
   in `guidelines/`, `components/`, or `templates/` points at the new paths, so the new tree
   is dead weight and the old tree is still what renders.
2. **Git recorded 923 adds and 0 renames.** File history does not follow. `git log` on a
   moved SVG starts at this commit; blame, and any open PR touching those files, is lost.
3. **The folder name has a space in it** (`updated assets/`). Every path needs quoting or
   `%20`. It also reads as scaffolding, not a final location — nobody should merge a folder
   called "updated assets" to `main`.

**Do not merge this branch as-is.** Rebuild it as a rename (§D).

---

## B. What the new structure gets right — worth preserving

These are real fixes, not cosmetics:

- **The raster-stripped patch artwork is intact.** `people-powered-button.svg` is 955,347
  bytes here against 282 bytes in this project; `make-a-difference-that-matters-button.svg`
  934,092; `we-appreciate-you-always-button.svg` 864,319; `international-pin.svg` 170,135.
  This is the defect `github.md` has logged as *"cannot be recovered from the repo by
  copying"* across five syncs. This branch recovers it.
- **Headshots are fixed.** Kebab-case, foldered by org (`imagery/internal/headshots/design/`,
  `/engineering/`), 17 files instead of 9. The zero-width-space filenames logged in
  `CLEANUP.md` §B6 are gone.
- **Pins, patches, and merch are consolidated** into `illustrations/pins-patches/` — one
  location instead of three (`patches/`, `pins/`, `merch/`).
- **Mono webfonts are present** (`fonts/everyday-sans-mono/`, Regular + Bold). The pending
  typography push sets every numeral in Mono Regular, so these have to ship with it.
- **Imagery is categorised** (`concepts/`, `products/`, `stores-services/`, `internal/`)
  rather than a flat dump.

---

## C. Blockers — decide these before pushing

### C1. The solid UI icon set is missing entirely — blocking

The 40 solid icons at `assets/icons/*.svg` (`add-to-cart`, `cart`, `reorder`, `pick-up`,
`sign-in`, `coupon`, `favorite`, `search`, …) have **no destination in the new tree**. A
filename search across all 923 files returns nothing for them.

`components/core/Icon.jsx` resolves `variant="solid"` against that set, and it is the default
variant. Ship this tree as-is and `Icon` 404s on every default call — the component card, the
four templates, and every guideline card that uses an icon.

**Needs:** the solid set added to the new tree before the rename. Suggested home
`assets/icons/ui/` (it is the only set that is genuinely UI furniture rather than brand art).

### C2. `icons/functional/reverse/` is 68 copies of one placeholder — blocking

All 68 files are 118 bytes and share the identical blob sha `4f340c176833`. They are not 68
reverse colorways; they are one 118-byte file copied 68 times under different names. Compare
`icons/general/reverse/`, which is 38 real files at real sizes.

**Needs:** the real reverse artwork, or drop the folder and let the reverse treatment be a
CSS filter. Do not ship 68 identical stubs.

### C3. Functional icons changed from SVG to PNG — needs a decision

The 68-file `icons/outline/` SVG set became `icons/functional/primary/` as **PNG**, 207–847
bytes each. PNG icons cannot inherit `currentColor` and do not scale. `Icon.jsx` inlines SVG
precisely so icons tint from the token palette; `--wm-*` colour props stop working on this set.

**Needs:** SVG source for the functional set, or an explicit decision that functional icons
are fixed-colour raster and a rewrite of `Icon.jsx` to match. Recommend the former.

### C4. Deletions to confirm

Present in `assets/`, absent from the new tree:

| Dropped | Call |
|---|---|
| `brand/*.pdf` (6 brand books) | **Fine** — `CLEANUP.md` §A already had these as local-only deletions |
| `brand/wmt-color-chart-{cmyk,pms,rgb}.ase` | **Keep** — these are the swatch source of truth for print; nothing replaces them |
| `fonts/desktop-otf/` | **Confirm** — desktop OTFs for design tooling, not web. If they are hosted elsewhere, fine to drop |
| `motion/*.mp4` (9 files) | **Confirm** — the new tree keeps only the 2 GIFs. The mp4s are the brand motion reference |
| `illustrations/{benefits,marketing,spot,wallpapers}/` | **Blocking** — `guidelines/illustration-benefits.html` `<img>`s five files from `illustrations/benefits/` |
| `illustrations/mascot/` | **Blocking** — `guidelines/illustration-mascot.html` `<img>`s four Sparky files |

C4's two blocking rows mean two guideline cards render empty after the rename unless those
folders are carried across or the cards are repointed.

---

## D. How to deploy it

### D1. Order of operations

Land the **37-file typography push first** (`github.md` → *Pending push*). It touches
`tokens/typography.css`, 10 components, 22 guideline cards, and 4 templates — none of them
asset files, so the two changes do not overlap in content. But doing the restructure first
means resolving those 37 edits against moved paths by hand. Push typography, then restructure.

Alternative, if you want one commit: tell me and I will fold the typography edits into the
restructured tree so the path rewrite and the token change land together.

### D2. Rebuild the branch as a rename

Start clean from `main` — do not try to fix the existing branch, the add-vs-rename shape is
baked into its history.

```bash
git checkout main && git pull
git checkout -b assets-restructure

# take the new tree out of the old branch, at the repo root
git checkout updated-assets -- "updated assets"

# stage the replacement as a rename: old assets out, new assets in
git rm -r --cached assets >/dev/null
rm -rf assets
git mv "updated assets" assets

git add -A
git commit -m "assets: restructure to categorised tree

- icons split functional / general / pictograms
- pins, patches, merch consolidated under illustrations/pins-patches
- imagery categorised; headshots foldered by org, kebab-case
- full-size patch artwork restored (recovers base64-stripped SVGs)
- mono webfonts added"
```

Git's rename detection pairs identical blobs across the delete/add, so moved files keep their
history and the diff reads as renames rather than 1,261 changes. Verify before pushing:

```bash
git show --stat -M90% HEAD | head -40      # expect R lines, not A/D pairs
git ls-files assets | wc -l                # expect ~923, not 1261
git ls-files | grep -c " "                 # expect 0 — no spaces in any path
```

### D3. Reference rewrite — same commit or the next one

Nothing points at the new paths yet. These need rewriting across `guidelines/`,
`components/`, `templates/`, `styles.css`, `tokens/`, and the `web/` ports:

| Old path | New path |
|---|---|
| `assets/icons/<name>.svg` (40 solid) | **unresolved — see C1** |
| `assets/icons/outline/<name>.svg` | `assets/icons/functional/primary/<name>.png` (see C3) |
| `assets/icons/category/<name>.svg` | `assets/icons/general/primary/<name>.svg` |
| `assets/icons/category/reverse/<name>.svg` | `assets/icons/general/reverse/<name>.svg` |
| `assets/patches/<name>.svg` | `assets/illustrations/pins-patches/<name>.svg` |
| `assets/patches/associates-week-2025/<name>.svg` | `assets/illustrations/pins-patches/<name>.svg` (flattened) |
| `assets/pins/<name>.svg` | `assets/illustrations/pins-patches/<name>-pin.svg` |
| `assets/merch/<name>.svg` | `assets/illustrations/pins-patches/<name>-pin.svg` |
| `assets/imagery/headshots/<First Last>.jpg` | `assets/imagery/internal/headshots/<org>/<first-last>.<ext>` |
| `assets/fonts/everyday-sans*/…` | unchanged |
| `assets/logos/spark-everyday-blue.png` | `assets/logos/walmart/…` — **needs confirming**, `logos/` is now foldered 5 ways |

Note the flattening: `associates-week-2025/` no longer exists as a subfolder, and its names
changed (`associates-week-badge` → `associates-week-2025`, `we-love-our-people` → ?). The
Associates Week card builds its grid from a hard-coded name array, so that array needs
rewriting against the new filenames, not just the directory prefix.

`logos/` fanning into `commerce-media-networks/`, `industry-publications/`,
`internal-tools/`, `partners-vendors/`, `walmart/` also means the eight logo files this
project uses need individually locating — `spark-everyday-blue.png` and the six wordmarks
are referenced from both presentation templates and the one-pager.

### D4. Then hand it back

Once `assets-restructure` is pushed, give me the **branch name and commit sha**. I will:

- re-baseline the sync against the new tree
- apply the §D3 rewrites across all local cards, components, and templates
- rebuild the three icon cards and the two illustration cards against real new paths
- rewrite `github.md`'s screen map and `## Last sync`
- close out `CLEANUP.md` §B6 (headshot naming) and the §A brand-PDF rows the restructure settles

---

## E. Short version

The branch has the right structure and recovers artwork this project has been unable to get
from the repo for five syncs — but it is committed as an addition rather than a replacement,
so it doubles the asset tree and loses rename history. Rebuild it as a `git mv` off `main`
(§D2), fix C1 and C2 first because they break `Icon` and ship 68 stub files, decide C3 and
C4, and push the typography change before any of it.
