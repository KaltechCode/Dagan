// import { CommerceItem } from "./order";

// export interface CartItemAttribute {
//   id?: number;

//   name: string;

//   slug?: string;

//   option: string;
// }

// export interface CartItemImage {
//   id?: number;

//   src: string;

//   alt?: string;
// }

// export interface CartItem extends CommerceItem {
//   key: string;

//   quantity: number;

//   minQuantity: number;

//   maxQuantity: number;

//   purchasable: boolean;

//   stockStatus: string;

//   backordersAllowed: boolean;

//   subtotal: string;

//   subtotalTax: string;

//   total: string;

//   totalTax: string;
// }

// export interface CartCoupon {
//   code: string;

//   discount: string;

//   discountTax: string;

//   description?: string;
// }

// export interface ShippingRate {
//   id: string;

//   instanceId: number;

//   methodId: string;

//   label: string;

//   cost: string;

//   selected: boolean;

//   description?: string;

//   deliveryEstimate?: string;
// }

// export interface CartTotals {
//   subtotal: string;

//   subtotalTax: string;

//   shipping: string;

//   shippingTax: string;

//   discount: string;

//   discountTax: string;

//   fee: string;

//   feeTax: string;

//   tax: string;

//   total: string;

//   currencyCode: string;

//   currencySymbol: string;

//   currencyMinorUnit: number;
// }

// export interface AddToCartRequest {
//   productId: number;

//   quantity: number;

//   variationId?: number;

//   variation?: Record<string, string>;

//   attributes?: Record<string, string>;
// }

// export interface UpdateCartItemRequest {
//   key: string;

//   quantity: number;
// }

// export interface RemoveCartItemRequest {
//   key: string;
// }

// export interface ApplyCouponRequest {
//   code: string;
// }

// export interface UpdateShippingRequest {
//   rateId: string;
// }

// export interface Cart {
//   items: CartItem[];

//   coupons: CartCoupon[];

//   shippingRates: ShippingRate[];

//   totals: CartTotals;

//   itemCount: number;

//   totalQuantity: number;
// }

// export interface CartResponse {
//   cart: Cart;
// }

// export type CartItemVariant = "cart" | "mini" | "checkout" | "order";

import { Product } from "./product";

export interface Cart {
  items: CartItem[];

  coupons: CartCoupon[];

  totals: CartTotals;

  itemCount: number;

  quantity: number;
}

import { ProductImage } from "./product";

export interface CartItemAttribute {
  id: number;
  name: string;
  slug: string;
  option: string;
}

export interface CartItem {
  key: string;

  productId: number;

  variationId: number;

  name: string;

  slug: string;

  sku: string;

  image?: ProductImage;

  quantity: number;

  price: number;

  regularPrice: number;

  salePrice: number;

  stockStatus: string;

  stockQuantity: number | null;

  attributes: CartItemAttribute[];

  subtotal: number;

  total: number;
}

export interface CartCoupon {
  code: string;

  discount: number;
}

export interface CartTotals {
  subtotal: number;

  discount: number;

  shipping: number;

  tax: number;

  total: number;
}

export interface AddCartItemRequest {
  productId: number;

  quantity: number;

  variationId?: number;

  attributes?: Record<string, string>;
}

export interface UpdateCartItemRequest {
  key: string;

  quantity: number;
}

export interface ApplyCouponRequest {
  code: string;
}

export interface ShippingMethodRequest {
  methods: string[];
}
