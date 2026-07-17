"use client";

import { cn } from "@/libs/utils";

import ProductCardActions from "./ProductCardActions";
import ProductCardBody from "./ProductCardBody";
import ProductCardImage from "./ProductCardImage";
import { Card } from "@/components/ui/shared/Card";
import { ProductCardProps } from "@/types/product";

export default function ProductCard({
  product,
  priority = false,
  showWishlist = true,
  showRating = true,
  showBadge = false,
  showQuickView = false,
  className,
}: ProductCardProps) {
  return (
    <Card
      className={cn("group overflow-hidden bg-white rounded-none", className)}
    >
      <ProductCardImage product={product} priority={priority} />

      <ProductCardBody
        product={product}
        showBadge={showBadge}
        showRating={showRating}
        showCategory={true}
      />
      <ProductCardActions
        product={product}
        showWishlist={showWishlist}
        // showQuickView={showQuickView}
      />
    </Card>
  );
}
