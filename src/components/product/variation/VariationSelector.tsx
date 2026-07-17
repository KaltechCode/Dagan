"use client";

import { ProductAttribute } from "@/types/product";
import VariationGroup from "./VariationGroup";

interface VariationSelectorProps {
  attributes: ProductAttribute[];

  selected: Record<string, string>;

  onChange(name: string, value: string): void;
}

export default function VariationSelector({
  attributes,
  selected,
  onChange,
}: VariationSelectorProps) {
  return (
    <div className="space-y-6">
      {attributes.map((attribute) => (
        <VariationGroup
          key={attribute.id}
          name={attribute.name}
          options={attribute.options}
          value={selected[attribute.name]}
          onChange={(value) => onChange(attribute.name, value)}
        />
      ))}
    </div>
  );
}
