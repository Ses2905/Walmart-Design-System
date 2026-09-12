import React from 'react';
import { Price } from './Price.jsx';
import { Rating } from './Rating.jsx';
import { Badge } from '../core/Badge.jsx';
import { Icon } from '../core/Icon.jsx';

/**
 * Walmart product tile — the core merchandising unit. Square image well,
 * price-first hierarchy, fulfillment line, and a pill "Add" affordance.
 */
export function ProductCard({
  image,
  title,
  brand,
  price,
  was,
  rating,
  reviews,
  badge,
  fulfillment = 'Free shipping, arrives in 2 days',
  sponsored = false,
  onAdd,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [fav, setFav] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        background: 'var(--color-surface)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-lg)',
        padding: 12,
        transition: 'box-shadow var(--dur-base) var(--ease-standard), border-color var(--dur-base)',
        boxShadow: hover ? 'var(--shadow-md)' : 'none',
        borderColor: hover ? 'var(--border-default)' : 'var(--border-subtle)',
        fontFamily: 'var(--font-sans)',
        ...style,
      }}
      {...rest}
    >
      {/* Image well */}
      <div style={{ position: 'relative', aspectRatio: '1 / 1', borderRadius: 'var(--radius-md)', overflow: 'hidden', background: 'var(--wm-white)' }}>
        {image
          ? <img src={image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          : <div style={{ width: '100%', height: '100%', display: 'grid', placeItems: 'center', background: 'var(--wm-gray-50)', color: 'var(--wm-gray-300)' }}><Icon name="photo" size={40} /></div>}
        <button
          onClick={() => setFav(!fav)}
          aria-label="Save to list"
          style={{ position: 'absolute', top: 8, right: 8, width: 36, height: 36, borderRadius: 'var(--radius-pill)', border: 'none', background: 'rgba(255,255,255,0.92)', boxShadow: 'var(--shadow-sm)', cursor: 'pointer', display: 'grid', placeItems: 'center', color: fav ? 'var(--wm-true-blue)' : 'var(--wm-gray-600)' }}
        >
          <Icon name="favorite" size={18} />
        </button>
      </div>

      {/* Body */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, paddingTop: 12 }}>
        {sponsored && <span style={{ fontSize: 11, color: 'var(--text-tertiary)' }}>Sponsored</span>}
        <Price value={price} was={was} size="md" />
        {badge && <div><Badge variant={badge.variant || 'rollback'} size="sm">{badge.label}</Badge></div>}
        <div style={{ fontSize: 14, lineHeight: 1.35, color: 'var(--text-primary)', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', minHeight: 38 }}>
          {brand && <span style={{ fontWeight: 'var(--fw-bold)' }}>{brand} </span>}
          {title}
        </div>
        {rating != null && <Rating value={rating} count={reviews} size={15} />}
        <div style={{ fontSize: 13, color: 'var(--text-secondary)' }}>{fulfillment}</div>
        <button
          onClick={onAdd}
          style={{ marginTop: 4, height: 40, borderRadius: 'var(--radius-pill)', border: '1.5px solid var(--wm-gray-900)', background: 'var(--wm-white)', color: 'var(--wm-bentonville-blue)', fontFamily: 'var(--font-sans)', fontWeight: 'var(--fw-bold)', fontSize: 15, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 6, alignSelf: 'flex-start', padding: '0 22px', transition: 'background var(--dur-fast)' }}
          onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--wm-gray-50)')}
          onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--wm-white)')}
        >
          <Icon name="add-to-cart" size={18} /> Add
        </button>
      </div>
    </div>
  );
}
