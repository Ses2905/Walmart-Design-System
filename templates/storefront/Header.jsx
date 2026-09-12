// Walmart storefront header — Bentonville Blue bar with the Spark, a prominent
// pill search, location/account/cart actions. Uses the design-system Icon.
var Icon = (p) => React.createElement(window.WalmartDesignSystem_e58acd.Icon, p);

function Header({ cartCount = 0, query = '', onSearch, onNav, onCart }) {
  const [q, setQ] = React.useState(query);
  const submit = (e) => { e.preventDefault(); onSearch && onSearch(q); };
  return (
    <header style={{ background: 'var(--wm-bentonville-blue)', color: '#fff', fontFamily: 'var(--font-sans)' }}>
      <div style={{ maxWidth: 1392, margin: '0 auto', padding: '12px 24px', display: 'flex', alignItems: 'center', gap: 20 }}>
        {/* Spark logo */}
        <button onClick={() => onNav && onNav('home')} aria-label="Walmart home" style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', padding: 0 }}>
          <img src="../../assets/logos/spark-everyday-blue.svg" alt="Walmart" style={{ height: 38 }} />
        </button>

        {/* Location pill */}
        <button onClick={() => onNav && onNav('home')} style={pillBtn}>
          <Icon name="location" size={22} color="#fff" />
          <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', lineHeight: 1.1 }}>
            <span style={{ fontSize: 11, opacity: .85 }}>Pickup or delivery?</span>
            <span style={{ fontSize: 13, fontWeight: 'var(--fw-bold)' }}>Sacramento, 95829</span>
          </span>
        </button>

        {/* Search */}
        <form onSubmit={submit} style={{ flex: 1, display: 'flex', alignItems: 'center', background: '#fff', borderRadius: 'var(--radius-pill)', height: 48, paddingLeft: 20, paddingRight: 4 }}>
          <input
            value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search everything at Walmart online and in store"
            style={{ flex: 1, border: 'none', outline: 'none', background: 'transparent', fontFamily: 'inherit', fontSize: 15, color: 'var(--text-primary)' }}
          />
          <button type="submit" aria-label="Search" style={{ width: 40, height: 40, borderRadius: '50%', border: 'none', background: 'var(--wm-everyday-blue)', cursor: 'pointer', display: 'grid', placeItems: 'center' }}>
            <Icon name="search" size={20} color="var(--wm-bentonville-blue)" />
          </button>
        </form>

        {/* Actions */}
        <button onClick={() => onNav && onNav('home')} style={actionBtn}>
          <Icon name="favorite" size={24} color="#fff" />
          <span style={actionLabel}>Reorder<br/><b>My Items</b></span>
        </button>
        <button onClick={() => onNav && onNav('home')} style={actionBtn}>
          <Icon name="sign-in" size={24} color="#fff" />
          <span style={actionLabel}>Sign In<br/><b>Account</b></span>
        </button>
        <button onClick={onCart} style={{ ...actionBtn, position: 'relative' }}>
          <div style={{ position: 'relative' }}>
            <Icon name="cart" size={26} color="#fff" />
            {cartCount > 0 && (
              <span style={{ position: 'absolute', top: -8, right: -10, minWidth: 18, height: 18, padding: '0 4px', borderRadius: 9, background: 'var(--wm-everyday-blue)', color: 'var(--wm-bentonville-blue)', fontSize: 11, fontWeight: 'var(--fw-black)', display: 'grid', placeItems: 'center' }}>{cartCount}</span>
            )}
          </div>
          <span style={{ ...actionLabel, fontWeight: 'var(--fw-bold)' }}>${(cartCount * 9.62).toFixed(2)}</span>
        </button>
      </div>

      {/* Department strip */}
      <div style={{ background: 'var(--wm-true-blue)' }}>
        <div style={{ maxWidth: 1392, margin: '0 auto', padding: '8px 24px', display: 'flex', gap: 22, alignItems: 'center', fontSize: 13.5, fontWeight: 'var(--fw-medium)', overflowX: 'auto' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 7, fontWeight: 'var(--fw-bold)' }}><Icon name="grid" size={18} color="#fff" /> Departments</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 7 }}><Icon name="lists" size={18} color="#fff" /> Services</span>
          <span style={{ opacity: .5 }}>|</span>
          {['Get it Fast', 'My Items', 'Grocery & Essentials', 'Walmart+', 'Pharmacy', 'Trending', 'Deals', 'Registry'].map((d) => (
            <span key={d} style={{ whiteSpace: 'nowrap', cursor: 'pointer' }}>{d}</span>
          ))}
        </div>
      </div>
    </header>
  );
}

const pillBtn = { display: 'flex', alignItems: 'center', gap: 8, background: 'none', border: 'none', color: '#fff', cursor: 'pointer', padding: '6px 10px', borderRadius: 'var(--radius-pill)' };
const actionBtn = { display: 'flex', alignItems: 'center', gap: 8, background: 'none', border: 'none', color: '#fff', cursor: 'pointer', whiteSpace: 'nowrap' };
const actionLabel = { fontSize: 13, textAlign: 'left', lineHeight: 1.15 };

window.WMHeader = Header;
