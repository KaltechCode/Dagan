"use client";

import { cn } from "@/libs/utils";
import { HTMLAttributes, forwardRef } from "react";
interface CardProps extends HTMLAttributes<HTMLDivElement> {}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("rounded-xl transition-all duration-200", className)}
      {...props}
    />
  ),
);

Card.displayName = "Card";

const CardHeader = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("p-5", className)} {...props} />
);

const CardContent = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("p-5", className)} {...props} />
);

const CardFooter = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn(" p-5", className)} {...props} />
);

export { Card, CardHeader, CardContent, CardFooter };
