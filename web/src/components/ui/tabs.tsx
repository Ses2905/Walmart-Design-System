"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "@/lib/utils";

/**
 * Underline tab bar — active tab is navy text with a True-Blue
 * underline. Ported from components/navigation/Tabs.jsx onto
 * Radix's Tabs primitive for keyboard/ARIA behavior.
 */
function Tabs({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return <TabsPrimitive.Root data-slot="tabs" className={cn("font-sans", className)} {...props} />;
}

function TabsList({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn("flex gap-7 border-b border-border-subtle", className)}
      {...props}
    />
  );
}

function TabsTrigger({
  className,
  count,
  children,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger> & { count?: number }) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        "relative -mb-px inline-flex items-center gap-2 border-b-[3px] border-transparent py-3.5 text-base font-medium text-ink-secondary outline-none transition-colors duration-fast",
        "data-[state=active]:border-true-blue data-[state=active]:font-bold data-[state=active]:text-bentonville-blue",
        "focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 rounded-t-xs",
        className
      )}
      {...props}
    >
      {children}
      {count != null && (
        <span className="wm-numeric rounded-pill bg-gray-100 px-2 py-px text-xs font-bold text-ink-tertiary group-data-[state=active]:bg-blue-50 group-data-[state=active]:text-true-blue">
          {count}
        </span>
      )}
    </TabsPrimitive.Trigger>
  );
}

function TabsContent({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("outline-none", className)}
      {...props}
    />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent };
