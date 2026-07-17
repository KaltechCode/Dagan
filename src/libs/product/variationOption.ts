import { SelectedOptions } from "../types/selected-option";
import { ProductVariation } from "../types/variation";

export function getAvailableOptions(
  variations: ProductVariation[],
  selectedOptions: SelectedOptions,
): Record<string, string[]> {
  const result: Record<string, Set<string>> = {};

  for (const variation of variations) {
    const matches = variation.attributes.every((attribute) => {
      const selected = selectedOptions[attribute.slug];

      if (!selected) {
        return true;
      }

      return selected === attribute.option;
    });

    if (!matches) {
      continue;
    }

    for (const attribute of variation.attributes) {
      if (!result[attribute.slug]) {
        result[attribute.slug] = new Set();
      }

      result[attribute.slug].add(attribute.option);
    }
  }

  return Object.fromEntries(
    Object.entries(result).map(([slug, values]) => [slug, [...values]]),
  );
}
