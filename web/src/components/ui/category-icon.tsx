"use client";

import * as React from "react";

import { CATEGORY_ICONS, CATEGORY_ICONS_REVERSE } from "@/lib/category-icon-data";
import { cn } from "@/lib/utils";

/**
 * Walmart category icon — two-tone merchandising illustration (auto, baby,
 * electronics, pets, toys…) used for category tiles and browsing, not
 * inline UI glyphs. Ported from components/core/CategoryIcon.jsx: colors
 * are baked into the source art as design tokens; `reverse` swaps to the
 * art-directed dark-background colorway rather than a mechanical color
 * flip, since different icons invert different shapes.
 */
function CategoryIcon({
  name,
  size = 40,
  reverse = false,
  label,
  className,
  style,
  ...rest
}: React.ComponentProps<"span"> & {
  name: keyof typeof CATEGORY_ICONS;
  size?: number;
  reverse?: boolean;
  label?: string;
}) {
  const map: Record<string, string> = reverse ? CATEGORY_ICONS_REVERSE : CATEGORY_ICONS;
  const svg = map[name];
  if (!svg) {
    if (typeof console !== "undefined") console.warn(`<CategoryIcon> unknown name: "${name}"`);
    return null;
  }
  return (
    <span
      data-slot="category-icon"
      role={label ? "img" : undefined}
      aria-label={label || undefined}
      aria-hidden={label ? undefined : true}
      className={cn("inline-flex shrink-0 items-center justify-center leading-none", className)}
      style={{ width: size, height: size, ...style }}
      dangerouslySetInnerHTML={{
        __html: svg.replace("<svg", '<svg width="100%" height="100%" style="display:block"'),
      }}
      {...rest}
    />
  );
}

export { CategoryIcon };
