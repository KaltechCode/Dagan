"use client";

import OrderItem from "./OrderItem";

import type { OrderItem as OrderItemType } from "@/types/order";

interface OrderItemsProps {
  items: OrderItemType[];
}

export default function OrderItems({ items }: OrderItemsProps) {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-semibold">Order Items</h2>

      {items.map((item) => (
        <OrderItem key={item.id} item={item} />
      ))}
    </section>
  );
}
