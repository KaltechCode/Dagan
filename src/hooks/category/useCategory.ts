"use client";

import {
  useGetCategoriesQuery,
  useGetCategoryQuery,
} from "@/redux/api/categoryApi";

export function useCategories() {
  const query = useGetCategoriesQuery();

  return {
    categories: query.data?.items ?? [],

    isLoading: query.isLoading,

    isFetching: query.isFetching,

    error: query.error,

    refetch: query.refetch,
  };
}

export function useCategory(slug: string) {
  const query = useGetCategoryQuery(slug);

  return {
    category: query.data,

    isLoading: query.isLoading,

    error: query.error,
  };
}
