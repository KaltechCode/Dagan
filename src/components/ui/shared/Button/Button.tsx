"use client";

import { forwardRef } from "react";

import { Loader2 } from "lucide-react";

import { ButtonProps } from "./Button.types";
import { buttonVariants } from "./Button.variant";
import { cn } from "@/libs/utils";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,

      className,

      variant,

      size,

      loading,

      fullWidth,

      leftIcon,

      rightIcon,

      disabled,

      ...props
    },

    ref,
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={cn(
          buttonVariants({
            variant,
            size,
            fullWidth,
          }),
          className,
        )}
        {...props}
      >
        {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}

        {!loading && leftIcon}

        <span>{children}</span>

        {!loading && rightIcon}
      </button>
    );
  },
);

Button.displayName = "Button";
