"use client";

import { useGetRelatedProductsQuery } from "@/redux/api/productApi";

export function useRelatedProducts(
  categoryIds: number[],
  currentProductId: number,
  slug: string,
) {
  const query = useGetRelatedProductsQuery(slug);

  return {
    products: query.data ?? [],

    loading: query.isLoading,
    refetch: query.refetch,
  };
}
