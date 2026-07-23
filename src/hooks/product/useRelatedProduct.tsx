"use client";

import { useGetRelatedProductsQuery } from "@/redux/api/productApi";

export function useRelatedProducts(slug: string) {
  const query = useGetRelatedProductsQuery(slug);

  return {
    relatedProducts: query.data ?? [],

    loading: query.isLoading,
    refetch: query.refetch,
  };
}
