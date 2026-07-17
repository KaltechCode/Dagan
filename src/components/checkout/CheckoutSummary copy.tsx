"use client";

import { useCart } from "@/features/product/hooks/useCart";
import { ProductPrice } from "../product/productPrice";

export default function CheckoutSummary() {
  const { subtotal, quantity } = useCart();

  return (
    <aside className="rounded-xl border p-6">
      <h2 className="mb-6 text-xl font-semibold">Order Summary</h2>

      <div className="mb-3 flex justify-between">
        <span>Items</span>
        <span>{quantity}</span>
      </div>

      <div className="flex justify-between">
        <span>Total</span>

        <ProductPrice price={subtotal} />
      </div>
    </aside>
  );
}
