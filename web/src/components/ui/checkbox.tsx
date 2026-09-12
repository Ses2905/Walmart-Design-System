"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon } from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * Walmart checkbox — rounded square, True-Blue when checked.
 * Ported from components/core/Checkbox.jsx onto Radix's primitive.
 * `onChange` here receives the boolean (Radix's onCheckedChange),
 * not a DOM event — the one deliberate API change from the source.
 */
function Checkbox({
  className,
  label,
  onChange,
  id,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root> & {
  label?: React.ReactNode;
  onChange?: (checked: boolean) => void;
}) {
  const reactId = React.useId();
  const cbId = id || reactId;

  const control = (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      id={cbId}
      onCheckedChange={(checked) => onChange?.(checked === true)}
      className={cn(
        "size-[22px] shrink-0 rounded-[6px] border-[1.5px] border-border bg-white transition-colors duration-fast outline-none disabled:cursor-not-allowed disabled:opacity-50",
        "data-[state=checked]:bg-true-blue data-[state=checked]:border-true-blue data-[state=checked]:text-white",
        "focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator className="flex items-center justify-center text-current">
        <CheckIcon className="size-3.5" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );

  if (!label) return control;

  return (
    <label
      htmlFor={cbId}
      className={cn(
        "inline-flex items-center gap-2.5 font-sans text-body text-ink cursor-pointer",
        props.disabled && "cursor-not-allowed opacity-50"
      )}
    >
      {control}
      {label}
    </label>
  );
}

export { Checkbox };
