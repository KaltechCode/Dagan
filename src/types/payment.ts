import { CustomerAddress } from "./customer";

export interface PaymentMethod {
  id: string;

  title: string;

  description?: string;

  icon?: string;

  enabled: boolean;

  supports: string[];
}

export interface CheckoutShippingMethod {
  id: string;

  instanceId: number;

  methodId: string;

  title: string;

  cost: string;

  selected: boolean;
}

export interface CheckoutOrderResponse {
  orderId: number;

  orderKey: string;

  status: string;

  paymentUrl: string;

  redirectUrl: string;
}

export interface CheckoutRequest {
  billing: CustomerAddress;

  shipping: CustomerAddress;

  shipToDifferentAddress: boolean;

  shippingMethod: string;

  paymentMethod: string;

  customerNote?: string;

  createAccount?: boolean;
}

export interface CheckoutData {
  billing: CustomerAddress;

  shipping: CustomerAddress;

  shippingMethods: CheckoutShippingMethod[];

  paymentMethods: PaymentMethod[];

  shipToDifferentAddress: boolean;
}

export interface CheckoutResponse {
  checkout: CheckoutData;
}
