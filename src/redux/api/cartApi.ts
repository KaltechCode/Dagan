import {
  AddCartItemRequest,
  ApplyCouponRequest,
  Cart,
  ShippingMethodRequest,
  UpdateCartItemRequest,
} from "@/types/cart";
import { baseApi } from "./baseApi";
import { cartService } from "@/services/cart.services";
import { executeQuery } from "@/libs/api/helper";

export const cartApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCart: builder.query<Cart, void>({
      queryFn() {
        return executeQuery(() => cartService.getCart());
      },

      providesTags: ["Cart"],
    }),

    addToCart: builder.mutation<Cart, AddCartItemRequest>({
      queryFn(body) {
        return executeQuery(() => cartService.addItem(body));
      },

      invalidatesTags: ["Cart"],
    }),

    updateCartItem: builder.mutation<Cart, UpdateCartItemRequest>({
      async queryFn(body) {
        return executeQuery(() => cartService.updateItem(body));
      },

      invalidatesTags: ["Cart"],
    }),

    removeCartItem: builder.mutation<Cart, string>({
      async queryFn(key) {
        return executeQuery(() => cartService.removeItem(key));
      },

      invalidatesTags: ["Cart"],
    }),

    applyCoupon: builder.mutation<Cart, ApplyCouponRequest>({
      async queryFn(body) {
        return executeQuery(() => cartService.applyCoupon(body));
      },

      invalidatesTags: ["Cart"],
    }),

    removeCoupon: builder.mutation<Cart, string>({
      async queryFn(code) {
        return executeQuery(() => cartService.removeCoupon(code));
      },

      invalidatesTags: ["Cart"],
    }),

    updateShippingMethod: builder.mutation<Cart, ShippingMethodRequest>({
      async queryFn(body) {
        return executeQuery(() => cartService.updateShippingMethod(body));
      },

      invalidatesTags: ["Cart"],
    }),
  }),

  overrideExisting: true,
});

export const {
  useGetCartQuery,
  useAddToCartMutation,
  useUpdateCartItemMutation,
  useRemoveCartItemMutation,
  useApplyCouponMutation,
  useRemoveCouponMutation,
  useUpdateShippingMethodMutation,
} = cartApi;
