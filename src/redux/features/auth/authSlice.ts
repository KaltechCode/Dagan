import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { Customer } from "@/types/customer";

interface AuthState {
  user: Customer | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",

  initialState,

  reducers: {
    setUser(state, action: PayloadAction<Customer>) {
      state.user = action.payload;
      state.isAuthenticated = true;
    },

    updateUser(state, action: PayloadAction<Partial<Customer>>) {
      if (!state.user) {
        return;
      }

      state.user = {
        ...state.user,
        ...action.payload,
      };
    },

    clearUser(state) {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { setUser, updateUser, clearUser } = authSlice.actions;

export default authSlice.reducer;
