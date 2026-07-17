"use client";

import { ReactNode, useEffect, useState } from "react";

import { X, Menu, ChevronDown, ChevronRight } from "lucide-react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { useCategories } from "@/hooks/category/useCategory";

const navigation = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Shop",
    href: "/shop",
  },
  {
    label: "Deals",
    href: "/deals",
  },
  {
    label: "Sales",
    href: "/sales",
  },
  {
    label: "Newsletter",
    href: "/newsletter",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

interface Props {
  trigger?: ReactNode;
}

export default function MobileMenu({ trigger }: Props) {
  const pathname = usePathname();

  const { categories } = useCategories();

  const [open, setOpen] = useState(false);

  const [categoryOpen, setCategoryOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
      }
    }

    window.addEventListener("keydown", handleEscape);

    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <>
      <div onClick={() => setOpen(true)}>
        {trigger ?? (
          <button className="rounded-md p-2 hover:bg-gray-100">
            <Menu size={24} />
          </button>
        )}
      </div>

      {/* Overlay */}

      <div
        onClick={() => setOpen(false)}
        className={clsx(
          "fixed inset-0 z-40 bg-black/50 transition-opacity duration-300",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      />

      {/* Drawer */}

      <aside
        className={clsx(
          "fixed left-0 top-0 z-50 flex h-full w-[320px] max-w-[90vw] flex-col bg-white shadow-2xl transition-transform duration-300",
          open ? "translate-x-0" : "-translate-x-full",
        )}
      >
        {/* Header */}

        <div className="flex items-center justify-between border-b border-gray-200 px-5 py-4">
          <h2 className="font-semibold">Menu</h2>

          <button onClick={() => setOpen(false)}>
            <X />
          </button>
        </div>

        {/* Scroll */}

        <div className="flex-1 overflow-y-auto">
          {/* Categories */}

          <button
            onClick={() => setCategoryOpen(!categoryOpen)}
            className="flex w-full items-center justify-between border-b border-gray-200  px-5 py-4 font-medium"
          >
            All Categories
            {categoryOpen ? <ChevronDown /> : <ChevronRight />}
          </button>

          {categoryOpen && (
            <ul className="bg-bg-other">
              {categories.map((category) => (
                <li key={category.id}>
                  <Link
                    href={`/shop?category=${category.slug}`}
                    onClick={() => setOpen(false)}
                    className="block px-10 py-3 text-sm hover:bg-green-50 hover:text-[#00552F]"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}

          {/* Navigation */}

          <nav>
            <ul>
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={clsx(
                      "block border-b border-gray-200  px-5 py-4 transition-colors",
                      pathname === item.href
                        ? "bg-bg-pry font-semibold text-white"
                        : "hover:bg-gray-50",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Footer */}

        <div className="border-t p-5">
          <p className="text-xs uppercase text-gray-500">Hotline</p>

          <a
            href="tel:+19312172876"
            className="mt-1 block font-semibold text-[#00552F]"
          >
            +1 (931) 217-2876
          </a>
        </div>
      </aside>
    </>
  );
}
