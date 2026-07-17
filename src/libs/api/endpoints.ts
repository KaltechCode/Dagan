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

  LOGIN: "/login",

  REGISTER: "/register",

  ORDERS: "/orders",

  SETTINGS: "/settings",

  LOGOUT: "/logout",

  ME: "/me",

  PROFILE: "/profile",

  PASSWORD: "/password",

  FORGOT_PASSWORD: "/forgot-password",

  RESET_PASSWORD: "/reset-password",

  REFRESH_TOKEN: "/refresh-token",

  CUSTOMER: "/customer",

  CUSTOMER_PROFILE: "/customer/profile",

  CUSTOMER_BILLING: "/customer/billing",

  CUSTOMER_SHIPPING: "/customer/shipping",

  CUSTOMER_AVATAR: "/customer/avatar",

  CART: "/cart",

  CART_ITEMS: "/cart/items",

  CART_COUPONS: "/cart/coupons",

  CART_SHIPPING: "/cart/shipping",

  CART_TOTALS: "/cart/totals",

  ORDER: "/orders",

  ORDER_CANCEL: "/orders",

  ORDER_PAY: "/orders",

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
