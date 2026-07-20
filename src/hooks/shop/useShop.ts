"use client";

import { useMemo } from "react";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { buildProductQuery } from "../search/useSearchParams";
import { useGetProductsQuery } from "@/redux/api/productApi";

export function useShop() {
  const router = useRouter();

  const pathname = usePathname();

  const params = useSearchParams();

  const query = useMemo(() => buildProductQuery(params), [params]);

  const products = useGetProductsQuery(query);

  function update(
    values: Record<string, string | number | boolean | undefined>,
  ) {
    const next = new URLSearchParams(params.toString());

    Object.entries(values).forEach(([key, value]) => {
      if (value === undefined || value === "" || value === false) {
        next.delete(key);
      } else {
        next.set(key, String(value));
      }
    });

    router.push(`${pathname}?${next.toString()}`, {
      scroll: false,
    });
  }

  function clearFilters() {
    router.push(pathname, {
      scroll: false,
    });
  }

  return {
    query,

    products: products.data?.items ?? [],

    pagination: products.data?.pagination,

    loading: products.isLoading,

    fetching: products.isFetching,

    error: products.isError,

    update,

    clearFilters,

    refetch: products.refetch,
  };
}
