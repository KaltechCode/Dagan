"use client";

import { FilterOption } from "@/types/filter";

interface Props {
  options: FilterOption[];

  selected: string[];

  onChange(values: string[]): void;
}

export default function CheckboxFilter({ options, selected, onChange }: Props) {
  function toggle(value: string) {
    if (selected.includes(value)) {
      onChange(selected.filter((item) => item !== value));

      return;
    }

    onChange([...selected, value]);
  }

  return (
    <div className="space-y-3 mt-5">
      {options.map((option) => (
        <label key={option.value} className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={selected.includes(option.value)}
              onChange={() => toggle(option.value)}
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
