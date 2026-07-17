"use client";

import { useMemo } from "react";

import {
  useCancelOrderMutation,
  useGetOrdersQuery,
  usePayOrderMutation,
} from "@/redux/api/orderApi";

import type { OrderQuery } from "@/types/order";

export function useOrders(query?: OrderQuery) {
  const ordersQuery = useGetOrdersQuery(query);

  const [cancelOrderMutation, cancelState] = useCancelOrderMutation();

  const [payOrderMutation, payState] = usePayOrderMutation();

  return useMemo(
    () => ({
      orders: ordersQuery.data?.orders ?? [],

      total: ordersQuery.data?.total ?? 0,

      page: ordersQuery.data?.page ?? 1,

      pages: ordersQuery.data?.pages ?? 1,

      loading: ordersQuery.isLoading,

      fetching: ordersQuery.isFetching,

      error: ordersQuery.isError,

      refetch: ordersQuery.refetch,

      cancelOrder: (id: number) => cancelOrderMutation(id).unwrap(),

      retryPayment: (id: number) => payOrderMutation(id).unwrap(),

      mutating: cancelState.isLoading || payState.isLoading,
    }),
    [
      ordersQuery,
      cancelOrderMutation,
      payOrderMutation,
      cancelState.isLoading,
      payState.isLoading,
    ],
  );
}
