export const API = {
  PRODUCTS: "/products",

  PRODUCT: (slug: string) => `/products/${slug}`,

  FEATURED_PRODUCTS: "/products/featured",

  RELATED_PRODUCTS: (slug: string) => `/products/${slug}/related`,

  CATEGORY: (slug: string) => `/categories/${slug}`,

  CATEGORY_TREE: "/categories/tree",

  FEATURED_CATEGORIES: "/categories/featured",

  CATEGORIES: "/categories",

  SEARCH: "/search",

  CHECKOUT: "/checkout",

  CHECKOUT_SUCCESS: "/checkout/success",

  CHECKOUT_ORDER: "/checkout/order",

  PAYMENT_GATEWAYS: "/payment-gateways",

  ORDERS: "/orders",

  ORDER: (id: number | string) => `/orders/${id}`,

  ORDER_CANCEL: (id: number | string) => `/orders/${id}/cancel`,

  ORDER_PAY: (id: number | string) => `/orders/${id}/pay`,

  ORDER_NOTES: (id: number | string) => `/orders/${id}/notes`,

  SETTINGS: "/settings",

  LOGOUT: "/logout",

  AUTH: {
    REGISTER: "/auth/register",
    LOGIN: "/auth/login",
    LOGOUT: "/auth/logout",
    REFRESH: "/auth/refresh",
    FORGOT_PASSWORD: "/auth/forgot-password",
    RESET_PASSWORD: "/auth/reset-password",
    CHANGE_PASSWORD: "/auth/change-password",
  },

  CART: "/cart",

  CART_ITEMS: "/cart/items",

  CART_COUPONS: "/cart/coupons",

  CART_SHIPPING: "/cart/shipping",

  CART_TOTALS: "/cart/totals",

  CHECKOUT_PAYMENT_GATEWAYS: "/checkout/payment-gateways",
} as const;

export const WC = {
  PRODUCTS: "/products",

  PRODUCT_VARIATIONS: (id: number) => `/products/${id}/variations`,

  CATEGORIES: "/products/categories",

  BRANDS: "/products/brands",

  CUSTOMERS: "/customers",

  ORDERS: "/orders",

  COUPONS: "/coupons",

  REVIEWS: "/products/reviews",
} as const;
