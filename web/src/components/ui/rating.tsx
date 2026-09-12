import * as React from "react";

import { cn } from "@/lib/utils";

function Star({ fill, size }: { fill: string; size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" className="block" aria-hidden="true">
      <path
        d="M10 1.6l2.47 5.01 5.53.8-4 3.9.94 5.5L10 14.22 5.06 16.81 6 11.31l-4-3.9 5.53-.8z"
        fill={fill}
      />
    </svg>
  );
}

/**
 * Star rating with Walmart's Everyday-Blue stars. Ported from
 * components/commerce/Rating.jsx.
 */
function Rating({
  value = 0,
  count,
  size = 16,
  showValue = false,
  className,
  ...props
}: React.ComponentProps<"div"> & {
  value?: number;
  count?: number;
  size?: number;
  showValue?: boolean;
}) {
  const full = Math.round(value * 2) / 2;
  return (
    <div
      data-slot="rating"
      className={cn("inline-flex items-center gap-1.5 font-sans", className)}
      {...props}
    >
      <div className="inline-flex gap-px" aria-label={`${value} out of 5 stars`}>
        {[0, 1, 2, 3, 4].map((i) => {
          const pct = Math.max(0, Math.min(1, full - i));
          return (
            <span key={i} className="relative" style={{ width: size, height: size }}>
              <Star fill="var(--wm-gray-300)" size={size} />
              {pct > 0 && (
                <span
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: `${pct * 100}%` }}
                >
                  <Star fill="var(--wm-everyday-blue)" size={size} />
                </span>
              )}
            </span>
          );
        })}
      </div>
      {showValue && (
        <span className="font-medium text-ink" style={{ fontSize: size * 0.82 }}>
          {Number(value).toFixed(1)}
        </span>
      )}
      {count != null && (
        <span className="text-link" style={{ fontSize: size * 0.82 }}>
          ({count.toLocaleString()})
        </span>
      )}
    </div>
  );
}

export { Rating };
