import * as React from "react";

import { ICONS } from "@/lib/icon-data";
import { cn } from "@/lib/utils";

/**
 * Walmart functional icon. Renders an inline SVG that inherits
 * `color` via currentColor. Ported from components/core/Icon.jsx.
 */
function Icon({
  name,
  size = 24,
  label,
  className,
  style,
  ...rest
}: React.ComponentProps<"span"> & {
  name: keyof typeof ICONS;
  size?: number;
  label?: string;
}) {
  const svg = ICONS[name];
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
