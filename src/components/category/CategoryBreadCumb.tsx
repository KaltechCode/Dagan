"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Category } from "@/types/product";

interface CategoryBreadcrumbProps {
  items: Category[];
}

export default function CategoryBreadcrumb({ items }: CategoryBreadcrumbProps) {
  return (
    <nav className="flex flex-wrap items-center gap-2 text-sm">
      <Link href="/" className="hover:text-primary">
        Home
      </Link>

      {items.map((item) => (
        <div key={item.id} className="flex items-center gap-2">
          <ChevronRight size={14} />

          <Link
            href={`/shop?category=${item.slug}`}
            className="hover:text-primary"
          >
            {item.name}
          </Link>
        </div>
      ))}
    </nav>
  );
}
