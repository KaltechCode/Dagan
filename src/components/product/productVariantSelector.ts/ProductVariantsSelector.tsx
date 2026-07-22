"use client";

import AttributeGroup from "./AttributeGroup";
import { ProductVariantSelectorProps } from "./types";

export default function ProductVariantSelector({
  attributes,
  selectedOptions,
  availableOptions,
  onSelect,
}: ProductVariantSelectorProps) {
  return (
    <div className="space-y-6">
      {attributes.map((attribute) => (
        <AttributeGroup
          key={attribute.id}
          name={attribute.name}
          slug={attribute.slug}
          options={attribute.options}
          selectedValue={selectedOptions[attribute.slug]}
          availableOptions={availableOptions.options ?? []}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}
