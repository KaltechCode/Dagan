"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  {
    label: "Dashboard",
    href: "/account",
  },

  {
    label: "Orders",
    href: "/account/orders",
  },

  {
    label: "Downloads",
    href: "/account/downloads",
  },

  {
    label: "Addresses",
    href: "/account/addresses",
  },

  {
    label: "Account Details",
    href: "/account/profile",
  },

  {
    label: "Wishlist",
    href: "/wishlist",
  },
];

export default function AccountSidebar() {
  const pathname = usePathname();

  return (
    <aside className="rounded-xl border bg-white p-4">
      <nav className="space-y-2">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`block rounded-lg px-4 py-3 transition-colors ${
              pathname === item.href
                ? "bg-primary text-white"
                : "hover:bg-gray-100"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
