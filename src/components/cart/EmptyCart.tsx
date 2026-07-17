"use client";

import Link from "next/link";

import { ShoppingCart } from "lucide-react";

import { Button } from "@/components/ui/shared/Button";

export default function EmptyCart() {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <ShoppingCart className="mb-4 h-16 w-16 text-gray-300" />

      <h2 className="text-xl font-semibold">Your cart is empty</h2>

      <p className="mt-2 text-sm text-gray-500">
        Add products to begin shopping.
      </p>

      <Button className="mt-6">
        <Link href="/shop">Continue Shopping</Link>
      </Button>
    </div>
  );
}
