"use client";

import { Select } from "@/components/ui/shared/Button/Select";

interface SortOption {
  label: string;
  value: string;
}

interface SortSelectProps {
  value: string;
  options: SortOption[];
  onChange(value: string): void;
}

export default function SortSelect({
  value,
  options,
  onChange,
}: SortSelectProps) {
  return <Select value={value} options={options} />;
}
