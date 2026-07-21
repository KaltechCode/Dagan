"use client";

import { forwardRef } from "react";
import { Loader2 } from "lucide-react";
import { InputProps } from "./Input.types";

import InputLabel from "./InputLabel";
import InputError from "./InputError";
import InputHelperText from "./InputHelperText";
import { inputVariants } from "./Input.variant";
import { cn } from "@/libs/utils";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,

      helperText,

      error,

      leftIcon,

      rightIcon,

      loading,

      fullWidth,

      required,

      className,

      ...props
    },

    ref,
  ) => {
    return (
      <div className={cn(fullWidth && "w-full")}>
        <InputLabel label={label} required={required} />

        <div
          className={cn(
            inputVariants({
              error: !!error,
              fullWidth,
            }),
          )}
        >
          {leftIcon && <span className="ml-3">{leftIcon}</span>}

          <input
            ref={ref}
            className={cn(
              "flex-1 bg-transparent px-3 py-2 outline-none truncate placeholder:truncate overflow-hidden",
              className,
            )}
            {...props}
          />

          {loading && <Loader2 className="mr-3 h-4 w-4 animate-spin" />}

          {!loading && rightIcon && <span className="mr-3">{rightIcon}</span>}
        </div>

        <InputHelperText text={helperText} />

        <InputError error={error} />
      </div>
    );
  },
);

Input.displayName = "Input";
