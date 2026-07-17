"use client";

import Link from "next/link";

import { Button } from "@/components/ui/shared/Button";
import { Card } from "@/components/ui/shared/Card";
import { useGetOrderQuery } from "@/redux/api/checkoutApi";

interface Props {
  orderId: number;
  orderKey: string;
}

export default function PaymentResult({ orderId }: Props) {
  const { data, isLoading } = useGetOrderQuery(orderId);

  if (isLoading) {
    return null;
  }

  const order = data;

  switch (order?.status) {
    case "completed":

    case "processing":
      return (
        <Card className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold">Thank You</h1>

          <p className="mt-4">Your payment was successful.</p>

          <Button className="mt-6">
            <Link href={`/account/orders/${order.orderId}`}>View Order</Link>
          </Button>
        </Card>
      );

    case "failed":
      return (
        <Card className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold">Payment Failed</h1>

          <p className="mt-4">Please try another payment method.</p>

          <Button className="mt-6">
            <Link href="/checkout">Return to Checkout</Link>
          </Button>
        </Card>
      );

    case "pending":
      return (
        <Card className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold">Awaiting Payment</h1>

          <p className="mt-4">
            Your order has been created and is waiting for payment confirmation.
          </p>
        </Card>
      );

    default:
      return (
        <Card className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold">Order Not Found</h1>

          <Button className="mt-6">
            <Link href="/">Continue Shopping</Link>
          </Button>
        </Card>
      );
  }
}
