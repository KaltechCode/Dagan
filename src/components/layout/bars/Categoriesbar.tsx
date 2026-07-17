"use client";

import { useCategories } from "@/hooks/category/useCategory";

export default function Categorybar() {
  const { isLoading, categories } = useCategories();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <ul className=" hidden lg:flex items-center gap-3 w-[100%]">
      {categories?.map((category) => (
        <li className="bold-text cursor-pointer" key={category.id}>
          {category.name}
        </li>
      ))}
    </ul>
  );
}
