"use client";

import { Input } from "@/components/ui/shared/Input/Input";

interface SearchBoxProps {
  value: string;
  placeholder?: string;
  onSearch(value: string): void;
}

export default function SearchBox({
  value,
  placeholder = "Search",
  onSearch,
}: SearchBoxProps) {
  return (
    <input
      value={value}
      placeholder={placeholder}
      onChange={(event) => onSearch(event.target.value)}
      className="w-full border-1 border-gray-200 h-8 px-2 text-center outline-none rounded-md focus:outline-none"
    />
  );
}
