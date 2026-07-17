"use client";

import type { Order, OrderNote } from "@/types/order";
import OrderHeader from "./OrderHeader";
import OrderActions from "./OrderActions";
import OrderItems from "./OrderItems";

import OrderTotals from "./OrderTotals";
import OrderTimeline from "./OrderTimeLine";
import OrderNotes from "./OrderNote";
import BillingAddress from "../checkout/BillingAddress";
import ShippingAddress from "../checkout/ShippingAddress";

interface OrderDetailsProps {
  order: Order;
  notes: OrderNote[];
}

export default function OrderDetails({ order, notes }: OrderDetailsProps) {
  return (
    <div className="space-y-8">
      <OrderHeader order={order} />

      <OrderActions order={order} />

      <OrderItems items={order.items} />

      <div className="grid gap-6 lg:grid-cols-2">
        <BillingAddress address={order.billing} />

        <ShippingAddress address={order.shipping} />
      </div>

      <OrderTotals totals={order.totals} />

      <OrderTimeline notes={notes} />

      <OrderNotes note={order.customerNote} />
    </div>
  );
}
