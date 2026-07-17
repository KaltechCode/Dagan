"use client";

import { useGetCategoryTreeQuery } from "@/redux/api/categoryApi";
import CategorySkeleton from "./CategorySkeleton";
import CategoryTree from "./CategoryTree";

interface CategorySidebarProps {
  currentSlug?: string;
}

export default function CategorySidebar({ currentSlug }: CategorySidebarProps) {
  const { data = [], isLoading, isError } = useGetCategoryTreeQuery();

  if (isLoading) {
    return <CategorySkeleton count={6} />;
  }

  if (isError) {
    return (
      <div className="rounded-lg border p-4">Failed to load categories.</div>
    );
  }

  return (
    <aside className="rounded-xl border bg-white p-5">
      <h2 className="mb-5 text-lg font-semibold">Categories</h2>

      <CategoryTree categories={data} currentSlug={currentSlug} />
    </aside>
  );
}
