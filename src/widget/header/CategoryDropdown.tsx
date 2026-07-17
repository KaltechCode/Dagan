"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useCategories } from "@/hooks/category/useCategory";

interface Category {
  id: number;
  name: string;
  slug: string;
}

export default function CategoriesDropdown() {
  const { categories } = useCategories();
  const [open, setOpen] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        onClick={() => setOpen((value) => !value)}
        className="flex h-14 min-w-[230px] items-center justify-between bg-[#00552F] px-6 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-[#006b3b]"
      >
        All Categories
        <ChevronDown
          className={`h-5 w-5 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`absolute left-0 top-full z-50 mt-1 w-72 overflow-hidden rounded-md border border-gray-200 bg-white shadow-xl transition-all duration-300 ${
          open
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-2 opacity-0"
        }`}
      >
        <ul className="max-h-[450px] overflow-y-auto py-2">
          {categories.map((category) => (
            <li key={category.id}>
              <Link
                href={`/category/${category.slug}`}
                className="flex items-center justify-between px-5 py-3 text-sm text-gray-700 transition hover:bg-[#F3F8F5] hover:text-[#00552F]"
              >
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
