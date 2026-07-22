"use client";

import { HTMLAttributes } from "react";

import { cn } from "@/libs/utils";

interface ProductTitlePropsTwo extends HTMLAttributes<HTMLHeadingElement> {
  lines?: 1 | 2 | 3;
}

export function ProductTitleTwo({
  children,
  lines = 1,
  className,
  ...props
}: ProductTitlePropsTwo) {
  return (
    <h3
      className={cn(
        "product-title",
        lines === 1 && "line-clamp-1",
        lines === 2 && "line-clamp-2",
        lines === 3 && "line-clamp-3",
        className,
      )}
      {...props}
    >
      {children}
    </h3>
  );
}

interface ProductTitleProps {
  title: string;
}

export default function ProductTitle({ title }: ProductTitleProps) {
  return (
    <h1 className="product-title font-bold leading-tight lg:text-4xl">
      {title}
    </h1>
  );
}
