import * as React from "react";

import { cn } from "@/lib/utils";

const sizes = {
  sm: { dollars: "text-h4", small: "text-[11px]", raise: "-translate-y-1" },
  md: { dollars: "text-price-md", small: "text-sm", raise: "-translate-y-1.5" },
  lg: { dollars: "text-price-lg", small: "text-body-lg", raise: "-translate-y-2.5" },
} as const;

/**
 * Walmart price display — big, tight, navy-black numerals with the
 * dollar sign and cents set smaller and raised. Ported from
 * components/commerce/Price.jsx.
 */
function Price({
  value,
  was,
  size = "md",
  savings,
  align = "left",
  className,
  ...props
}: React.ComponentProps<"div"> & {
  value: number;
  was?: number;
  size?: keyof typeof sizes;
  savings?: number;
  align?: "left" | "center";
}) {
  const s = sizes[size];
  const [dollars, cents] = Number(value).toFixed(2).split(".");
  const computedSavings = savings != null ? savings : was != null ? was - value : null;

  return (
    <div
      data-slot="price"
      className={cn(
        "flex flex-col gap-0.5 font-sans",
        align === "left" ? "items-start" : "items-center",
        className
      )}
      {...props}
    >
      <div className="flex items-start leading-none text-price">
        <span className={cn("font-bold", s.small, s.raise)}>$</span>
        <span className={cn("font-black tracking-tight", s.dollars)}>{dollars}</span>
        <span className={cn("font-bold", s.small, s.raise)}>{cents}</span>
      </div>
      {(was != null || computedSavings != null) && (
        <div className={cn("flex items-center gap-2", size === "lg" ? "text-[13px]" : "text-xs")}>
          {was != null && (
            <span className="text-ink-tertiary line-through">${Number(was).toFixed(2)}</span>
          )}
          {computedSavings != null && computedSavings > 0 && (
            <span className="font-bold text-savings">
              You save ${Number(computedSavings).toFixed(2)}
            </span>
          )}
        </div>
      )}
    </div>
  );
}

export { Price };
