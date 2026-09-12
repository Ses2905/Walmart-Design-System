var Icon = (p) => React.createElement(window.WalmartDesignSystem_e58acd.Icon, p);

function Toast({ msg }) {
  if (!msg) return null;
  return (
    <div style={{ position: 'fixed', left: '50%', bottom: 28, transform: 'translateX(-50%)', background: 'var(--wm-bentonville-blue)', color: '#fff', padding: '14px 22px', borderRadius: 'var(--radius-pill)', boxShadow: 'var(--shadow-lg)', display: 'flex', alignItems: 'center', gap: 10, fontFamily: 'var(--font-body)', fontWeight: 'var(--fw-bold)', zIndex: 50 }}>
      <span style={{ width: 24, height: 24, borderRadius: '50%', background: 'var(--wm-everyday-blue)', display: 'grid', placeItems: 'center' }}><Icon name="checkmark" size={14} color="var(--wm-bentonville-blue)" /></span>
      {msg}
    </div>
  );
}

function Footer() {
  const cols = {
    'All Departments': ['Grocery', 'Electronics', 'Home', 'Pharmacy', 'Fashion'],
    'Get to Know Us': ['About Walmart', 'Careers', 'Sustainability', 'Newsroom'],
    'Customer Service': ['Help Center', 'Track Order', 'Returns', 'Store Finder'],
    'Save Money': ['Weekly Ad', 'Rollbacks', 'Clearance', 'Walmart+'],
  };
  return (
    <footer className="wm-surface-dark" style={{ fontFamily: 'var(--font-body)', marginTop: 40 }}>
      <div style={{ maxWidth: 1392, margin: '0 auto', padding: '40px 24px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr) auto', gap: 24 }}>
        {Object.entries(cols).map(([h, links]) => (
          <div key={h}>
            <h4 style={{ fontSize: 14, fontWeight: 'var(--fw-bold)', marginBottom: 12, color: '#fff' }}>{h}</h4>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
              {links.map((l) => <li key={l} style={{ fontSize: 13.5, opacity: .85 }}>{l}</li>)}
            </ul>
          </div>
        ))}
        <img src="../../assets/logos/spark-white.svg" alt="Walmart" style={{ width: 52, justifySelf: 'end' }} />
      </div>
      <div style={{ borderTop: '1px solid rgba(255,255,255,.15)' }}>
        <div style={{ maxWidth: 1392, margin: '0 auto', padding: '16px 24px', fontSize: 12.5, opacity: .7 }}>© 2026 Walmart. Save money. Live better.</div>
      </div>
    </footer>
  );
}

function StorefrontApp() {
  const [route, setRoute] = React.useState({ name: 'home' });
  const [query, setQuery] = React.useState('');
  const [cart, setCart] = React.useState([]);
  const [toast, setToast] = React.useState('');
  const toastTimer = React.useRef(null);

  const flash = (m) => {
    setToast(m);
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(''), 2200);
  };

  const addToCart = (p) => {
    setCart((c) => {
      const ex = c.find((x) => x.id === p.id);
      if (ex) return c.map((x) => x.id === p.id ? { ...x, qty: x.qty + 1 } : x);
      return [...c, { ...p, qty: 1 }];
    });
    flash('Added to cart');
  };
  const changeQty = (id, d) => setCart((c) => c.flatMap((x) => x.id === id ? (x.qty + d <= 0 ? [] : [{ ...x, qty: x.qty + d }]) : [x]));
  const removeItem = (id) => setCart((c) => c.filter((x) => x.id !== id));
  const cartCount = cart.reduce((s, x) => s + x.qty, 0);

  const goSearch = (q) => { setQuery(q); setRoute({ name: 'search' }); window.scrollTo(0, 0); };
  const openProduct = (id) => { setRoute({ name: 'product', id }); window.scrollTo(0, 0); };

  return (
    <div style={{ background: 'var(--wm-gray-50)' }}>
      <window.WMHeader cartCount={cartCount} query={query}
        onSearch={goSearch}
        onNav={() => { setRoute({ name: 'home' }); window.scrollTo(0, 0); }}
        onCart={() => { setRoute({ name: 'cart' }); window.scrollTo(0, 0); }} />

      {route.name === 'home' && <window.WMHomepage onOpenProduct={openProduct} onAdd={addToCart} onSearch={goSearch} />}
      {route.name === 'search' && <window.WMSearchResults query={query} onOpenProduct={openProduct} onAdd={addToCart} />}
      {route.name === 'product' && <window.WMProductDetail productId={route.id} onOpenProduct={openProduct} onAdd={addToCart} onBack={() => setRoute({ name: 'search' })} />}
      {route.name === 'cart' && <window.WMCart items={cart} onQty={changeQty} onRemove={removeItem} onCheckout={() => flash('Checkout is a demo')} onContinue={() => setRoute({ name: 'home' })} />}

      <Footer />
      <Toast msg={toast} />
    </div>
  );
}

window.StorefrontApp = StorefrontApp;
