import { ProductVariation } from "@/types/Variant";

export function findMatchingVariation(
  variations: ProductVariation[],
  selectedAttributes: Record<string, string>,
) {
  return variations.find((variation) =>
    variation.attributes.every(
      (attribute) => selectedAttributes[attribute.name] === attribute.option,
    ),
  );
}
