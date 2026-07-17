import { ProductVariation } from "@/types/product";

export function getPriceRange(variations: ProductVariation[]) {
  if (!variations.length) {
    return null;
  }

  const prices = variations
    .map((v) => Number(v.price))
    .filter((price) => !Number.isNaN(price));

  const min = Math.min(...prices);
  const max = Math.max(...prices);

  return {
    min,
    max,
  };
}
