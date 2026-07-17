export interface Pagination {
  page: number;

  perPage: number;

  total: number;

  totalPages: number;
}

export interface Collection<T> {
  items: T[];

  pagination: Pagination;
}

export interface RequestOptions {
  params?: Record<string, unknown>;

  body?: unknown;
}

export const WP = {
  PRODUCTS: "/products",

  PRODUCT: (slug: string) => `/products/${slug}`,

  FEATURED_PRODUCTS: "/products/featured",

  RELATED_PRODUCTS: (slug: string) => `/products/${slug}/related`,

  SEARCH_PRODUCTS: "/products/search",
} as const;
