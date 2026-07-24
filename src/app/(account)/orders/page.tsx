"use client";

import OrderList from "@/components/order/OrderList";

export default function OrdersPage() {
  return (
    <main className="container mx-auto max-w-7xl py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">My Orders</h1>

        <p className="mt-2 text-muted-foreground">
          View your order history, track current orders, and access order
          details.
        </p>
      </div>

      <OrderList />
    </main>
  );
}
