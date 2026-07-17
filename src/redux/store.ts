import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";

import cartReducer from "./features/cart/cartSlice";
import authReducer from "./features/auth/authSlice";
import wishlistReducer from "./features/wishlist/Wishlist.Slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,

    [baseApi.reducerPath]: baseApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
