"use client";

import Link from "next/link";

import { Card } from "@/components/ui/shared/Card";

import { useOrders } from "@/hooks/order/useOrder";

import OrderStatusBadge from "./OrderStatusBadge";

export default function OrdersTable() {
  const { orders, loading } = useOrders();

  if (loading) {
    return null;
  }

  return (
    <Card className="overflow-hidden">
      <table className="w-full">
        <thead>
          <tr>
            <th className="p-4 text-left">Order</th>

            <th className="p-4 text-left">Date</th>

            <th className="p-4 text-left">Status</th>

            <th className="p-4 text-right">Total</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="border-t">
              <td className="p-4">
                <Link href={`/account/orders/${order.id}`}>
                  #{order.number}
                </Link>
              </td>

              <td className="p-4">{order.createdAt}</td>

              <td className="p-4">
                <OrderStatusBadge status={order.status} />
              </td>

              <td className="p-4 text-right">{order.totals.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}
