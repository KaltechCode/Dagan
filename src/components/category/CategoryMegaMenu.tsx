"use client";

import { CategoryTree } from "@/types/product";
import Link from "next/link";

interface CategoryMegaMenuProps {
  categories: CategoryTree[];
}

export default function CategoryMegaMenu({
  categories,
}: CategoryMegaMenuProps) {
  return (
    <div className="grid grid-cols-4 gap-8">
      {categories.map((category) => (
        <div key={category.id}>
          <Link
            href={`/shop?category=${category.slug}`}
            className="mb-3 block text-base font-semibold hover:text-primary"
          >
            {category.name}
          </Link>

          {!!category.children.length && (
            <ul className="space-y-2">
              {category.children.map((child) => (
                <li key={child.id}>
                  <Link
                    href={`/shop?category=${child.slug}`}
                    className="text-sm text-gray-600 transition-colors hover:text-primary"
                  >
                    {child.name}
                  </Link>

                  {!!child.children.length && (
                    <ul className="mt-2 ml-4 space-y-1">
                      {child.children.map((grandChild) => (
                        <li key={grandChild.id}>
                          <Link
                            href={`/shop?category=${grandChild.slug}`}
                            className="text-sm text-gray-500 hover:text-primary"
                          >
                            {grandChild.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}
