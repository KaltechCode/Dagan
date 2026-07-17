"use client";

import { useGetCustomerQuery } from "@/redux/api/customerApi";
import { useMemo } from "react";

export function useCustomer() {
  const { data, isLoading, isFetching, isError, refetch } =
    useGetCustomerQuery();

  return useMemo(
    () => ({
      customer: data?.customer ?? null,

      loading: isLoading || isFetching,

      initialized: !isLoading,

      error: isError,

      refetch,
    }),
    [data, isLoading, isFetching, isError, refetch],
  );
}
