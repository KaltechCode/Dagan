// "use client";

// import { useMemo } from "react";

// import {
//   useCreateOrderMutation,
//   useGetCheckoutQuery,
// } from "@/redux/api/checkoutApi";

// import type { CheckoutRequest } from "@/types/payment";
// import { useCustomer } from "../customer/useCustomer";
// import { useCart } from "../cart/useCart";

// export function useCheckout() {
//   const checkoutQuery = useGetCheckoutQuery();

//   const customer = useCustomer();

//   const cart = useCart();

//   const [createOrder, createOrderState] = useCreateOrderMutation();

//   const checkout = checkoutQuery.data?.checkout;

//   return useMemo(
//     () => ({
//       checkout,

//       customer: customer.customer,

//       cart: cart.cart,

//       billing: checkout?.billing ?? customer.customer?.billing,

//       shipping: checkout?.shipping ?? customer.customer?.shipping,

//       paymentMethods: checkout?.paymentMethods ?? [],

//       shippingMethods: checkout?.shippingMethods ?? [],

//       shipToDifferentAddress: checkout?.shipToDifferentAddress ?? false,

//       loading: checkoutQuery.isLoading || customer.loading || cart.loading,

//       submitting: createOrderState.isLoading,

//       error: checkoutQuery.isError,

//       refetch: checkoutQuery.refetch,

//       placeOrder: (payload: CheckoutRequest) => createOrder(payload).unwrap(),
//     }),
//     [checkout, customer, cart, checkoutQuery, createOrder, createOrderState],
//   );
// }

"use client";

import {
  useCheckoutMutation,
  useGetPaymentMethodsQuery,
} from "@/redux/api/checkoutApi";
import { CheckoutRequest } from "@/types/checkout";

export function useCheckout() {
  const paymentMethods = useGetPaymentMethodsQuery();

  const [checkout, checkoutState] = useCheckoutMutation();

  async function placeOrder(body: CheckoutRequest) {
    return checkout(body).unwrap();
  }

  return {
    paymentMethods: paymentMethods.data ?? [],

    isLoadingPaymentMethods: paymentMethods.isLoading,

    isFetchingPaymentMethods: paymentMethods.isFetching,

    paymentMethodsError: paymentMethods.error,

    refetchPaymentMethods: paymentMethods.refetch,

    placeOrder,

    isPlacingOrder: checkoutState.isLoading,

    checkoutError: checkoutState.error,
  };
}
