import React from 'react';
import { CATEGORY_ICONS, CATEGORY_ICONS_REVERSE } from './category-icon-data.js';

/**
 * Walmart category icon — two-tone merchandising illustration (auto, baby,
 * electronics, pets, toys…) used for category tiles and browsing, not
 * inline UI glyphs. Colors are baked into the source art as design tokens;
 * `reverse` swaps to the art-directed dark-background colorway rather than
 * a mechanical color flip, since different icons invert different shapes.
 */
export function CategoryIcon({ name, size = 40, reverse = false, label, style, className, ...rest }) {
  const svg = (reverse ? CATEGORY_ICONS_REVERSE : CATEGORY_ICONS)[name];
  if (!svg) {
    if (typeof console !== 'undefined') console.warn(`<CategoryIcon> unknown name: "${name}"`);
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
