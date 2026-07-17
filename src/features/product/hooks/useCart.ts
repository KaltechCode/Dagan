"use client";

import { useCallback } from "react";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";

import { Product } from "@/entities/product/types/product";
import { ProductVariation } from "@/entities/product/types/variation";
import { SelectedOptions } from "@/entities/product/types/selected-option";
import { normalizeCartItem } from "@/libs/product/normalizeHelper";
import {
  selectCartItems,
  selectCartQuantity,
  selectCartSubtotal,
} from "@/redux/features/cart/Model/selectors";
import {
  addToCart,
  clearCart,
  removeFromCart,
  updateQuantity,
} from "@/redux/features/cart/cartSlice";

export function useCart() {
  const dispatch = useAppDispatch();

  const items = useAppSelector(selectCartItems);

  const quantity = useAppSelector(selectCartQuantity);

  const subtotal = useAppSelector(selectCartSubtotal);

  const add = useCallback(
    (
      product: Product,
      variation: ProductVariation | undefined,
      qty: number,
      attributes: SelectedOptions,
    ) => {
      dispatch(
        addToCart(
          normalizeCartItem({
            product,
            variation,
            quantity: qty,
            attributes,
          }),
        ),
      );
    },
    [dispatch],
  );

  return {
    items,

    quantity,

    subtotal,

    add,

    remove: (productId: number, variationId?: number) =>
      dispatch(
        removeFromCart({
          productId,
          variationId,
        }),
      ),

    update: (
      productId: number,
      variationId: number | undefined,
      quantity: number,
    ) =>
      dispatch(
        updateQuantity({
          productId,
          variationId,
          quantity,
        }),
      ),

    clear: () => dispatch(clearCart()),
  };
}
