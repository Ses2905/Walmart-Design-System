import React from 'react';

/**
 * Generic surface card. White, softly rounded, optional border/shadow —
 * the container for content modules across Walmart surfaces.
 */
export function Card({ padding = 20, interactive = false, elevated = false, children, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onMouseEnter={() => interactive && setHover(true)}
      onMouseLeave={() => interactive && setHover(false)}
      style={{
        background: 'var(--color-surface)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-lg)',
        padding,
        boxShadow: hover ? 'var(--shadow-md)' : elevated ? 'var(--shadow-card)' : 'none',
        cursor: interactive ? 'pointer' : 'default',
        transition: 'box-shadow var(--dur-base) var(--ease-standard)',
        fontFamily: 'var(--font-sans)',
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
