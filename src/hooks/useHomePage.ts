"use client";

import { useGetCategoriesQuery } from "@/redux/api/categoryApi";
import { useGetProductsQuery } from "@/redux/api/productApi";
import { useCategories } from "./category/useCategory";

export function useHomepage() {
  const featuredProducts = useGetProductsQuery({
    perPage: 8,
  });

  const newArrivals = useGetProductsQuery({
    orderby: "date",
    perPage: 8,
  });

  const saleProducts = useGetProductsQuery({
    onSale: true,
    perPage: 8,
  });

  const bestSellers = useGetProductsQuery({
    orderby: "popularity",
    perPage: 8,
  });

  const { categories, isLoading, isFetching } = useCategories();

  return {
    featuredProducts,

    newArrivals,

    saleProducts,

    bestSellers,

    categories,

    isLoading,

    isFetching,
  };
}
