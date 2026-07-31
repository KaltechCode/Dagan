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
    <section className="w-[95%] xl:w-[90%] mx-auto py-5 bg-white">
      <h2 className="section-title text-secondary mb-2 pb-2 md:pt-7">
        Your Cart
      </h2>
      <div className="grid gap-10 md:grid-cols-5 md:py-7 lg:py-10 xl:py-12 lg:gap-16 xl:gap-18 2xl:gap-24 3k:gap-26">
        <div className="space-y-5 md:col-span-3 border border-gray-200 p-4 rounded-md lg:p-7">
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

        <aside className="rounded-lg border border-gray-200 p-6 md:col-span-2">
          <CartSummary totals={cart.totals} />

          <div className="px-2 md:px-2">
            <Link
              href="/checkout"
              className="mt-6 block rounded bg-bg-pry px-6 py-4 text-center text-white rounded-full hover:bg-transparent hover:text-secondary transition-all duration-150"
            >
              Proceed to Checkout
            </Link>

            <Link
              href="/shop"
              className="mt-3 block  border border-gray-200 px-6 py-4 text-center rounded-full hover:bg-bg-pry hover:text-white transition-all duration-150"
            >
              Continue Shopping
            </Link>
          </div>
        </aside>
      </div>
    </section>
  );
}
