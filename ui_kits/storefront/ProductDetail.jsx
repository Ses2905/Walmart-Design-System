// Walmart product detail — image well, price-first buy box, fulfillment options,
// rating, and related rail. Composes Price, Rating, Badge, Button, Icon, Tabs.
const { Price, Rating, Badge, Button, Icon, Tabs, ProductCard } = window.WalmartDesignSystem_e58acd;

function ProductDetail({ productId, onOpenProduct, onAdd, onBack }) {
  const all = window.WM_PRODUCTS;
  const p = all.find((x) => x.id === productId) || all[0];
  const [tab, setTab] = React.useState('about');
  const [fulfill, setFulfill] = React.useState('pickup');
  const related = all.filter((x) => x.cat === p.cat && x.id !== p.id).concat(all).slice(0, 6);

  return (
    <div style={{ maxWidth: 1392, margin: '0 auto', padding: '20px 24px', fontFamily: 'var(--font-sans)' }}>
      <button onClick={onBack} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'none', border: 'none', color: 'var(--text-link)', fontWeight: 'var(--fw-bold)', fontSize: 14, cursor: 'pointer', marginBottom: 16, fontFamily: 'inherit' }}>
        <Icon name="more" size={16} color="var(--text-link)" style={{ transform: 'rotate(180deg)' }} /> Back to results
      </button>

      <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 40, alignItems: 'start' }}>
        {/* Gallery */}
        <div style={{ display: 'flex', gap: 16 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[0, 1, 2].map((i) => (
              <div key={i} style={{ width: 64, height: 64, borderRadius: 'var(--radius-md)', border: `1.5px solid ${i === 0 ? 'var(--wm-true-blue)' : 'var(--border-subtle)'}`, background: '#fff', display: 'grid', placeItems: 'center', cursor: 'pointer' }}>
                <img src={p.img} alt="" style={{ width: 40, height: 40 }} />
              </div>
            ))}
          </div>
          <div style={{ flex: 1, aspectRatio: '1 / 1', borderRadius: 'var(--radius-xl)', border: '1px solid var(--border-subtle)', background: '#fff', display: 'grid', placeItems: 'center', position: 'relative' }}>
            {p.badge && <div style={{ position: 'absolute', top: 16, left: 16 }}><Badge variant={p.badge.variant} size="md">{p.badge.label}</Badge></div>}
            <img src={p.img} alt={p.title} style={{ width: '64%', height: '64%', objectFit: 'contain' }} />
          </div>
        </div>

        {/* Buy box */}
        <div>
          <div style={{ fontSize: 13, color: 'var(--text-link)', fontWeight: 'var(--fw-bold)', marginBottom: 6 }}>{p.cat}</div>
          <h1 style={{ fontSize: 28, fontWeight: 'var(--fw-bold)', lineHeight: 1.15, letterSpacing: '-0.01em', marginBottom: 10 }}>
            {p.brand && <span>{p.brand} </span>}{p.title}
          </h1>
          <div style={{ marginBottom: 16 }}><Rating value={p.rating} count={p.reviews} size={18} showValue /></div>
          <div style={{ marginBottom: 20 }}><Price value={p.price} was={p.was} size="lg" /></div>

          {/* Fulfillment options */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 22 }}>
            {[
              { id: 'shipping', icon: 'shipping', t: 'Shipping', s: 'Arrives tomorrow' },
              { id: 'pickup', icon: 'pick-up', t: 'Pickup', s: 'Today at 95829' },
            ].map((o) => (
              <button key={o.id} onClick={() => setFulfill(o.id)} style={{ textAlign: 'left', cursor: 'pointer', padding: '14px 16px', borderRadius: 'var(--radius-md)', background: '#fff', border: `1.5px solid ${fulfill === o.id ? 'var(--wm-true-blue)' : 'var(--border-default)'}`, boxShadow: fulfill === o.id ? '0 0 0 1px var(--wm-true-blue)' : 'none', display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                <Icon name={o.icon} size={22} color="var(--wm-bentonville-blue)" />
                <span>
                  <span style={{ display: 'block', fontWeight: 'var(--fw-bold)', fontSize: 15 }}>{o.t}</span>
                  <span style={{ display: 'block', fontSize: 13, color: 'var(--text-secondary)' }}>{o.s}</span>
                </span>
              </button>
            ))}
          </div>

          <div style={{ display: 'flex', gap: 12, marginBottom: 18 }}>
            <Button variant="primary" size="lg" block iconLeft="add-to-cart" onClick={() => onAdd(p)}>Add to cart</Button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontSize: 14, color: 'var(--text-secondary)' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 10 }}><Icon name="return" size={18} color="var(--wm-gray-600)" /> Free 90-day returns</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 10 }}><Icon name="lock" size={18} color="var(--wm-gray-600)" /> Secure transaction</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 10 }}><Icon name="favorite" size={18} color="var(--wm-gray-600)" /> Add to a list</span>
          </div>
        </div>
      </div>

      {/* Detail tabs */}
      <div style={{ marginTop: 40 }}>
        <Tabs tabs={[{ id: 'about', label: 'About this item' }, { id: 'specs', label: 'Specifications' }, { id: 'reviews', label: 'Reviews', count: p.reviews }]} value={tab} onChange={setTab} />
        <div style={{ padding: '20px 0', fontSize: 15, lineHeight: 1.6, color: 'var(--text-secondary)', maxWidth: '70ch' }}>
          {tab === 'about' && <p>Everyday quality at an everyday low price. The {p.brand} {p.title.toLowerCase()} is a customer favorite, backed by Walmart's free 90-day returns. Buy online for pickup today or free shipping in as little as one day.</p>}
          {tab === 'specs' && <p>Brand: {p.brand} · Category: {p.cat} · Rating: {p.rating} of 5 · {p.reviews.toLocaleString()} reviews. Full specifications available in store.</p>}
          {tab === 'reviews' && <p>{p.reviews.toLocaleString()} verified customer reviews, averaging {p.rating} of 5 stars. "Great value for the price" — a recurring theme from shoppers.</p>}
        </div>
      </div>

      {/* Related */}
      <h3 style={{ fontSize: 22, fontWeight: 'var(--fw-bold)', margin: '20px 0 16px' }}>Similar items you might like</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 16 }}>
        {related.map((r) => (
          <ProductCard key={r.id} image={r.img} brand={r.brand} title={r.title} price={r.price} was={r.was} rating={r.rating} reviews={r.reviews} badge={r.badge} fulfillment={r.fulfillment}
            onClick={() => onOpenProduct(r.id)} onAdd={() => onAdd(r)} style={{ cursor: 'pointer' }} />
        ))}
      </div>
    </div>
  );
}

window.WMProductDetail = ProductDetail;
