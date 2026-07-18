import { Product, ProductVariation } from "@/types/product";

export function getVariantPrice(product: Product, variant?: ProductVariation) {
  if (!variant) {
    return product.price;
  }

  return variant.price;
}
