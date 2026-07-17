"use client";

import { CategoryTree as CategoryTreeType } from "@/types/product";
import CategoryTreeItem from "./CategoryTreeItems";

interface CategoryTreeProps {
  categories: CategoryTreeType[];
  currentSlug?: string;
}

export default function CategoryTree({
  categories,
  currentSlug,
}: CategoryTreeProps) {
  if (!categories.length) {
    return null;
  }

  return (
    <ul className="space-y-1">
      {categories.map((category) => (
        <CategoryTreeItem
          key={category.id}
          category={category}
          currentSlug={currentSlug}
        />
      ))}
    </ul>
  );
}
