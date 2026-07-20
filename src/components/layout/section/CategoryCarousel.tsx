"use client";

import CategoryCard from "@/components/category/CategoryCard";
import { Category } from "@/types/product";

interface Props {
  categories: Category[];
}

export default function CategoryCarousel({ categories }: Props) {
  const parentCategories = categories.filter((item) => item.parentId == 0);

  return (
    <div className="grid gap-6 grid-cols-2 xmd:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-6">
      {parentCategories &&
        parentCategories.map((category) => {
          return <CategoryCard key={category.id} category={category} />;
        })}
    </div>
  );
}
