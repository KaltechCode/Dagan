export const API_ENDPOINTS = {
  PRODUCTS: "products",

  PRODUCT: (id: number) => `products/${id}`,

  PRODUCT_BY_SLUG: "products",

  CATEGORIES: "products/categories",

  CATEGORY: (id: number) => `products/categories/${id}`,

  ATTRIBUTES: "products/attributes",

  ATTRIBUTE: (id: number) => `products/attributes/${id}`,

  REVIEWS: "products/reviews",

  ORDERS: "orders",

  ORDER: (id: number) => `orders/${id}`,

  CUSTOMERS: "customers",

  CUSTOMER: (id: number) => `customers/${id}`,

  COUPONS: "coupons",

  COUPON: (id: number) => `coupons/${id}`,

  SHIPPING_ZONES: "shipping/zones",

  PAYMENT_GATEWAYS: "payment_gateways",

  TAX_CLASSES: "taxes/classes",
  PRODUCT_VARIATIONS: (productId: number) => `products/${productId}/variations`,
} as const;

const baseUrl =
  typeof window === "undefined" ? process.env.INTERNAL_API_URL! : "/api";
