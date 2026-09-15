import * as React from "react";

import { ICONS } from "@/lib/icon-data";
import { ICONS_OUTLINE } from "@/lib/icon-data-outline";
import { cn } from "@/lib/utils";

/**
 * Walmart functional icon. Renders an inline SVG that inherits
 * `color` via currentColor. Ported from components/core/Icon.jsx.
 *
 * `variant="solid"` (default) is the original 40-icon set. `variant="outline"`
 * is the line-style 68-icon set — a separate name space, since several
 * concepts (bell, cart, clock, heart, lock, search…) exist in both styles.
 */
function Icon({
  name,
  size = 24,
  label,
  className,
  style,
  variant = "solid",
  ...rest
}: React.ComponentProps<"span"> & {
  name: keyof typeof ICONS | keyof typeof ICONS_OUTLINE;
  size?: number;
  label?: string;
  variant?: "solid" | "outline";
}) {
  const map: Record<string, string> = variant === "outline" ? ICONS_OUTLINE : ICONS;
  const svg = map[name];
  if (!svg) {
    if (typeof console !== "undefined") console.warn(`<Icon> unknown name: "${name}"`);
    return null;
  }
  return (
    <span
      data-slot="icon"
      role={label ? "img" : undefined}
      aria-label={label || undefined}
      aria-hidden={label ? undefined : true}
      className={cn("inline-flex shrink-0 items-center justify-center leading-none", className)}
      style={{ width: size, height: size, color: "inherit", ...style }}
      dangerouslySetInnerHTML={{
        __html: svg.replace("<svg", '<svg width="100%" height="100%" style="display:block"'),
      }}
      {...rest}
    />
  );
}

export { Icon };
