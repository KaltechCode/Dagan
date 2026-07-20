"use client";

import { Category } from "@/types/product";
import Image from "next/image";
import Link from "next/link";

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      href={`/shop?category=${category.slug}`}
      className="group block overflow-hidden rounded-xl border border-gray-200 bg-white transition-shadow hover:shadow-lg"
    >
      <div className="relative aspect-square overflow-hidden bg-gray-100 ">
        {category.image ? (
          <Image
            src={category.image || ""}
            alt={category.image || category.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105 aspect-square"
            sizes="(max-width:768px) 50vw, (max-width:1024px) 33vw, 25vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-gray-400">
            No Image
          </div>
        )}

        <h3 className="line-clamp-2 text-base font-semibold absolute top-5 w-full text-center">
          {category.name}
        </h3>
      </div>
    </Link>
  );
}
