// import { Cart } from "./cart";
// import { Customer, CustomerAddress } from "./customer";

// export interface UseCheckout {
//   checkout?: CheckoutData;

//   customer: Customer | null;

//   cart: Cart | null;

//   billing: CheckoutData["billing"];

//   shipping: CheckoutData["shipping"];

//   paymentMethods: CheckoutData["paymentMethods"];

//   shippingMethods: CheckoutData["shippingMethods"];

//   shipToDifferentAddress: boolean;

//   loading: boolean;

//   submitting: boolean;

//   error: boolean;

//   refetch(): void;

//   placeOrder(payload: CheckoutRequest): Promise<any>;
// }

// export interface CheckoutAddress {
//   first_name: string;
//   last_name: string;

//   company?: string;

//   address_1: string;
//   address_2?: string;

//   city: string;

//   state: string;

//   postcode: string;

//   country: string;

//   email: string;

//   phone: string;
// }

// export interface CheckoutFormValues {
//   billing: CheckoutAddress;

//   shipping: CheckoutAddress;

//   payment_method: string;

//   customer_note?: string;
// }

// export interface PaymentGateway {
//   id: string;

//   title: string;

//   description?: string;
// }

// export interface PaymentMethod {
//   id: string;

//   title: string;

//   description?: string;

//   icon?: string;

//   enabled: boolean;

//   supports: string[];
// }

// export interface CheckoutShippingMethod {
//   id: string;

//   instanceId: number;

//   methodId: string;

//   title: string;

//   cost: string;

//   selected: boolean;
// }

// export interface CheckoutOrderResponse {
//   orderId: number;

//   orderKey: string;

//   status: string;

//   paymentUrl: string;

//   redirectUrl: string;
// }

// export interface CheckoutRequest {
//   billing: CustomerAddress;

//   shipping: CustomerAddress;

//   shipToDifferentAddress: boolean;

//   shippingMethod: string;

//   paymentMethod: string;

//   customerNote?: string;

//   createAccount?: boolean;
// }

// export interface CheckoutData {
//   billing: CustomerAddress;

//   shipping: CustomerAddress;

//   shippingMethods: CheckoutShippingMethod[];

//   paymentMethods: PaymentMethod[];

//   shipToDifferentAddress: boolean;
// }

// export interface CheckoutResponse {
//   checkout: CheckoutData;
// }

import { Cart } from "./cart";

export interface CheckoutAddress {
  firstName: string;

  lastName: string;

  company?: string;

  address1: string;

  address2?: string;

  city: string;

  state: string;

  postcode: string;

  country: string;

  email: string;

  phone: string;
}

export interface CheckoutRequest {
  billing: CheckoutAddress;

  shipping: CheckoutAddress;

  paymentMethod: string;

  customerNote?: string;

  shipToDifferentAddress: boolean;
}

export interface PaymentGateway {
  id: string;

  title: string;

  description: string;

  enabled: boolean;

  supports: string[];
}

export interface CheckoutResponse {
  orderId: number;

  orderNumber: string;

  status: string;

  paymentRequired: boolean;

  paymentUrl?: string;

  redirectUrl: string;
}
export interface CheckoutState {
  cart: Cart;

  paymentMethods: PaymentGateway[];
}
