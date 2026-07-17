"use client";

import { HTMLAttributes } from "react";

import { cva } from "class-variance-authority";

import { cn } from "@/libs/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium",
  {
    variants: {
      variant: {
        primary: "bg-[var(--primary)] text-white",

        secondary: "bg-[var(--secondary)] text-[var(--text)]",

        success: "bg-green-600 text-white",

        danger: "bg-red-600 text-white",

        warning: "bg-yellow-500 text-black",

        outline: "border border-[var(--border)]",
      },
    },

    defaultVariants: {
      variant: "primary",
    },
  },
);

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "outline";
}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        badgeVariants({
          variant,
        }),
        className,
      )}
      {...props}
    />
  );
}
