import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CartUIState {
  isDrawerOpen: boolean;

  lastAddedProductId?: number;
}

const initialState: CartUIState = {
  isDrawerOpen: false,
};

const cartSlice = createSlice({
  name: "cart",

  initialState,

  reducers: {
    openCart(state) {
      state.isDrawerOpen = true;
    },

    closeCart(state) {
      state.isDrawerOpen = false;
    },

    toggleCart(state) {
      state.isDrawerOpen = !state.isDrawerOpen;
    },

    setLastAddedProduct(state, action: PayloadAction<number | undefined>) {
      state.lastAddedProductId = action.payload;
    },

    clearLastAddedProduct(state) {
      state.lastAddedProductId = undefined;
    },
  },
});

export const {
  openCart,
  closeCart,
  toggleCart,
  setLastAddedProduct,
  clearLastAddedProduct,
} = cartSlice.actions;

export default cartSlice.reducer;
