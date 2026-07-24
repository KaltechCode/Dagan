import { executeQuery } from "@/libs/api/helper";
import { baseApi } from "./baseApi";

import type { Order } from "@/types/order";
import { orderService } from "@/services/order.services";

export const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    /**
     * Get authenticated customer's orders
     */
    getOrders: builder.query<Order[], void>({
      queryFn: () => executeQuery(() => orderService.getOrders()),

      providesTags: ["Orders"],
    }),

    /**
     * Get a single order
     */
    getOrder: builder.query<Order, number | string>({
      queryFn: (id) => executeQuery(() => orderService.getOrder(id)),

      providesTags: (_result, _error, id) => [{ type: "Orders", id }],
    }),

    /**
     * Cancel an order
     */
    cancelOrder: builder.mutation<Order, number | string>({
      queryFn: (id) => executeQuery(() => orderService.cancelOrder(id)),

      invalidatesTags: (_result, _error, id) => [
        "Orders",
        { type: "Orders", id },
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
} = orderApi;
