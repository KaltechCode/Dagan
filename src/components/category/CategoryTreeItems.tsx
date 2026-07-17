"use client";

import Link from "next/link";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";
import { CategoryTree } from "@/types/product";

interface CategoryTreeItemProps {
  category: CategoryTree;
  currentSlug?: string;
  level?: number;
}

export default function CategoryTreeItem({
  category,
  currentSlug,
  level = 0,
}: CategoryTreeItemProps) {
  const hasChildren = category.children.length > 0;

  const [open, setOpen] = useState(level === 0);

  return (
    <li>
      <div
        className="flex items-center justify-between py-2"
        style={{
          paddingLeft: `${level * 16}px`,
        }}
      >
        <Link
          href={`/shop?category=${category.slug}`}
          className={`flex-1 transition-colors ${
            currentSlug === category.slug
              ? "font-semibold text-primary"
              : "hover:text-primary"
          }`}
        >
          {category.name}

          <span className="ml-2 text-xs text-gray-500">({category.count})</span>
        </Link>

        {hasChildren && (
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="rounded p-1 hover:bg-gray-100"
          >
            {open ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </button>
        )}
      </div>

      {hasChildren && open && (
        <ul>
          {category.children.map((child) => (
            <CategoryTreeItem
              key={child.id}
              category={child}
              currentSlug={currentSlug}
              level={level + 1}
            />
          ))}
        </ul>
      )}
    </li>
  );
}
