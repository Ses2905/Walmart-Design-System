import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * Generic surface card — white, softly rounded, optional border/shadow.
 * Ported from components/core/Card.jsx. `padding` takes a raw pixel
 * number (matching the source component's API) rather than a token
 * name, so arbitrary call sites keep working unchanged.
 */
function Card({
  className,
  padding = 20,
  interactive = false,
  elevated = false,
  style,
  ...props
}: React.ComponentProps<"div"> & {
  padding?: number;
  interactive?: boolean;
  elevated?: boolean;
}) {
  return (
    <div
      data-slot="card"
      className={cn(
        "bg-surface border border-border-subtle rounded-lg font-sans transition-shadow duration-base ease-standard",
        interactive && "cursor-pointer hover:shadow-md",
        !interactive && elevated && "shadow-card",
        className
      )}
      style={{ padding, ...style }}
      {...props}
    />
  );
}

export { Card };
