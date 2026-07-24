"use client";

import Link from "next/link";
import { useState } from "react";

import type { Order } from "@/types/order";
import { useOrders } from "@/hooks/order/useOrder";
import { Button } from "../ui/shared/Button";

interface Props {
  order: Order;
}

const CANCELLABLE_STATUSES = ["pending", "on-hold"];

const STATUS_STYLES: Record<string, string> = {
  pending: "bg-yellow-100 text-yellow-800",
  processing: "bg-blue-100 text-blue-800",
  completed: "bg-green-100 text-green-800",
  cancelled: "bg-red-100 text-red-800",
  refunded: "bg-gray-100 text-gray-800",
  failed: "bg-red-100 text-red-800",
  "on-hold": "bg-orange-100 text-orange-800",
};

export default function OrderCard({ order }: Props) {
  const { cancelOrder } = useOrders();

  const [loading, setLoading] = useState(false);

  const canCancel = CANCELLABLE_STATUSES.includes(order.status);

  const handleCancel = async () => {
    if (!canCancel) return;

    if (!window.confirm("Are you sure you want to cancel this order?")) {
      return;
    }

    try {
      setLoading(true);

      await cancelOrder(order.id);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Order #{order.number}</h3>

          <p className="text-sm text-gray-500">
            {new Date(order.created_at).toLocaleDateString()}
          </p>

          <span
            className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${
              STATUS_STYLES[order.status] ?? "bg-gray-100 text-gray-800"
            }`}
          >
            {order.status}
          </span>
        </div>

        <div className="space-y-1 text-right">
          <p className="font-semibold">
            {order.currency} {order.total}
          </p>

          <p className="text-sm text-gray-500">
            {order.item_count} item
            {order.item_count !== 1 && "s"}
          </p>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <Link href={`/account/orders/${order.id}`}>
          <Button>View Details</Button>
        </Link>

        {canCancel && (
          <Button variant="outline" loading={loading} onClick={handleCancel}>
            Cancel Order
          </Button>
        )}
      </div>
    </div>
  );
}
