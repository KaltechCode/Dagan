import { CartTotals } from "./cart";
import { CustomerAddress } from "./customer";

export interface CommerceItemAttribute {
  id?: number;

  name: string;

  option: string;
}

export interface CommerceItemImage {
  id?: number;

  src: string;

  alt?: string;
}

export interface CommerceItem {
  productId: number;

  variationId?: number;

  sku?: string;

  slug: string;

  name: string;

  permalink?: string;

  image: CommerceItemImage;

  attributes: CommerceItemAttribute[];

  price: string;

  regularPrice?: string;

  salePrice?: string;
}

export type OrderStatus =
  | "pending"
  | "processing"
  | "completed"
  | "cancelled"
  | "failed"
  | "on-hold"
  | "refunded";

export interface OrderItem extends CommerceItem {
  id: number;

  quantity: number;

  refundedQuantity: number;

  subtotal: string;

  subtotalTax: string;

  total: string;

  totalTax: string;
}

export interface OrderNote {
  id: number;

  note: string;

  customerNote: boolean;

  createdAt: string;
}

export interface CancelOrderRequest {
  orderId: number;
}

export interface PayOrderRequest {
  orderId: number;
}

export interface Order {
  id: number;

  number: string;

  status: OrderStatus;

  createdAt: string;

  paymentMethod: string;

  paymentMethodTitle: string;

  billing: CustomerAddress;

  shipping: CustomerAddress;

  items: OrderItem[];

  totals: CartTotals;

  customerNote?: string;
}

export interface OrderResponse {
  order: Order;
}

export interface OrdersResponse {
  orders: Order[];

  total: number;

  page: number;

  pages: number;
}

export interface OrderQuery {
  page?: number;

  perPage?: number;

  status?: OrderStatus;

  search?: string;

  from?: string;

  to?: string;
}

export interface StatusDefinition {
  label: string;

  className: string;
}
