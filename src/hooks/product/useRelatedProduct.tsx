"use client";

import { useGetProductsQuery } from "@/redux/api/productApi";

export function useRelatedProducts(
  categoryIds: number[],
  currentProductId: number,
) {
  const query = useGetProductsQuery({
    category: categoryIds,

    exclude: [currentProductId],

    perPage: 8,
  });

  return {
    products: query.data?.items ?? [],

    loading: query.isLoading,
    refetch: query.refetch,
  };
}
