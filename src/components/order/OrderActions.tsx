"use client";

import { Button } from "@/components/ui/shared/Button";

import { useOrders } from "@/hooks/order/useOrder";

import type { Order } from "@/types/order";

interface OrderActionsProps {
  order: Order;
}

export default function OrderActions({ order }: OrderActionsProps) {
  const { retryPayment, cancelOrder, mutating } = useOrders();

  async function handleRetry() {
    const response = await retryPayment(order.id);

    window.location.assign(response.paymentUrl);
  }

  async function handleCancel() {
    await cancelOrder(order.id);
  }

  const isPending = order.status === "pending";

  return (
    <div className="flex flex-wrap gap-4">
      {isPending && (
        <>
          <Button loading={mutating} onClick={handleRetry}>
            Pay Now
          </Button>

          <Button variant="outline" loading={mutating} onClick={handleCancel}>
            Cancel Order
          </Button>
        </>
      )}
    </div>
  );
}
