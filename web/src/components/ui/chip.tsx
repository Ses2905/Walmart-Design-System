"use client";

import * as React from "react";
import { XIcon } from "lucide-react";

import { Icon } from "@/components/ui/icon";
import type { ICONS } from "@/lib/icon-data";
import { cn } from "@/lib/utils";

/**
 * Filter / selection chip — facets, applied filters, quick category
 * pills. Ported from components/core/Chip.jsx.
 */
function Chip({
  className,
  children,
  selected = false,
  icon,
  onRemove,
  disabled,
  ...props
}: React.ComponentProps<"button"> & {
  selected?: boolean;
  icon?: keyof typeof ICONS;
  onRemove?: () => void;
}) {
  return (
    <button
      type="button"
      data-slot="chip"
      disabled={disabled}
      className={cn(
        "inline-flex h-[38px] items-center gap-1.5 whitespace-nowrap rounded-pill border-[1.5px] px-4 font-sans text-sm font-medium transition-colors duration-fast disabled:cursor-not-allowed disabled:opacity-50",
        selected
          ? "border-bentonville-blue bg-bentonville-blue text-white"
          : "border-border bg-white text-ink hover:bg-gray-100",
        className
      )}
      {...props}
    >
      {icon && <Icon name={icon} size={16} />}
      {children}
      {onRemove && (
        <span
          role="button"
          aria-label="Remove"
          onClick={(e) => {
            e.stopPropagation();
            onRemove();
          }}
          className="-mr-1 inline-flex"
        >
          <XIcon className="size-3.5" />
        </span>
      )}
    </button>
  );
}

export { Chip };
