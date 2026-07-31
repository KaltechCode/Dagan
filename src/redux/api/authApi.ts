import { API } from "@/libs/api/endpoints";
import { baseApi } from "./baseApi";

import type {
  AuthResponse,
  RegisterRequest,
  LoginRequest,
  ForgotPasswordRequest,
  ResetPasswordRequest,
  ChangePasswordRequest,
  LogoutRequest,
  EmailResponse,
} from "@/types/auth";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation<AuthResponse, RegisterRequest>({
      query: (body) => ({
        url: API.AUTH.REGISTER,
        method: "POST",
        body,
      }),

      invalidatesTags: ["Customer"],
    }),

    login: builder.mutation<AuthResponse, LoginRequest>({
      query: (body) => ({
        url: API.AUTH.LOGIN,
        method: "POST",
        body,
      }),

      invalidatesTags: ["Customer"],
    }),

    logout: builder.mutation<void, LogoutRequest>({
      query: (body) => ({
        url: API.AUTH.LOGOUT,
        method: "POST",
        body,
      }),

      invalidatesTags: ["Customer"],
    }),

    refresh: builder.mutation<AuthResponse, void>({
      query: () => ({
        url: API.AUTH.REFRESH,
        method: "POST",
      }),
    }),

    forgotPassword: builder.mutation<void, ForgotPasswordRequest>({
      query: (body) => ({
        url: API.AUTH.FORGOT_PASSWORD,
        method: "POST",
        body,
      }),
    }),

    resetPassword: builder.mutation<void, ResetPasswordRequest>({
      query: (body) => ({
        url: API.AUTH.RESET_PASSWORD,
        method: "POST",
        body,
      }),
    }),

    changePassword: builder.mutation<void, ChangePasswordRequest>({
      query: (body) => ({
        url: API.AUTH.CHANGE_PASSWORD,
        method: "POST",
        body,
      }),

      invalidatesTags: ["Customer"],
    }),

    verifyEmail: builder.mutation<
      EmailResponse<{ verified: boolean }>,
      { token: string }
    >({
      query: ({ token }) => ({
        url: API.AUTH.VERIFY_EMAIL,
        method: "GET",
        params: {
          token,
        },
      }),
    }),

    resendVerification: builder.mutation<
      EmailResponse<boolean>,
      { email: string }
    >({
      query: (body) => ({
        url: API.AUTH.RESEND_VERIFICATION,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useRegisterMutation,

  useLoginMutation,

  useLogoutMutation,

  useRefreshMutation,

  useForgotPasswordMutation,

  useResetPasswordMutation,

  useChangePasswordMutation,

  useVerifyEmailMutation,

  useResendVerificationMutation,
} = authApi;
