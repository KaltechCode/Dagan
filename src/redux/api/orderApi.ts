import { executeQuery } from "@/libs/api/helper";
import { baseApi } from "./baseApi";

import type {
  OrderNote,
  OrderQuery,
  OrderResponse,
  OrdersResponse,
} from "@/types/order";
import { orderService } from "@/services/order.services";

export const ordersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getOrders: builder.query<OrdersResponse, OrderQuery | undefined>({
      queryFn(query) {
        return executeQuery(() => orderService.getOrders(query));
      },

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
      queryFn(id) {
        return executeQuery(() => orderService.getOrder(id));
      },

      providesTags: (_, __, id) => [
        {
          type: "Orders",
          id,
        },
      ],
    }),

    cancelOrder: builder.mutation<OrderResponse, number>({
      queryFn(id) {
        return executeQuery(() => orderService.cancelOrder(id));
      },

      invalidatesTags: (_, __, id) => [
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

    payOrder: builder.mutation<{ paymentUrl: string }, number>({
      queryFn(id) {
        return executeQuery(() => orderService.payOrder(id));
      },
    }),

    getOrderNotes: builder.query<OrderNote[], number>({
      queryFn(id) {
        return executeQuery(() => orderService.getOrderNotes(id));
      },

      providesTags: (_, __, id) => [
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
