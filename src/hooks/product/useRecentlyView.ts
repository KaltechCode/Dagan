"use client";

import { useGetProductsQuery } from "@/redux/api/productApi";
import { addRecentlyViewed, getRecentlyViewed } from "@/utils/recentlyView";
import { useEffect } from "react";

export function useRecentlyViewed(currentProductId?: number) {
  useEffect(() => {
    if (currentProductId) {
      addRecentlyViewed(currentProductId);
    }
  }, [currentProductId]);

  const ids = getRecentlyViewed();

  const query = useGetProductsQuery();

  return {
    products: query.data?.items ?? [],

    loading: query.isLoading,
  };
}
