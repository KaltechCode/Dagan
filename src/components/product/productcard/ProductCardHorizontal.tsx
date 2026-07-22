import { Card } from "@/components/ui/shared/Card";
import React from "react";
import ProductCardImage from "./ProductCardImage";
import ProductCardActions from "./ProductCardActions";
import { ProductCardProps } from "@/types/product";
import { cn } from "@/libs/utils";
import HorizontalCardBody from "./HorizontalCardBody";
import ProductActions from "./ProductAction";

function ProductCardHorizontal({
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
      className={cn(
        "group overflow-hidden bg-white grid gap-5 grid-rows-1 grid-cols-3 p-3 py-4 items-center rounded-[10px] border border-gray-200",
        className,
      )}
    >
      <div className="">
        <ProductCardImage product={product} priority={priority} />
      </div>

      <div className="col-span-2 mt-2">
        <HorizontalCardBody
          product={product}
          showBadge={showBadge}
          showRating={showRating}
          showCategory={true}
        />
        <ProductActions
          product={product}
          showQuantityControl={false}
          classname="flex-row! col-span-4 mt-3 justify-start gap-5"
        />
      </div>
    </Card>
  );
}

export default ProductCardHorizontal;
