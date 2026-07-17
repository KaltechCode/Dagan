"use client";

import Link from "next/link";
import { User } from "lucide-react";

export default function HeaderAccount() {
  return (
    <Link
      href="/account"
      className="rounded-lg p-2 transition hover:bg-[var(--secondary)]"
      aria-label="My Account"
    >
      <User size={22} />
    </Link>
  );
}
