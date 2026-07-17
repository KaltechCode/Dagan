"use client";

import Link from "next/link";
import Image from "next/image";
import { Cart } from "@/types/cart";
import { formatCurrency } from "../helpers/currency";

interface Props {
  cart: Cart;

  editable?: boolean;
}

export default function OrderSummary({ cart, editable = false }: Props) {
  return (
    <section className="rounded-lg border p-6">
      <h2 className="mb-6 text-xl font-semibold">Order Summary</h2>

      <div className="space-y-5">
        {cart.items.map((item) => (
          <div key={item.key} className="flex gap-4">
            <div className="relative h-16 w-16 overflow-hidden rounded">
              {item.image && (
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  fill
                  className="object-cover"
                />
              )}
            </div>

            <div className="flex-1">
              <h3 className="font-medium">{item.name}</h3>

              <p className="text-sm text-gray-500">Qty: {item.quantity}</p>

              {editable && (
                <Link
                  href="/cart"
                  className="mt-2 inline-block text-sm text-primary"
                >
                  Edit Cart
                </Link>
              )}
            </div>

            <div className="font-medium">{formatCurrency(item.total)}</div>
          </div>
        ))}
      </div>

      <div className="mt-8 space-y-3 border-t pt-6">
        <div className="flex justify-between">
          <span>Subtotal</span>

          <span>{formatCurrency(cart.totals.subtotal)}</span>
        </div>

        <div className="flex justify-between">
          <span>Discount</span>

          <span>-{formatCurrency(cart.totals.discount)}</span>
        </div>

        <div className="flex justify-between">
          <span>Shipping</span>

          <span>{formatCurrency(cart.totals.shipping)}</span>
        </div>

        <div className="flex justify-between">
          <span>Tax</span>

          <span>{formatCurrency(cart.totals.tax)}</span>
        </div>

        <div className="flex justify-between border-t pt-4 text-lg font-semibold">
          <span>Total</span>

          <span>{formatCurrency(cart.totals.total)}</span>
        </div>
      </div>
    </section>
  );
}

// Usesage
// const { cart } = useCart();

{
  /* <OrderSummary cart={cart!} editable />; */
}
