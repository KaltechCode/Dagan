"use client";

import { FilterOption } from "@/types/filter";

interface Props {
  options: FilterOption[];

  value?: string;

  onChange(value: string): void;
}

export default function RadioFilter({ options, value, onChange }: Props) {
  return (
    <div className="space-y-3">
      {options.map((option) => (
        <label key={option.value} className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <input
              type="radio"
              checked={value === option.value}
              onChange={() => onChange(option.value)}
            />

            <span>{option.label}</span>
          </div>

          {option.count !== undefined && (
            <span className="text-sm text-gray-500">{option.count}</span>
          )}
        </label>
      ))}
    </div>
  );
}
