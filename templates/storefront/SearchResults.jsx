// Walmart search results — filter sidebar (chips, checkboxes, price), sort bar,
// and a product grid. Composes ProductCard, Checkbox, Chip, Tabs, Icon.
var ProductCard = (p) => React.createElement(window.WalmartDesignSystem_e58acd.ProductCard, p);
var Checkbox = (p) => React.createElement(window.WalmartDesignSystem_e58acd.Checkbox, p);
var Chip = (p) => React.createElement(window.WalmartDesignSystem_e58acd.Chip, p);
var Icon = (p) => React.createElement(window.WalmartDesignSystem_e58acd.Icon, p);

function SearchResults({ query, onOpenProduct, onAdd }) {
  const all = window.WM_PRODUCTS;
  const [fulfillment, setFulfillment] = React.useState('all');
  const [deptOpen] = React.useState(true);
  const [chosen, setChosen] = React.useState({});

  const fulfillments = [
    { id: 'all', label: 'All' },
    { id: 'pickup', label: 'Pickup' },
    { id: 'delivery', label: 'Delivery' },
    { id: 'shipping', label: 'Shipping' },
  ];

  return (
    <div style={{ maxWidth: 1392, margin: '0 auto', padding: '20px 24px', fontFamily: 'var(--font-sans)' }}>
      <div style={{ fontSize: 13, color: 'var(--text-secondary)', marginBottom: 8 }}>Results for "<b style={{ color: 'var(--text-primary)' }}>{query || 'everything'}</b>" ({all.length})</div>

      {/* Fulfillment toggle + sort */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
        <div style={{ display: 'flex', gap: 8 }}>
          {fulfillments.map((f) => (
            <Chip key={f.id} selected={fulfillment === f.id} onClick={() => setFulfillment(f.id)}>{f.label}</Chip>
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, color: 'var(--text-secondary)' }}>
          <Icon name="filter" size={18} color="var(--wm-gray-600)" /> Sort by
          <span style={{ fontWeight: 'var(--fw-bold)', color: 'var(--text-primary)' }}>Best match</span>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '248px 1fr', gap: 24, alignItems: 'start' }}>
        {/* Sidebar */}
        <aside style={{ background: '#fff', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', padding: 20, position: 'sticky', top: 16 }}>
          <FilterGroup title="Departments">
            {['Grocery', 'Electronics', 'Home', 'Beauty', 'Toys'].map((d) => (
              <Checkbox key={d} label={d} checked={!!chosen[d]} onChange={(e) => setChosen({ ...chosen, [d]: e.target.checked })} />
            ))}
          </FilterGroup>
          <Divider />
          <FilterGroup title="Price">
            {['Under $10', '$10 – $25', '$25 – $50', '$50 – $200', '$200 & above'].map((d) => (
              <Checkbox key={d} label={d} checked={!!chosen[d]} onChange={(e) => setChosen({ ...chosen, [d]: e.target.checked })} />
            ))}
          </FilterGroup>
          <Divider />
          <FilterGroup title="Customer rating">
            {['4★ & up', '3★ & up'].map((d) => (
              <Checkbox key={d} label={d} checked={!!chosen[d]} onChange={(e) => setChosen({ ...chosen, [d]: e.target.checked })} />
            ))}
          </FilterGroup>
        </aside>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
          {all.map((p) => (
            <ProductCard key={p.id} image={p.img} brand={p.brand} title={p.title} price={p.price} was={p.was} rating={p.rating} reviews={p.reviews} badge={p.badge} fulfillment={p.fulfillment} sponsored={p.sponsored}
              onClick={() => onOpenProduct(p.id)} onAdd={() => onAdd(p)} style={{ cursor: 'pointer' }} />
          ))}
        </div>
      </div>
    </div>
  );
}

function FilterGroup({ title, children }) {
  return (
    <div>
      <h4 style={{ fontSize: 15, fontWeight: 'var(--fw-bold)', marginBottom: 12 }}>{title}</h4>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>{children}</div>
    </div>
  );
}
const Divider = () => <div style={{ height: 1, background: 'var(--border-subtle)', margin: '18px 0' }} />;

window.WMSearchResults = SearchResults;
