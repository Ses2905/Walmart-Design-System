"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * Data table — campaign, ad group, and keyword lists. Numeric columns
 * take the `numeric` prop, which right-aligns and applies `.wm-numeric`
 * (Everyday Sans Mono, tabular figures) to match the rest of the
 * system's numeral treatment. Ported from components/core/Table.jsx.
 */
function Table({ className, ...props }: React.ComponentProps<"table">) {
  return (
    <div className="w-full overflow-x-auto rounded-md border-med border-border">
      <table
        data-slot="table"
        className={cn("w-full caption-bottom font-sans text-sm", className)}
        {...props}
      />
    </div>
  );
}

function TableHeader({ className, ...props }: React.ComponentProps<"thead">) {
  return <thead data-slot="table-header" className={cn("bg-gray-50", className)} {...props} />;
}

function TableBody({ className, ...props }: React.ComponentProps<"tbody">) {
  return <tbody data-slot="table-body" className={className} {...props} />;
}

function TableRow({ className, ...props }: React.ComponentProps<"tr">) {
  return (
    <tr
      data-slot="table-row"
      className={cn(
        "border-b border-border transition-colors duration-fast last:border-0 hover:bg-gray-50",
        className
      )}
      {...props}
    />
  );
}

function TableHead({
  className,
  numeric = false,
  ...props
}: React.ComponentProps<"th"> & { numeric?: boolean }) {
  return (
    <th
      data-slot="table-head"
      className={cn(
        "whitespace-nowrap px-4 py-3 text-xs font-bold uppercase tracking-wide text-ink-tertiary",
        numeric ? "text-right" : "text-left",
        className
      )}
      {...props}
    />
  );
}

function TableCell({
  className,
  numeric = false,
  ...props
}: React.ComponentProps<"td"> & { numeric?: boolean }) {
  return (
    <td
      data-slot="table-cell"
      className={cn(
        "whitespace-nowrap px-4 py-3.5 text-ink",
        numeric ? "wm-numeric text-right" : "text-left",
        className
      )}
      {...props}
    />
  );
}

export { Table, TableHeader, TableBody, TableRow, TableHead, TableCell };
