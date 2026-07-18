import { ProductVariation } from "@/types/product";

export function getVariantStock(variant?: ProductVariation) {
  if (!variant) {
    return 0;
  }

  return variant.stockQuantity;
}
