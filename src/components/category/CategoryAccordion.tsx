"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { CategoryTree } from "@/types/product";

interface CategoryAccordionProps {
  categories: CategoryTree[];
}

export default function CategoryAccordion({
  categories,
}: CategoryAccordionProps) {
  return (
    <div className="divide-y">
      {categories.map((category) => (
        <AccordionItem key={category.id} category={category} />
      ))}
    </div>
  );
}

interface AccordionItemProps {
  category: CategoryTree;
}

function AccordionItem({ category }: AccordionItemProps) {
  const [open, setOpen] = useState(false);

  const hasChildren = category.children.length > 0;

  return (
    <div>
      <div className="flex items-center justify-between py-3">
        <Link href={`/shop?category=${category.slug}`} className="font-medium">
          {category.name}
        </Link>

        {hasChildren && (
          <button type="button" onClick={() => setOpen(!open)}>
            <ChevronDown
              className={`transition-transform ${open ? "rotate-180" : ""}`}
              size={18}
            />
          </button>
        )}
      </div>

      {hasChildren && open && (
        <div className="ml-4 space-y-3 pb-3">
          {category.children.map((child) => (
            <AccordionItem key={child.id} category={child} />
          ))}
        </div>
      )}
    </div>
  );
}
