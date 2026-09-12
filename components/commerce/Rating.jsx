import React from 'react';

const Star = ({ fill, size }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" style={{ display: 'block' }} aria-hidden="true">
    <path
      d="M10 1.6l2.47 5.01 5.53.8-4 3.9.94 5.5L10 14.22 5.06 16.81 6 11.31l-4-3.9 5.53-.8z"
      fill={fill}
    />
  </svg>
);

/**
 * Star rating with Walmart's Everyday-Blue stars. Read-only by default;
 * optionally shows the numeric count.
 */
export function Rating({ value = 0, count, size = 16, showValue = false, style, ...rest }) {
  const full = Math.round(value * 2) / 2;
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: 'var(--font-sans)', ...style }} {...rest}>
      <div style={{ display: 'inline-flex', gap: 1 }} aria-label={`${value} out of 5 stars`}>
        {[0, 1, 2, 3, 4].map((i) => {
          const pct = Math.max(0, Math.min(1, full - i));
          return (
            <span key={i} style={{ position: 'relative', width: size, height: size }}>
              <Star fill="var(--wm-gray-300)" size={size} />
              {pct > 0 && (
                <span style={{ position: 'absolute', inset: 0, width: `${pct * 100}%`, overflow: 'hidden' }}>
                  <Star fill="var(--wm-everyday-blue)" size={size} />
                </span>
              )}
            </span>
          );
        })}
      </div>
      {showValue && <span style={{ fontSize: size * 0.82, fontWeight: 'var(--fw-medium)', color: 'var(--text-primary)' }}>{Number(value).toFixed(1)}</span>}
      {count != null && <span style={{ fontSize: size * 0.82, color: 'var(--text-link)' }}>({count.toLocaleString()})</span>}
    </div>
  );
}
