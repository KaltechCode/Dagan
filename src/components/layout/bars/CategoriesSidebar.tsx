"use client";

import { useCategories } from "@/hooks/category/useCategory";
import { useHomepage } from "@/hooks/useHomePage";
import { useGetCategoriesQuery } from "@/redux/api/categoryApi";

export default function CategorySidebar() {
  const { isLoading, categories } = useCategories();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <aside>
      {categories?.map((category) => (
        <div key={category.id}>{category.name}</div>
      ))}
    </aside>
  );
}
