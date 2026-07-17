import { Category } from "@/types/product";
import Link from "next/link";

interface Props {
  categories: Category[];
}

export default function ProductCategories({ categories }: Props) {
  return (
    <div>
      <span className="font-medium">Categories:</span>

      <div className="mt-2 flex flex-wrap gap-2">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/shop?category=${category.id}`}
            className="rounded-full border px-3 py-1 text-sm hover:bg-gray-100"
          >
            {category.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
