import { ProductQuery } from "@/redux/types";

export function buildProductQuery(params: URLSearchParams): ProductQuery {
  return {
    page: Number(params.get("page") ?? 1),

    perPage: Number(params.get("perPage") ?? 12),

    search: params.get("search") ?? undefined,

    category: params.get("category") ?? undefined,

    onSale: params.get("sale") === "true",

    featured: params.get("featured") === "true",

    minPrice: params.get("minPrice")
      ? Number(params.get("minPrice"))
      : undefined,

    maxPrice: params.get("maxPrice")
      ? Number(params.get("maxPrice"))
      : undefined,

    orderby: (params.get("orderby") as ProductQuery["orderby"]) ?? "date",
    order: (params.get("order")?.toUpperCase() as "ASC" | "DESC") ?? "ASC",
  };
}
