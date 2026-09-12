// Walmart cart — line items with qty steppers, savings, and an order summary
// with the Walmart+ upsell. Composes Price, Button, Icon.
var Price = (p) => React.createElement(window.WalmartDesignSystem_e58acd.Price, p);
var Button = (p) => React.createElement(window.WalmartDesignSystem_e58acd.Button, p);
var Icon = (p) => React.createElement(window.WalmartDesignSystem_e58acd.Icon, p);
var Badge = (p) => React.createElement(window.WalmartDesignSystem_e58acd.Badge, p);

function Cart({ items, onQty, onRemove, onCheckout, onContinue }) {
  const subtotal = items.reduce((s, it) => s + it.price * it.qty, 0);
  const savings = items.reduce((s, it) => s + ((it.was || it.price) - it.price) * it.qty, 0);
  const count = items.reduce((s, it) => s + it.qty, 0);
  const shipping = subtotal > 35 ? 0 : 6.99;
  const tax = subtotal * 0.0725;
  const total = subtotal + shipping + tax;

  if (items.length === 0) {
    return (
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '60px 24px', textAlign: 'center', fontFamily: 'var(--font-sans)' }}>
        <img src="../../assets/placeholders/cart.svg" alt="" style={{ width: 96, height: 96, margin: '0 auto 16px' }} />
        <h1 style={{ fontSize: 26, fontWeight: 'var(--fw-bold)', marginBottom: 8 }}>Your cart is empty</h1>
        <p style={{ color: 'var(--text-secondary)', marginBottom: 24 }}>Add items to get going, or reorder your essentials.</p>
        <Button variant="primary" size="lg" onClick={onContinue}>Continue shopping</Button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 1392, margin: '0 auto', padding: '24px', fontFamily: 'var(--font-sans)' }}>
      <h1 style={{ fontSize: 30, fontWeight: 'var(--fw-bold)', marginBottom: 20 }}>Cart <span style={{ color: 'var(--text-secondary)', fontWeight: 'var(--fw-regular)', fontSize: 22 }}>({count} items)</span></h1>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: 24, alignItems: 'start' }}>
        {/* Lines */}
        <div style={{ background: '#fff', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', padding: '8px 24px' }}>
          <div style={{ padding: '16px 0', borderBottom: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', gap: 8, color: 'var(--wm-success)', fontWeight: 'var(--fw-bold)', fontSize: 15 }}>
            <Icon name="pick-up" size={20} color="var(--wm-success)" /> Pickup today from Sacramento Supercenter
          </div>
          {items.map((it) => (
            <div key={it.id} style={{ display: 'flex', gap: 18, padding: '20px 0', borderBottom: '1px solid var(--border-subtle)' }}>
              <div style={{ width: 96, height: 96, flex: 'none', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)', background: '#fff', display: 'grid', placeItems: 'center' }}>
                <img src={it.img} alt="" style={{ width: 60, height: 60 }} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 15, lineHeight: 1.35, marginBottom: 4 }}><b>{it.brand}</b> {it.title}</div>
                {it.badge && <div style={{ margin: '4px 0' }}><Badge variant={it.badge.variant} size="sm">{it.badge.label}</Badge></div>}
                <div style={{ fontSize: 13, color: 'var(--wm-success)', fontWeight: 'var(--fw-bold)' }}>In stock</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 12 }}>
                  <div style={{ display: 'inline-flex', alignItems: 'center', border: '1.5px solid var(--border-default)', borderRadius: 'var(--radius-pill)', height: 40 }}>
                    <button onClick={() => onQty(it.id, -1)} aria-label="Decrease" style={stepBtn}><Icon name={it.qty === 1 ? 'return' : 'minus'} size={18} color="var(--wm-true-blue)" /></button>
                    <span style={{ minWidth: 28, textAlign: 'center', fontWeight: 'var(--fw-bold)' }}>{it.qty}</span>
                    <button onClick={() => onQty(it.id, 1)} aria-label="Increase" style={stepBtn}><Icon name="plus" size={18} color="var(--wm-true-blue)" /></button>
                  </div>
                  <button onClick={() => onRemove(it.id)} style={{ background: 'none', border: 'none', color: 'var(--text-link)', fontWeight: 'var(--fw-bold)', fontSize: 14, cursor: 'pointer', fontFamily: 'inherit' }}>Remove</button>
                </div>
              </div>
              <div style={{ textAlign: 'right' }}><Price value={it.price * it.qty} was={it.was ? it.was * it.qty : undefined} size="md" align="center" /></div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div style={{ position: 'sticky', top: 16, display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ background: '#fff', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', padding: 24 }}>
            <Button variant="primary" size="lg" block onClick={onCheckout}>Continue to checkout</Button>
            <div style={{ height: 20 }} />
            <Row label={`Subtotal (${count} items)`} value={`$${subtotal.toFixed(2)}`} />
            {savings > 0 && <Row label="Savings" value={`-$${savings.toFixed(2)}`} accent />}
            <Row label="Shipping" value={shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`} />
            <Row label="Taxes" value={`$${tax.toFixed(2)}`} />
            <div style={{ height: 1, background: 'var(--border-subtle)', margin: '14px 0' }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <span style={{ fontSize: 17, fontWeight: 'var(--fw-bold)' }}>Estimated total</span>
              <span style={{ fontSize: 22, fontWeight: 'var(--fw-black)', color: 'var(--text-price)' }}>${total.toFixed(2)}</span>
            </div>
          </div>
          <div style={{ background: 'var(--wm-sky-50)', border: '1px solid var(--wm-sky-100)', borderRadius: 'var(--radius-lg)', padding: 18, display: 'flex', gap: 12, alignItems: 'center' }}>
            <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--wm-bentonville-blue)', display: 'grid', placeItems: 'center', flex: 'none' }}><Icon name="shipping" size={22} color="#fff" /></div>
            <div style={{ fontSize: 13.5, color: 'var(--wm-bentonville-blue)' }}><b>Want free shipping?</b> Try Walmart+ free for 30 days and skip the ${shipping.toFixed(2)} fee.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

const stepBtn = { width: 40, height: 38, border: 'none', background: 'none', cursor: 'pointer', display: 'grid', placeItems: 'center' };
function Row({ label, value, accent }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 14.5, padding: '5px 0', color: accent ? 'var(--wm-success)' : 'var(--text-secondary)', fontWeight: accent ? 'var(--fw-bold)' : 'var(--fw-regular)' }}>
      <span>{label}</span><span>{value}</span>
    </div>
  );
}

window.WMCart = Cart;
