import React from 'react';

/**
 * Small status/label pill for campaign and ad group state — "Active",
 * "Under review", "Optimized", "Rejected", "Sponsored", etc.
 */
export function Badge({ variant = 'neutral', size = 'md', children, style, ...rest }) {
  const variants = {
    neutral: { background: 'var(--wm-gray-100)', color: 'var(--wm-gray-700)' },
    info: { background: 'var(--wm-blue-50)', color: 'var(--wm-true-blue)' },
    success: { background: 'var(--wm-success-bg)', color: 'var(--wm-success)' },
    rollback: { background: 'var(--wm-everyday-blue)', color: 'var(--wm-bentonville-blue)' },
    clearance: { background: 'var(--wm-error)', color: 'var(--wm-white)' },
    brand: { background: 'var(--wm-bentonville-blue)', color: 'var(--wm-white)' },
    outline: { background: 'transparent', color: 'var(--wm-gray-700)', boxShadow: 'inset 0 0 0 1px var(--wm-gray-300)' },
  };
  const sizes = {
    sm: { font: 'var(--text-2xs)', padding: '2px 8px', radius: 'var(--radius-xs)' },
    md: { font: 'var(--text-xs)', padding: '4px 10px', radius: 'var(--radius-sm)' },
  };
  const v = variants[variant] || variants.neutral;
  const s = sizes[size] || sizes.md;
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 4,
        fontFamily: 'var(--font-sans)',
        fontSize: s.font,
        fontWeight: 'var(--fw-bold)',
        lineHeight: 1.2,
        letterSpacing: variant === 'brand' || variant === 'clearance' ? '0.02em' : 0,
        textTransform: variant === 'brand' || variant === 'clearance' ? 'uppercase' : 'none',
        padding: s.padding,
        borderRadius: s.radius,
        whiteSpace: 'nowrap',
        ...v,
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
