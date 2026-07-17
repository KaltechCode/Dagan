"use client";

import {
  useAddToCartMutation,
  useApplyCouponMutation,
  useGetCartQuery,
  useRemoveCartItemMutation,
  useRemoveCouponMutation,
  useUpdateCartItemMutation,
  useUpdateShippingMutation,
} from "@/redux/api/cartApi";

export function useCart() {
  const cart = useGetCartQuery();

  const [addItem, addState] = useAddToCartMutation();

  const [updateItem, updateState] = useUpdateCartItemMutation();

  const [removeItem, removeState] = useRemoveCartItemMutation();

  const [applyCoupon, couponState] = useApplyCouponMutation();

  const [removeCoupon, removeCouponState] = useRemoveCouponMutation();

  const [updateShipping, shippingState] = useUpdateShippingMutation();

  async function add(
    productId: number,
    quantity = 1,
    variationId?: number,
    attributes?: Record<string, string>,
  ) {
    return addItem({
      productId,
      quantity,
      variationId,
      attributes,
    }).unwrap();
  }

  async function update(key: string, quantity: number) {
    return updateItem({
      key,
      quantity,
    }).unwrap();
  }

  async function remove(key: string) {
    return removeItem(key).unwrap();
  }

  async function apply(code: string) {
    return applyCoupon({
      code,
    }).unwrap();
  }

  async function removeCouponByCode(code: string) {
    return removeCoupon(code).unwrap();
  }

  return {
    cart: cart.data,

    isLoading: cart.isLoading,

    isFetching: cart.isFetching,

    isError: cart.isError,

    error: cart.error,

    refetch: cart.refetch,

    addItem,

    updateItem,

    removeItem,

    applyCoupon,

    add,

    update,

    remove,

    apply,

    removeCouponCode: removeCouponByCode,

    removeCoupon,

    updateShipping,

    isAdding: addState.isLoading,

    isUpdating: updateState.isLoading,

    isRemoving: removeState.isLoading,

    isApplyingCoupon: couponState.isLoading,

    isRemovingCoupon: removeCouponState.isLoading,

    isUpdatingShipping: shippingState.isLoading,
  };
}
