// import { useGetProductsQuery } from "@/redux/api/productApi";

// const { data, error, isLoading, isFetching } = useGetProductsQuery(1);

import { useGetProductsQuery } from "@/redux/api/productApi";

interface UseProductsOptions {
  page?: number;
  category?: number;
  search?: string;
  order?: "asc" | "desc";
  orderby?: string;
  per_page?: number;
}

export function useProducts(options: UseProductsOptions) {
  const query = useGetProductsQuery(options);

  return {
    products: query.data?.data ?? [],
    pagination: query.data?.pagination,
    isLoading: query.isLoading,
    isFetching: query.isFetching,
    isError: query.isError,
    error: query.error,
    refetch: query.refetch,
  };
}
