"use client";

import Link from "next/link";
import CartItem from "@/components/cart/CartItem";
import CartSummary from "@/components/cart/CartSummary";
import { useCart } from "@/hooks/cart/useCart";

export default function CartPage() {
  const { cart, isLoading, isUpdating, isRemoving, updateItem, removeItem } =
    useCart();

  if (isLoading) {
    return <div className="container py-16">Loading cart...</div>;
  }

  if (!cart || cart.items.length === 0) {
    return (
      <div className=" py-20 text-center bg-white h-screen w-[95%] xl:w-[90%] mx-auto">
        <h2 className="text-2xl font-semibold">Your cart is empty</h2>

        <p className="mt-3 text-gray-500">Add products to begin shopping.</p>

        <Link
          href="/shop"
          className="mt-8 inline-flex rounded bg-black px-6 py-3 text-white"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <section className="w-[95%] xl:w-[90%] mx-auto py-10 bg-white">
      <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
        <div className="space-y-5">
          {cart?.items?.map((item) => (
            <CartItem
              key={item.key}
              item={item}
              editable
              showRemove
              isUpdating={isUpdating}
              isRemoving={isRemoving}
              onQuantityChange={(quantity) =>
                updateItem({
                  key: item.key,
                  quantity,
                }).unwrap()
              }
              onRemove={() => removeItem(item.key).unwrap()}
            />
          ))}
        </div>

        <aside className="rounded-lg border p-6">
          <CartSummary totals={cart.totals} />

          <Link
            href="/checkout"
            className="mt-6 block rounded bg-bg-pry px-6 py-4 text-center text-white"
          >
            Proceed to Checkout
          </Link>

          <Link
            href="/shop"
            className="mt-3 block rounded border px-6 py-4 text-center"
          >
            Continue Shopping
          </Link>
        </aside>
      </div>
    </section>
  );
}
