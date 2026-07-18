"use client";

import { cn } from "@/libs/utils";
import { Badge } from "../ui/shared/Badge";
import { ProductBadgeProps } from "@/types/product";

export default function ProductBadge({
  featured,
  onSale,
  stockStatus,
  stockQuantity,
  className,
}: ProductBadgeProps) {
  if (stockStatus === "outofstock" || stockQuantity === 0) {
    return (
      <Badge variant="danger" className={className}>
        Out of Stock
      </Badge>
    );
  }

  if (onSale) {
    return (
      <Badge variant="success" className={className}>
        Sale
      </Badge>
    );
  }

  if (featured) {
    return (
      <Badge variant="primary" className={className}>
        Featured
      </Badge>
    );
  }

  return null;
}
