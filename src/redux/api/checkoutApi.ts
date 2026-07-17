// import type {
//   CheckoutRequest,
//   CheckoutResponse,
//   CheckoutOrderResponse,
// } from "@/types/payment";
// import { baseApi } from "./baseApi";
// import { API } from "@/libs/api/endpoints";
// import { PaymentGateway } from "@/types/checkout";

// export const checkoutApi = baseApi.injectEndpoints({
//   endpoints: (builder) => ({
//     getCheckout: builder.query<CheckoutResponse, void>({
//       query: () => ({
//         url: API.CHECKOUT,
//       }),

//       providesTags: ["Checkout"],
//     }),

//     createOrder: builder.mutation<CheckoutOrderResponse, CheckoutRequest>({
//       query: (body) => ({
//         url: API.CHECKOUT,

//         method: "POST",

//         body,
//       }),

//       invalidatesTags: ["Cart", "Orders", "Customer"],
//     }),

//     getOrder: builder.query<CheckoutOrderResponse, number>({
//       query: (id) => ({
//         url: `${API.CHECKOUT_ORDER}/${id}`,
//       }),

//       providesTags: (result, error, id) => [
//         {
//           type: "Orders",
//           id,
//         },
//       ],
//     }),

//     getCheckoutSuccess: builder.query<CheckoutOrderResponse, number>({
//       query: (id) => ({
//         url: `${API.CHECKOUT_SUCCESS}/${id}`,
//       }),

//       providesTags: (result, error, id) => [
//         {
//           type: "Orders",
//           id,
//         },
//       ],
//     }),
//     getPaymentGateways: builder.query<PaymentGateway[], void>({
//       query: () => ({
//         url: API.CHECKOUT_PAYMENT_GATEWAYS,
//       }),

//       providesTags: ["Checkout"],
//     }),
//   }),

//   overrideExisting: false,
// });

// export const {
//   useGetCheckoutQuery,

//   useLazyGetCheckoutQuery,

//   useCreateOrderMutation,

//   useGetOrderQuery,

//   useGetCheckoutSuccessQuery,
//   useGetPaymentGatewaysQuery,
// } = checkoutApi;

import {
  CheckoutRequest,
  CheckoutResponse,
  PaymentGateway,
} from "@/types/checkout";
import { baseApi } from "./baseApi";
import { checkoutService } from "@/services/checkout";
import { ApiError } from "./baseQuery";
import { executeQuery } from "@/libs/api/helper";

export const checkoutApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPaymentMethods: builder.query<PaymentGateway[], void>({
      async queryFn() {
        return executeQuery(() => checkoutService.getPaymentMethods());
      },

      providesTags: ["Checkout"],
    }),

    checkout: builder.mutation<CheckoutResponse, CheckoutRequest>({
      async queryFn(body) {
        return executeQuery(() => checkoutService.checkout(body));
      },

      invalidatesTags: ["Cart", "Orders", "Customer"],
    }),
  }),

  overrideExisting: false,
});

export const { useGetPaymentMethodsQuery, useCheckoutMutation } = checkoutApi;
