"use client";

import { Category } from "@/types/product";
import CategoryCard from "./CategoryCard";
import CategorySkeleton from "./CategorySkeleton";

interface CategoryGridProps {
  categories?: Category[];
  loading?: boolean;
}

export default function CategoryGrid({
  categories = [],
  loading = false,
}: CategoryGridProps) {
  if (loading) {
    return <CategorySkeleton />;
  }

  if (!categories.length) {
    return (
      <div className="rounded-xl border border-dashed p-12 text-center text-gray-500">
        No categories found.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
      {categories.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </div>
  );
}
