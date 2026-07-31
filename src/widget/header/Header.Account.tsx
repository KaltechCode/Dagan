"use client";

import Link from "next/link";
import { Icon } from "@/components/ui/shared/Icon/Icon";

export default function HeaderAccount() {
  return (
    <Link
      href="/account"
      className="rounded-lg p-2 transition hover:bg-[var(--secondary)]"
      aria-label="My Account"
    >
      <Icon name="user" size={28} className="text-gray-600" />
    </Link>
  );
}
