import { RootState } from "@/redux/store";

export const selectCartDrawerOpen = (state: RootState) =>
  state.cart.isDrawerOpen;

export const selectLastAddedProduct = (state: RootState) =>
  state.cart.lastAddedProductId;
