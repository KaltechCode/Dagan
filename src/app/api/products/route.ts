import { NextRequest } from "next/server";

import type { ProductQuery } from "@/redux/types";
import { productService } from "@/services/product.services";
import { failure, success } from "@/libs/api.responses";

function buildQuery(request: NextRequest): ProductQuery {
  const { searchParams } = request.nextUrl;

  return {
    page: Number(searchParams.get("page") ?? 1),

    perPage: Number(searchParams.get("perPage") ?? 12),

    search: searchParams.get("search") ?? undefined,

    category: searchParams.get("category") ?? undefined,

    minPrice: searchParams.get("minPrice")
      ? Number(searchParams.get("minPrice"))
      : undefined,

    maxPrice: searchParams.get("maxPrice")
      ? Number(searchParams.get("maxPrice"))
      : undefined,

    inStock: searchParams.get("inStock") === "true",

    onSale: searchParams.get("onSale") === "true",

    featured: searchParams.get("featured") === "true",

    orderby:
      (searchParams.get("orderby") as ProductQuery["orderby"]) ?? "menu_order",

    order:
      (searchParams.get("order")?.toUpperCase() as ProductQuery["order"]) ??
      "ASC",
  };
}

export async function GET(request: NextRequest) {
  try {
    console.log("Products route");
    const query = buildQuery(request);

    const products = await productService.getProducts(query);

    return success(products);
  } catch (error) {
    return failure(
      error instanceof Error ? error.message : "Failed to fetch products",
    );
  }
}
