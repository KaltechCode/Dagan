import { Product, ProductVariation } from "@/types/product";

export function getVariantImage(product: Product, variant?: ProductVariation) {
  if (variant?.image) {
    return variant.image;
  }

  if (product.images) return product.images[0]?.src ?? [];
}
