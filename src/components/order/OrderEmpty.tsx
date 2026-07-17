"use client";

import Link from "next/link";

import { Button } from "@/components/ui/shared/Button";

export default function EmptyOrders() {
  return (
    <div className="py-20 text-center">
      <h2 className="text-2xl font-semibold">No Orders Yet</h2>

      <p className="mt-3 text-gray-500">
        Your completed purchases will appear here.
      </p>

      <Button className="mt-6">
        <Link href="/shop">Start Shopping</Link>
      </Button>
    </div>
  );
}
