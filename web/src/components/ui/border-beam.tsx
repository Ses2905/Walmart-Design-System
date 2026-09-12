import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * A thin animated highlight that travels around an element's border —
 * Magic UI's BorderBeam pattern, reimplemented in pure CSS (no motion
 * library) via a rotating conic-gradient. Render it as the FIRST
 * child inside a `relative` wrapper, immediately before the card it
 * outlines — it sits behind and bleeds slightly past the card's
 * edges, so the card's own opaque background covers the rest of the
 * gradient and only a thin rim shows.
 */
function BorderBeam({
  className,
  size = 140,
  duration = 8,
  color = "var(--color-true-blue)",
  style,
  ...props
}: React.ComponentProps<"span"> & {
  size?: number;
  duration?: number;
  color?: string;
}) {
  return (
    <span
      aria-hidden="true"
      data-slot="border-beam"
      className={cn(
        "border-beam pointer-events-none absolute -inset-px rounded-[inherit]",
        className
      )}
      style={
        {
          "--border-beam-size": `${size}deg`,
          "--border-beam-color": color,
          animationDuration: `${duration}s`,
          ...style,
        } as React.CSSProperties
      }
      {...props}
    />
  );
}

export { BorderBeam };
