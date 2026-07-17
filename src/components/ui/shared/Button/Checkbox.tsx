"use client";

import { forwardRef, InputHTMLAttributes } from "react";

import clsx from "clsx";

export interface CheckboxProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type"
> {
  label?: string;

  error?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ id, label, error, className, disabled, ...props }, ref) => {
    return (
      <div className="space-y-2">
        <label
          htmlFor={id}
          className={clsx(
            "flex cursor-pointer items-start gap-3",
            disabled && "cursor-not-allowed opacity-60",
          )}
        >
          <input
            ref={ref}
            id={id}
            type="checkbox"
            disabled={disabled}
            className={clsx(
              "mt-1 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary",
              className,
            )}
            {...props}
          />

          {label && <span className="text-sm text-gray-700">{label}</span>}
        </label>

        {error && <p className="text-sm text-red-600">{error}</p>}
      </div>
    );
  },
);

Checkbox.displayName = "Checkbox";
