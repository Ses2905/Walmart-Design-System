// Transpile and run the storefront scripts in order once React, Babel and the
// design-system bundle are all present. Deterministic regardless of load timing.
(() => {
  const files = ['data.js','Header.jsx','Homepage.jsx','SearchResults.jsx','ProductDetail.jsx','Cart.jsx','app.jsx'];
  const ready = () => window.React && window.Babel && window.WalmartDesignSystem_e58acd;
  const run = async () => {
    for (const f of files) {
      if (f === 'data.js' && window.WM_PRODUCTS) continue;
      if (f === 'app.jsx' && window.StorefrontApp) continue;
      const src = await (await fetch('./' + f)).text();
      const code = f.endsWith('.jsx') ? Babel.transform(src, { presets: ['react'] }).code : src;
      (0, eval)(code);
    }
  };
  const tick = () => ready() ? run() : setTimeout(tick, 30);
  tick();
})();
