"use client";

import { HTMLAttributes } from "react";
import { cn } from "@/libs/utils";

interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {}

export function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-md bg-[var(--secondary)]",
        className,
      )}
      {...props}
    >
      <div
        className="
    absolute
    inset-0
    -translate-x-full
    bg-gradient-to-r
    from-transparent
    via-white/15
    dark:via-white/10
    to-transparent
    animate-[shimmer_1.5s_linear_infinite]
  "
      />
    </div>
  );
}
