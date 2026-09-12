"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * Walmart text input — rounded, generous height, True-Blue focus
 * ring. Ported from components/core/Input.jsx: supports a leading
 * icon and label/hint/error rows, driven purely by CSS focus-within
 * rather than React state for the focus ring.
 */
function Input({
  className,
  containerClassName,
  label,
  hint,
  error,
  iconLeft,
  size = "md",
  id,
  ...props
}: Omit<React.ComponentProps<"input">, "size"> & {
  containerClassName?: string;
  label?: React.ReactNode;
  hint?: React.ReactNode;
  error?: React.ReactNode;
  iconLeft?: React.ReactNode;
  size?: "md" | "lg";
}) {
  const reactId = React.useId();
  const inputId = id || reactId;
  const sizeClass = size === "lg" ? "h-14 px-[18px] text-h5" : "h-12 px-4 text-base";

  return (
    <div className={cn("flex flex-col gap-1.5 font-sans", containerClassName)}>
      {label && (
        <label htmlFor={inputId} className="text-sm font-medium text-ink">
          {label}
        </label>
      )}
      <div
        className={cn(
          "flex items-center gap-2.5 rounded-md border-med bg-white transition-[border-color,box-shadow] duration-fast has-[input:focus]:shadow-focus",
          error
            ? "border-error"
            : "border-border has-[input:focus]:border-true-blue",
          sizeClass
        )}
      >
        {iconLeft && (
          <span className="flex shrink-0 items-center text-gray-500 [&_svg]:size-5">
            {iconLeft}
          </span>
        )}
        <input
          id={inputId}
          data-slot="input"
          className={cn(
            "min-w-0 flex-1 border-none bg-transparent font-sans text-ink outline-none placeholder:text-ink-tertiary",
            className
          )}
          {...props}
        />
      </div>
      {error ? (
        <span className="text-[13px] text-error">{error}</span>
      ) : hint ? (
        <span className="text-[13px] text-ink-tertiary">{hint}</span>
      ) : null}
    </div>
  );
}

export { Input };
