// Walmart homepage — hero savings banner, category rail, and a
// "Deals" product grid. Composes ProductCard + Button + Icon.
const { ProductCard, Button, Icon } = window.WalmartDesignSystem_e58acd;

function Homepage({ onOpenProduct, onAdd, onSearch }) {
  const products = window.WM_PRODUCTS;
  const cats = window.WM_CATEGORIES;
  return (
    <div style={{ maxWidth: 1392, margin: '0 auto', padding: '24px', fontFamily: 'var(--font-sans)' }}>
      {/* Hero */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 16, marginBottom: 24 }}>
        <div style={{ background: 'var(--wm-sky-blue)', borderRadius: 'var(--radius-xl)', padding: '44px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: 300, position: 'relative', overflow: 'hidden' }}>
          <span className="wm-eyebrow" style={{ color: 'var(--wm-bentonville-blue)' }}>Hot July savings</span>
          <h1 style={{ fontSize: 52, fontWeight: 'var(--fw-black)', letterSpacing: '-0.02em', lineHeight: 1.02, margin: '10px 0 14px', color: 'var(--wm-bentonville-blue)', maxWidth: 12 + 'ch' }}>Everyday low prices</h1>
          <p style={{ fontSize: 18, color: 'var(--wm-bentonville-blue)', maxWidth: '34ch', marginBottom: 24 }}>Pickup, delivery, and shipping — all in one place. Save more with Walmart+.</p>
          <div><Button variant="primary" size="lg" onClick={() => onSearch('deals')}>Shop deals</Button></div>
          <img src="../../assets/logos/spark-everyday-blue.svg" alt="" style={{ position: 'absolute', right: -40, bottom: -40, width: 240, opacity: .35 }} />
        </div>
        <div style={{ background: 'var(--wm-bentonville-blue)', borderRadius: 'var(--radius-xl)', padding: 32, color: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ display: 'inline-flex', width: 'fit-content', background: 'var(--wm-everyday-blue)', color: 'var(--wm-bentonville-blue)', fontWeight: 'var(--fw-black)', fontSize: 12, letterSpacing: '.02em', textTransform: 'uppercase', padding: '4px 10px', borderRadius: 'var(--radius-sm)', marginBottom: 14 }}>Walmart+</div>
          <h2 style={{ fontSize: 28, fontWeight: 'var(--fw-bold)', lineHeight: 1.1, marginBottom: 10 }}>Free delivery, free shipping</h2>
          <p style={{ fontSize: 15, opacity: .9, marginBottom: 20 }}>Plus member prices on fuel and more. Try 30 days free.</p>
          <div><Button variant="spark" onClick={() => onSearch('walmart+')}>Try free</Button></div>
        </div>
      </div>

      {/* Category rail */}
      <div style={{ background: '#fff', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', padding: '20px 24px', marginBottom: 24 }}>
        <h3 style={{ fontSize: 20, fontWeight: 'var(--fw-bold)', marginBottom: 16 }}>Get it all right here</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(10, 1fr)', gap: 12 }}>
          {cats.map((c) => (
            <button key={c.label} onClick={() => onSearch(c.label)} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, padding: 6, borderRadius: 'var(--radius-md)' }}>
              <img src={c.img} alt="" style={{ width: 76, height: 76 }} />
              <span style={{ fontSize: 12.5, fontWeight: 'var(--fw-medium)', color: 'var(--text-primary)' }}>{c.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Deals grid */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
        <h3 style={{ fontSize: 24, fontWeight: 'var(--fw-bold)' }}>Flash deals</h3>
        <button onClick={() => onSearch('deals')} style={{ display: 'inline-flex', alignItems: 'center', gap: 4, background: 'none', border: 'none', color: 'var(--text-link)', fontWeight: 'var(--fw-bold)', fontSize: 15, cursor: 'pointer', fontFamily: 'inherit' }}>View all <Icon name="more" size={16} color="var(--text-link)" /></button>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 16 }}>
        {products.slice(0, 6).map((p) => (
          <ProductCard key={p.id} image={p.img} brand={p.brand} title={p.title} price={p.price} was={p.was} rating={p.rating} reviews={p.reviews} badge={p.badge} fulfillment={p.fulfillment} sponsored={p.sponsored}
            onClick={() => onOpenProduct(p.id)} onAdd={() => onAdd(p)} style={{ cursor: 'pointer' }} />
        ))}
      </div>
    </div>
  );
}

window.WMHomepage = Homepage;
