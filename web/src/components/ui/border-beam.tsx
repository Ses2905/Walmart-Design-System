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
 *
 * Needs an explicit negative z-index, not just DOM order: a
 * `position: static` sibling (the card, when it doesn't set its own
 * `relative`) still paints BELOW any positioned element regardless of
 * source order, so without this the beam bleeds across the card's
 * face instead of staying behind it.
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
        "border-beam pointer-events-none absolute -inset-px -z-10 rounded-[inherit]",
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
