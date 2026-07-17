import { SelectedOptions } from "@/types/product";

export interface CartItem {
  productId: number;

  variationId?: number;

  name: string;

  slug: string;

  sku: string;

  image: string;

  price: number;

  regularPrice: number;

  salePrice: number;

  quantity: number;

  stockQuantity: number;

  stockStatus: string;

  attributes: SelectedOptions;
}

export interface CartState {
  items: CartItem[];

  subtotal: number;

  discount: number;

  shipping: number;

  tax: number;

  total: number;

  coupon: string | null;
}
