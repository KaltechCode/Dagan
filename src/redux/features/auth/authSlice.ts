import { Customer } from "@/types/auths";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
  user: Customer | null;
  authenticated: boolean;
  initialized: boolean;
  loading: boolean;
}

const initialState: AuthState = {
  user: null,
  authenticated: false,
  initialized: false,
  loading: false,
};

const authSlice = createSlice({
  name: "auth",

  initialState,

  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },

    setInitialized(state, action: PayloadAction<boolean>) {
      state.initialized = action.payload;
    },

    setUser(state, action: PayloadAction<Customer | null>) {
      state.user = action.payload;
      state.authenticated = !!action.payload;
      state.initialized = true;
      state.loading = false;
    },

    clearUser(state) {
      state.user = null;
      state.authenticated = false;
      state.initialized = true;
      state.loading = false;
    },
  },
});

export const { setLoading, setInitialized, setUser, clearUser } =
  authSlice.actions;

export default authSlice.reducer;
