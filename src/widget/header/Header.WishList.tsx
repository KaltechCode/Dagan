"use client";

import Link from "next/link";
import { Heart } from "lucide-react";

import { useAppSelector } from "@/redux/hooks";

export default function HeaderWishlist() {
  const total = useAppSelector((state) => state.wishlist.items.length);

  return (
    <Link
      href="/wishlist"
      className="relative rounded-lg p-2 hover:bg-[var(--secondary)]"
    >
      <Heart size={22} />

      {total > 0 && (
        <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[var(--primary)] text-xs text-white">
          {total}
        </span>
      )}
    </Link>
  );
}
