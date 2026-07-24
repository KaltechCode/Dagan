export interface OrderAddress {
  first_name: string;
  last_name: string;
  company: string;
  address_1: string;
  address_2: string;
  city: string;
  state: string;
  postcode: string;
  country: string;
  email?: string;
  phone?: string;
}

export interface OrderItem {
  id: number;
  product_id: number;
  variation_id: number;
  name: string;
  sku: string;
  quantity: number;
  price: string;
  subtotal: string;
  total: string;
  image?: string;
}

export interface OrderNote {
  id: number;
  note: string;
  author: string;
  created_at: string;
  customer_note: boolean;
}

export type OrderStatus =
  | "pending"
  | "processing"
  | "on-hold"
  | "completed"
  | "cancelled"
  | "refunded"
  | "failed";

export interface Order {
  id: number;
  number: string;

  status: OrderStatus;

  currency: string;

  subtotal: string;
  discount_total: string;
  shipping_total: string;
  total_tax: string;
  total: string;

  payment_method: string;
  payment_method_title: string;

  created_at: string;
  updated_at: string;

  item_count: number;

  billing: OrderAddress;
  shipping: OrderAddress;

  items: OrderItem[];

  notes?: OrderNote[];
}

export interface OrdersResponse {
  items: Order[];
  total: number;
}

export interface CancelOrderResponse {
  success: boolean;
  message: string;
  order: Order;
}
