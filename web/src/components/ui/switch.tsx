"use client";

import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";

import { cn } from "@/lib/utils";

/**
 * Walmart toggle switch — True-Blue track when on.
 * Ported from components/core/Switch.jsx onto Radix's primitive.
 * `onChange` receives the boolean (Radix's onCheckedChange).
 */
function Switch({
  className,
  label,
  onChange,
  id,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root> & {
  label?: React.ReactNode;
  onChange?: (checked: boolean) => void;
}) {
  const reactId = React.useId();
  const swId = id || reactId;

  const control = (
    <SwitchPrimitive.Root
      data-slot="switch"
      id={swId}
      onCheckedChange={onChange}
      className={cn(
        "peer inline-flex h-7 w-12 shrink-0 items-center rounded-pill bg-gray-300 transition-colors duration-base ease-standard outline-none disabled:cursor-not-allowed disabled:opacity-50",
        "data-[state=checked]:bg-true-blue",
        "focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb className="pointer-events-none block size-[22px] translate-x-[3px] rounded-pill bg-white shadow-sm transition-transform duration-base ease-standard data-[state=checked]:translate-x-[23px]" />
    </SwitchPrimitive.Root>
  );

  if (!label) return control;

  return (
    <label
      htmlFor={swId}
      className={cn(
        "inline-flex items-center gap-3 font-sans text-body text-ink cursor-pointer",
        props.disabled && "cursor-not-allowed opacity-50"
      )}
    >
      {control}
      {label}
    </label>
  );
}

export { Switch };
