"use client";

import { useGetOrderNotesQuery, useGetOrderQuery } from "@/redux/api/orderApi";

import OrderDetails from "./OrderDetails";
import OrderDetailsSkeleton from "../ui/shared/skeleton/OrderDetailsSkeleton";

interface Props {
  orderId: number;
}

export default function OrderDetailsPage({ orderId }: Props) {
  const { data: orderResponse, isLoading: loadingOrder } =
    useGetOrderQuery(orderId);

  const { data: notes = [], isLoading: loadingNotes } =
    useGetOrderNotesQuery(orderId);

  if (loadingOrder || loadingNotes) {
    return <OrderDetailsSkeleton />;
  }

  if (!orderResponse) {
    return null;
  }

  return <OrderDetails order={orderResponse.order} notes={notes} />;
}
