import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/**
 * Status/label pill — delivery promises, stock state, "Rollback",
 * "Best seller". Ported from components/core/Badge.jsx.
 */
const badgeVariants = cva(
  "inline-flex items-center gap-1 whitespace-nowrap font-sans font-bold leading-tight w-fit",
  {
    variants: {
      variant: {
        neutral: "bg-gray-100 text-gray-700",
        info: "bg-blue-50 text-true-blue",
        success: "bg-success-bg text-success",
        rollback:
          "bg-everyday-blue text-bentonville-blue uppercase tracking-wide",
        clearance: "bg-error text-white uppercase tracking-wide",
        brand: "bg-bentonville-blue text-white",
        outline: "bg-transparent text-gray-700 shadow-[inset_0_0_0_1px_var(--wm-gray-300)]",
      },
      size: {
        sm: "text-[11px] px-2 py-0.5 rounded-xs",
        md: "text-xs px-2.5 py-1 rounded-sm",
      },
    },
    defaultVariants: {
      variant: "neutral",
      size: "md",
    },
  }
);

function Badge({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
