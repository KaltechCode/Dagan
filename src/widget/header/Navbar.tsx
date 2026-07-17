"use client";

import { Menu } from "lucide-react";

import CategoriesDropdown from "./CategoryDropdown";
import Navigation from "./Header.Navigation";
import MobileMenu from "@/components/layout/Header/MobileMenu";
import Hotline from "./Hotline";
import HeaderSearch from "./Header.Search";

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
    label: "Contact Us",
    href: "/contact",
  },
];

export default function Navbar() {
  return (
    <nav aria-label="Primary Navigation" className="relative py-3">
      <div className="mx-auto flex h-14 items-center justify-between lg:px-8">
        {/* Mobile */}

        <div className="flex w-full items-center justify-between lg:hidden">
          <MobileMenu
            trigger={
              <button
                aria-label="Open Menu"
                className="rounded-md transition hover:bg-gray-100"
              >
                <Menu className="h-6 w-6" />
              </button>
            }
          />
        </div>

        {/* Desktop */}

        <div className="hidden lg:flex lg:flex-1 lg:gap-5 xl:gap-10">
          <CategoriesDropdown />

          <Navigation items={navigation} />
        </div>

        {/* Hotline */}

        <Hotline />
      </div>
    </nav>
  );
}
