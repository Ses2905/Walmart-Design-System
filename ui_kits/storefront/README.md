# Storefront UI Kit

An interactive, on-brand recreation of the Walmart shopping experience, built entirely from this design system's tokens, components, and brand assets.

## Screens (single-page flow in `index.html`)
- **Homepage** (`Homepage.jsx`) — hero savings banners, Walmart+ upsell, category rail, flash-deals product grid.
- **Search results** (`SearchResults.jsx`) — fulfillment chips, sort bar, filter sidebar (departments / price / rating), 4-up product grid.
- **Product detail** (`ProductDetail.jsx`) — thumbnail gallery, price-first buy box, shipping/pickup options, About/Specs/Reviews tabs, related rail.
- **Cart** (`Cart.jsx`) — line items with qty steppers, savings, sticky order summary, Walmart+ shipping upsell, empty state.
- **Header** (`Header.jsx`) — Bentonville-Blue bar with the Spark, prominent pill search, location/account/cart, True-Blue department strip.

## How it works
`index.html` loads React + Babel, the compiled design-system bundle (`_ds_bundle.js`), then `data.js` (demo catalog) and each screen JSX. Screens are exposed on `window` and composed by a small `App` router that holds route + cart state. Product imagery uses clean **blue-only placeholder tiles** (`assets/placeholders/`) as honest stand-ins (the asset package ships no product photography).

## Components used
`Icon`, `Button`, `Badge`, `Chip`, `Checkbox`, `Tabs`, `Card`, `Price`, `Rating`, `ProductCard` — all from `window.WalmartDesignSystem_e58acd`.

> This is a cosmetic recreation for prototyping, not production code or a reverse-engineering of walmart.com.
