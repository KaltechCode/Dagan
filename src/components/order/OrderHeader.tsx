"use client";

import OrderStatusBadge from "./OrderStatusBadge";

import type { Order } from "@/types/order";

interface OrderHeaderProps {
  order: Order;
}

export default function OrderHeader({ order }: OrderHeaderProps) {
  return (
    <div className="flex flex-col gap-6 rounded-xl border bg-white p-6 lg:flex-row lg:items-start lg:justify-between">
      <div>
        <h1 className="text-2xl font-bold">Order #{order.number}</h1>

        <div className="mt-3 space-y-1 text-sm text-gray-500">
          <p>Placed on {order.createdAt}</p>

          <p>Payment Method: {order.paymentMethodTitle}</p>
        </div>
      </div>

      <OrderStatusBadge status={order.status} />
    </div>
  );
}
