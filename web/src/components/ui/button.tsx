import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/**
 * Walmart button. Pill-shaped by default. `primary` = True Blue fill,
 * the workhorse CTA across the experience. Ported 1:1 from the design
 * system's own variant/size API (components/core/Button.jsx).
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-pill border-med border-transparent font-sans font-bold tracking-snug transition-colors duration-fast ease-standard disabled:cursor-not-allowed disabled:opacity-45 outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-action-primary text-on-primary hover:bg-action-primary-hover",
        secondary:
          "bg-white text-bentonville-blue border-gray-900 hover:bg-gray-50",
        spark: "bg-everyday-blue text-bentonville-blue hover:bg-sky-blue",
        ghost: "bg-transparent text-true-blue hover:bg-blue-50",
        ondark: "bg-white text-bentonville-blue hover:bg-gray-100",
      },
      size: {
        sm: "h-9 px-4 text-sm gap-1.5 [&_svg]:size-4",
        md: "h-12 px-6 text-md gap-2 [&_svg]:size-5",
        lg: "h-14 px-8 text-h5 gap-2 [&_svg]:size-[22px]",
      },
      block: {
        true: "flex w-full",
        false: "",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      block: false,
    },
  }
);

function Button({
  className,
  variant,
  size,
  block,
  asChild = false,
  iconLeft,
  iconRight,
  children,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    iconLeft?: React.ReactNode;
    iconRight?: React.ReactNode;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, block, className }))}
      {...props}
    >
      {iconLeft}
      {children}
      {iconRight}
    </Comp>
  );
}

export { Button, buttonVariants };
