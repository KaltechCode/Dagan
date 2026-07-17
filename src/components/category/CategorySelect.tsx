"use client";

import { Category } from "@/types/product";

interface CategorySelectProps {
  categories: Category[];
  value?: string;
  onChange: (slug: string) => void;
}

export default function CategorySelect({
  categories,
  value,
  onChange,
}: CategorySelectProps) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full rounded-lg border px-4 py-3"
    >
      <option value="">All Categories</option>

      {categories.map((category) => (
        <option key={category.id} value={category.slug}>
          {category.name}
        </option>
      ))}
    </select>
  );
}
