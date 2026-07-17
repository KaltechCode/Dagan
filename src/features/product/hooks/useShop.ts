"use client";

import { useGetProductsQuery } from "@/redux/api/productApi";
import { useSearchParams, useRouter } from "next/navigation";

export function useShop() {
  const router = useRouter();
  const params = useSearchParams();

  const page = Number(params.get("page") ?? "1");
  const search = params.get("search") ?? "";
  const category = params.get("category") ?? "";
  const orderby = params.get("orderby") ?? "date";

  const query = useGetProductsQuery({
    page,
    search,
    category,
    orderby,
    per_page: 12,
  });

  function update(name: string, value: string) {
    const next = new URLSearchParams(params.toString());

    if (value) {
      next.set(name, value);
    } else {
      next.delete(name);
    }

    if (name !== "page") {
      next.set("page", "1");
    }

    router.push(`/shop?${next.toString()}`);
  }

  return {
    products: query.data ?? [],
    isLoading: query.isLoading,
    isFetching: query.isFetching,
    error: query.error,
    page,
    search,
    category,
    orderby,
    setSearch: (v: string) => update("search", v),
    setCategory: (v: string) => update("category", v),
    setOrderBy: (v: string) => update("orderby", v),
    setPage: (v: number) => update("page", String(v)),
  };
}
