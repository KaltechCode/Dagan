import {
  ProductAttribute,
  ProductVariation,
  SelectedOptions,
} from "@/types/product";

export interface ProductVariantSelectorProps {
  attributes: ProductAttribute[];

  selectedOptions: SelectedOptions;

  availableOptions: Record<string, string[]>;

  onSelect: (attributeSlug: string, option: string) => void;
}

export interface VariantState {
  selectedOptions: SelectedOptions;

  selectedVariant?: ProductVariation;

  availableOptions: Record<string, string[]>;
}
