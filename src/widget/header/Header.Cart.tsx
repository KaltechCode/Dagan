"use client";

import Link from "next/link";
import { useAppSelector } from "@/redux/hooks";
import CartBadge from "@/components/cart/CartBadge";
import { Icon } from "@/components/ui/shared/Icon/Icon";

export default function HeaderCart() {
  return (
    <Link href="/cart" className="relative p-2 mr-4">
      <Icon size={28} className="text-gray-600" name="cart" />

      <CartBadge className="absolute -right-2 top-0 bg-bg-pry px-1 rounded-full text-white" />
    </Link>
  );
}
