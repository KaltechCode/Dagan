"use client";

import { useCallback } from "react";

import {
  useGetOrdersQuery,
  useGetOrderQuery,
  useCancelOrderMutation,
} from "@/redux/api/orderApi";

export function useOrders() {
  const {
    data: orders = [],
    isLoading,
    isFetching,
    error,
    refetch,
  } = useGetOrdersQuery();

  const [cancelOrderMutation] = useCancelOrderMutation();

  const cancelOrder = useCallback(
    async (orderId: number | string) => {
      return cancelOrderMutation(orderId).unwrap();
    },
    [cancelOrderMutation],
  );

  return {
    orders,

    isLoading,
    isFetching,
    error,

    refetch,

    cancelOrder,
  };
}

/**
 * Hook for a single order
 */
export function useOrder(id: number | string) {
  const {
    data: order,
    isLoading,
    isFetching,
    error,
    refetch,
  } = useGetOrderQuery(id, {
    skip: !id,
  });

  return {
    order,

    isLoading,
    isFetching,

    error,

    refetch,
  };
}
