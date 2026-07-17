import { RootState } from "@/redux/store";

export const selectAuth = (state: RootState) => state.auth;

export const selectUser = (state: RootState) => state.auth.user;

export const selectAuthenticated = (state: RootState) =>
  state.auth.authenticated;

export const selectAuthLoading = (state: RootState) => state.auth.loading;

export const selectInitialized = (state: RootState) => state.auth.initialized;
