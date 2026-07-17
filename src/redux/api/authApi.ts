import { API } from "@/libs/api/endpoints";
import type {
  AuthResponse,
  ForgotPasswordRequest,
  LoginRequest,
  RegisterRequest,
  ResetPasswordRequest,
  UpdatePasswordRequest,
  UpdateProfileRequest,
} from "../../types/auths";
import { baseApi } from "./baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<AuthResponse, LoginRequest>({
      query: (body) => ({
        url: API.LOGIN,
        method: "POST",
        body,
      }),

      invalidatesTags: ["Customer"],
    }),

    register: builder.mutation<AuthResponse, RegisterRequest>({
      query: (body) => ({
        url: API.REGISTER,
        method: "POST",
        body,
      }),

      invalidatesTags: ["Customer"],
    }),

    logout: builder.mutation<void, void>({
      query: () => ({
        url: API.LOGOUT,
        method: "POST",
      }),

      invalidatesTags: ["Customer", "Cart", "Wishlist", "Orders"],
    }),

    me: builder.query<AuthResponse, void>({
      query: () => ({
        url: API.ME,
      }),

      providesTags: ["Customer"],
    }),

    updateProfile: builder.mutation<AuthResponse, UpdateProfileRequest>({
      query: (body) => ({
        url: API.PROFILE,
        method: "PUT",
        body,
      }),

      invalidatesTags: ["Customer"],
    }),

    updatePassword: builder.mutation<void, UpdatePasswordRequest>({
      query: (body) => ({
        url: API.PASSWORD,
        method: "PUT",
        body,
      }),
    }),

    forgotPassword: builder.mutation<void, ForgotPasswordRequest>({
      query: (body) => ({
        url: API.FORGOT_PASSWORD,
        method: "POST",
        body,
      }),
    }),

    resetPassword: builder.mutation<void, ResetPasswordRequest>({
      query: (body) => ({
        url: API.RESET_PASSWORD,
        method: "POST",
        body,
      }),
    }),

    refreshSession: builder.mutation<AuthResponse, void>({
      query: () => ({
        url: API.REFRESH_TOKEN,
        method: "POST",
      }),

      invalidatesTags: ["Customer"],
    }),
  }),

  overrideExisting: false,
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useLogoutMutation,

  useMeQuery,
  useLazyMeQuery,

  useUpdateProfileMutation,
  useUpdatePasswordMutation,

  useForgotPasswordMutation,
  useResetPasswordMutation,

  useRefreshSessionMutation,
} = authApi;
