"use client";

import { Input } from "@/components/ui/shared/Input/Input";

interface SearchBoxProps {
  value: string;
  placeholder?: string;
  onSearch(value: string): void;
}

export default function SearchBox({
  value,
  placeholder = "Search products...",
  onSearch,
}: SearchBoxProps) {
  return (
    <Input
      value={value}
      placeholder={placeholder}
      onChange={(event) => onSearch(event.target.value)}
    />
  );
}
