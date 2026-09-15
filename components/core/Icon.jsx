import React from 'react';
import { ICONS } from './icon-data.js';
import { ICONS_OUTLINE } from './icon-data-outline.js';

/**
 * Walmart functional icon. Renders an inline SVG that inherits `color`
 * via currentColor, so it tints anywhere and scales crisply.
 *
 * `variant="solid"` (default) is the original 40-icon set. `variant="outline"`
 * is the line-style 68-icon set — a separate name space, since several
 * concepts (bell, cart, clock, heart, lock, search…) exist in both styles.
 */
export function Icon({ name, size = 24, color, label, style, className, strokeBox, variant = 'solid', ...rest }) {
  const svg = (variant === 'outline' ? ICONS_OUTLINE : ICONS)[name];
  if (!svg) {
    if (typeof console !== 'undefined') console.warn(`<Icon> unknown name: "${name}"`);
    return null;
  }
  return (
    <span
      className={className}
      role={label ? 'img' : undefined}
      aria-label={label || undefined}
      aria-hidden={label ? undefined : true}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: size,
        height: size,
        color: color || 'inherit',
        flex: 'none',
        lineHeight: 0,
        ...style,
      }}
      dangerouslySetInnerHTML={{
        __html: svg.replace('<svg', '<svg width="100%" height="100%" style="display:block"'),
      }}
      {...rest}
    />
  );
}
