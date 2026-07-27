"use client";

import OrderList from "@/components/order/OrderList";

export default function OrdersPage() {
  return (
    <main className="mx-auto  border border-gray-200 px-5 py-5 rounded-md">
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
