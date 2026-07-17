// "use client";

// import CategorySkeleton from "./CategorySkeleton";
// import CategoryTree from "./CategoryTree";
// import { useCategories } from "@/hooks/category/useCategory";

// interface CategorySidebarProps {
//   currentSlug?: string;
// }

// export default function CategorySidebar({ currentSlug }: CategorySidebarProps) {
//   const { categories, isLoading, error } = useCategories();

//   if (isLoading) {
//     return <CategorySkeleton count={6} />;
//   }

//   if (error) {
//     return (
//       <div className="rounded-lg border p-4">Failed to load categories.</div>
//     );
//   }

//   return (
//     <aside className="rounded-xl border bg-white p-5">
//       <h2 className="mb-5 text-lg font-semibold">Categories</h2>

//       <CategoryTree categories={categories} currentSlug={currentSlug} />
//     </aside>
//   );
// }
