import React from 'react';

/**
 * Walmart price display. Big, tight, navy-black numerals with the dollar
 * sign and cents set smaller and raised — the supermarket price convention.
 */
export function Price({ value, was, size = 'md', savings, align = 'left', style, ...rest }) {
  const sizes = {
    sm: { dollars: 20, small: 11, raise: -4 },
    md: { dollars: 30, small: 14, raise: -7 },
    lg: { dollars: 46, small: 18, raise: -11 },
  };
  const s = sizes[size] || sizes.md;
  const [dollars, cents] = Number(value).toFixed(2).split('.');
  const computedSavings = savings != null ? savings : (was != null ? (was - value) : null);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: align === 'left' ? 'flex-start' : 'center', gap: 2, fontFamily: 'var(--font-sans)', ...style }} {...rest}>
      <div style={{ display: 'flex', alignItems: 'flex-start', color: 'var(--text-price)', lineHeight: 1 }}>
        <span style={{ fontSize: s.small, fontWeight: 'var(--fw-bold)', transform: `translateY(${s.raise}px)` }}>$</span>
        <span style={{ fontSize: s.dollars, fontWeight: 'var(--fw-black)', letterSpacing: '-0.02em' }}>{dollars}</span>
        <span style={{ fontSize: s.small, fontWeight: 'var(--fw-bold)', transform: `translateY(${s.raise}px)` }}>{cents}</span>
      </div>
      {(was != null || computedSavings != null) && (
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: size === 'lg' ? 13 : 12 }}>
          {was != null && <span style={{ color: 'var(--text-tertiary)', textDecoration: 'line-through' }}>${Number(was).toFixed(2)}</span>}
          {computedSavings != null && computedSavings > 0 && (
            <span style={{ color: 'var(--text-savings)', fontWeight: 'var(--fw-bold)' }}>You save ${Number(computedSavings).toFixed(2)}</span>
          )}
        </div>
      )}
    </div>
  );
}
