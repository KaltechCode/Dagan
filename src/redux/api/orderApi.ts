import { API } from "@/libs/api/endpoints";
import type {
  OrderQuery,
  OrderResponse,
  OrdersResponse,
  OrderNote,
} from "../../types/order";
import { baseApi } from "./baseApi";

export const ordersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getOrders: builder.query<OrdersResponse, OrderQuery | void>({
      query: (params) => ({
        url: API.ORDERS,
        params,
      }),

      providesTags: (result) =>
        result
          ? [
              ...result.orders.map((order) => ({
                type: "Orders" as const,
                id: order.id,
              })),
              {
                type: "Orders",
                id: "LIST",
              },
            ]
          : [
              {
                type: "Orders",
                id: "LIST",
              },
            ],
    }),

    getOrder: builder.query<OrderResponse, number>({
      query: (id) => ({
        url: `${API.ORDER}/${id}`,
      }),

      providesTags: (result, error, id) => [
        {
          type: "Orders",
          id,
        },
      ],
    }),

    cancelOrder: builder.mutation<OrderResponse, number>({
      query: (id) => ({
        url: `${API.ORDER_CANCEL}/${id}/cancel`,
        method: "POST",
      }),

      invalidatesTags: (result, error, id) => [
        {
          type: "Orders",
          id,
        },
        {
          type: "Orders",
          id: "LIST",
        },
      ],
    }),

    payOrder: builder.mutation<
      {
        paymentUrl: string;
      },
      number
    >({
      query: (id) => ({
        url: `${API.ORDER_PAY}/${id}/pay`,
        method: "POST",
      }),
    }),

    getOrderNotes: builder.query<OrderNote[], number>({
      query: (id) => ({
        url: `${API.ORDER}/${id}/notes`,
      }),

      providesTags: (result, error, id) => [
        {
          type: "Orders",
          id,
        },
      ],
    }),
  }),

  overrideExisting: false,
});

export const {
  useGetOrdersQuery,

  useLazyGetOrdersQuery,

  useGetOrderQuery,

  useLazyGetOrderQuery,

  useCancelOrderMutation,

  usePayOrderMutation,

  useGetOrderNotesQuery,
} = ordersApi;
