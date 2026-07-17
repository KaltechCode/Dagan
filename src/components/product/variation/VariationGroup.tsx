"use client";

import VariationOption from "./VariationOption";

interface VariationGroupProps {
  name: string;

  options: string[];

  value?: string;

  onChange(value: string): void;
}

export default function VariationGroup({
  name,
  options,
  value,
  onChange,
}: VariationGroupProps) {
  return (
    <div className="space-y-3">
      <h3 className="font-medium">{name}</h3>

      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <VariationOption
            key={option}
            label={option}
            selected={value === option}
            onClick={() => onChange(option)}
          />
        ))}
      </div>
    </div>
  );
}
