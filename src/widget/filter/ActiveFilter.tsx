"use client";

import FilterChip from "./FilterChip";

interface Props {
  filters: {
    key: string;
    label: string;
  }[];

  onRemove(key: string): void;

  onClear(): void;
}

export default function ActiveFilters({ filters, onRemove, onClear }: Props) {
  if (!filters.length) {
    return null;
  }

  return (
    <div className="mb-6 flex flex-wrap gap-3">
      {filters.map((filter) => (
        <FilterChip
          key={filter.key}
          label={filter.label}
          onRemove={() => onRemove(filter.key)}
        />
      ))}

      <FilterChip label="Clear All" onRemove={onClear} />
    </div>
  );
}
