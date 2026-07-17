"use client";

import { useMeQuery } from "@/redux/api/authApi";
import { useMemo } from "react";

export function useAuth() {
  const { data, isLoading, isFetching, isError, refetch } = useMeQuery();

  return useMemo(
    () => ({
      user: data?.user ?? null,

      authenticated: !!data?.user,

      loading: isLoading || isFetching,

      initialized: !isLoading,

      error: isError,

      refetch,
    }),
    [data, isLoading, isFetching, isError, refetch],
  );
}
