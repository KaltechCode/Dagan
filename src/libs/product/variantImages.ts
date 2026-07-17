import { Product } from "../types/product";
import { ProductVariation } from "../types/variation";

export function getVariantImage(product: Product, variant?: ProductVariation) {
  if (variant?.image) {
    return variant.image;
  }

  return product.images[0]?.src;
}
