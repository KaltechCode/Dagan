"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { DashboardIcon } from "../ui/shared/Icon/Icon";
import { DashboardIconName } from "../ui/shared/Icon/Icon.types";

const items = [
  {
    label: "Dashboard",
    href: "/account",
    iconName: "dashboard",
  },

  {
    label: "Orders",
    href: "/account/orders",
    iconName: "order",
  },
  {
    label: "Coupon",
    href: "/account/coupon",
    iconName: "coupon",
  },

  {
    label: "Downloads",
    href: "/account/downloads",
    iconName: "download",
  },

  {
    label: "Address",
    href: "/account/address",
    iconName: "address",
  },

  {
    label: "Account Details",
    href: "/account/profile",
    iconName: "profile",
  },
  {
    label: "Pending Review",
    href: "/account/review",
    iconName: "review",
  },

  {
    label: "Wishlist",
    href: "/wishlist",
    iconName: "wishlist",
  },
  {
    label: "Recently View",
    href: "/account/recent-view",
    iconName: "recentlyView",
  },
];

export default function AccountSidebar() {
  const pathname = usePathname();

  return (
    <aside className="border border-gray-200 bg-white p-4 py-5 col-span-1 md:col-span-2 rounded-md">
      <nav className="flex flex-col gap-7 md:gap-5">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`px-2 py-2 md:py-3 md:px-3 w-max md:w-full transition-colors flex items-center mx-auto gap-3 ${
              pathname === item.href
                ? "bg-bg-pry rounded-md text-white"
                : "hover:bg-gray-100"
            }`}
          >
            <DashboardIcon
              size={22}
              className=""
              name={item.iconName as DashboardIconName}
            />
            <span className="hidden md:inline-flex">{item.label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
