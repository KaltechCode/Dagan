"use client";

import { Menu } from "lucide-react";

import CategoriesDropdown from "./CategoryDropdown";
import Navigation from "./Header.Navigation";
import ContactBtn from "./Hotline";

const navigation = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About Us",
    href: "/about-us",
  },
  {
    label: "Shop",
    href: "/shop",
  },
  {
    label: "All Categories",
    href: "/categories",
  },

  {
    label: "Fashion",
    href: "/sales",
  },

  {
    label: "Sales",
    href: "/sales",
  },

  // {
  //   label: "Deals",
  //   href: "/deals",
  // },
  {
    label: "New Arrivals",
    href: "/new-arrivals",
  },

  {
    label: "Whole Sale",
    href: "/whole-sales",
  },
];

export default function Navbar() {
  return (
    <nav
      aria-label="Primary Navigation"
      className="relative py-3 w-[95%] 3k:w-[90%] mx-auto"
    >
      <div className="mx-auto flex h-14 items-center justify-between">
        {/* Desktop */}

        <div className="hidden lg:flex lg:flex-1 lg:gap-5 xl:gap-10">
          <Navigation items={navigation} />
        </div>

        {/* Hotline */}

        <ContactBtn />
      </div>
    </nav>
  );
}
