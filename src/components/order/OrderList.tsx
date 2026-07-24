"use client";

import { useOrders } from "@/hooks/order/useOrder";
import OrderCard from "./OrderCard";

export default function OrderList() {
  const { orders, isLoading, error, refetch } = useOrders();

  if (isLoading) {
    return (
      <div className="space-y-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="h-40 animate-pulse rounded-xl border bg-gray-100"
          />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-xl border border-red-200 bg-red-50 p-6">
        <h2 className="text-lg font-semibold text-red-700">
          Unable to load your orders
        </h2>

        <p className="mt-2 text-sm text-red-600">
          Something went wrong while retrieving your orders.
        </p>

        <button
          onClick={() => refetch()}
          className="mt-4 rounded-lg border px-4 py-2"
        >
          Try Again
        </button>
      </div>
    );
  }

  if (!orders.length) {
    return (
      <div className="rounded-xl border bg-white p-10 text-center">
        <h2 className="text-xl font-semibold">No Orders Yet</h2>

        <p className="mt-2 text-gray-500">You haven't placed any orders yet.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {orders.map((order) => (
        <OrderCard key={order.id} order={order} />
      ))}
    </div>
  );
}
