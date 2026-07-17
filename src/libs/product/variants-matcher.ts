import { SelectedOptions } from "../types/selected-option";
import { ProductVariation } from "../types/variation";

export function findVariant(
  variations: ProductVariation[],
  selected: SelectedOptions,
) {
  return variations.find((variation) =>
    variation.attributes.every(
      (attribute) => selected[attribute.slug] === attribute.option,
    ),
  );
}
