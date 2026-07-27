import { useCallback } from "react";

import {
  useRegisterMutation,
  useLoginMutation,
  useLogoutMutation,
  useRefreshMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
  useChangePasswordMutation,
} from "@/redux/api/authApi";

import {
  selectUser,
  selectIsAuthenticated,
} from "@/redux/features/auth/authSelectors";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";

import { tokenService } from "@/services/token.services";

import type {
  RegisterRequest,
  LoginRequest,
  ForgotPasswordRequest,
  ResetPasswordRequest,
  ChangePasswordRequest,
} from "@/types/auth";
import { clearUser, setUser } from "@/redux/features/auth/authSlice";

export function useAuth() {
  const dispatch = useAppDispatch();

  const user = useAppSelector(selectUser);

  const isAuthenticated = useAppSelector(selectIsAuthenticated);

  const [registerMutation, registerState] = useRegisterMutation();

  const [loginMutation, loginState] = useLoginMutation();

  const [logoutMutation, logoutState] = useLogoutMutation();

  const [refreshMutation] = useRefreshMutation();

  const [forgotPasswordMutation] = useForgotPasswordMutation();

  const [resetPasswordMutation] = useResetPasswordMutation();

  const [changePasswordMutation] = useChangePasswordMutation();

  const register = useCallback(
    async (payload: RegisterRequest) => {
      const response = await registerMutation(payload).unwrap();

      const { customer, access_token, refresh_token } = response;

      if (access_token && refresh_token) {
        tokenService.setTokens(access_token, refresh_token);
      }

      dispatch(setUser(customer));

      return response;
    },
    [dispatch, registerMutation],
  );

  const login = useCallback(
    async (payload: LoginRequest) => {
      const response = await loginMutation(payload).unwrap();

      const { customer, access_token, refresh_token } = response;

      if (access_token && refresh_token) {
        tokenService.setTokens(access_token, refresh_token);
      }

      dispatch(setUser(customer));

      return response;
    },
    [dispatch, loginMutation],
  );

  const logout = useCallback(async () => {
    const refreshToken = tokenService.getRefreshToken();

    if (refreshToken) {
      await logoutMutation({
        refresh_token: refreshToken,
      }).unwrap();
    }

    tokenService.clearTokens();

    dispatch(clearUser());
  }, [dispatch, logoutMutation]);

  const refresh = useCallback(async () => {
    const response = await refreshMutation().unwrap();

    const { customer, access_token, refresh_token } = response;

    if (access_token && refresh_token) {
      tokenService.setTokens(access_token, refresh_token);
    }

    dispatch(setUser(customer));

    return response;
  }, [dispatch, refreshMutation]);

  const forgotPassword = useCallback(
    async (payload: ForgotPasswordRequest) => {
      return forgotPasswordMutation(payload).unwrap();
    },
    [forgotPasswordMutation],
  );

  const resetPassword = useCallback(
    async (payload: ResetPasswordRequest) => {
      return resetPasswordMutation(payload).unwrap();
    },
    [resetPasswordMutation],
  );

  const changePassword = useCallback(
    async (payload: ChangePasswordRequest) => {
      return changePasswordMutation(payload).unwrap();
    },
    [changePasswordMutation],
  );

  return {
    user,
    isAuthenticated,

    register,
    login,
    logout,
    refresh,
    forgotPassword,
    resetPassword,
    changePassword,

    isRegistering: registerState.isLoading,
    isLoggingIn: loginState.isLoading,
    isLoggingOut: logoutState.isLoading,

    registerError: registerState.error,
    loginError: loginState.error,
    logoutError: logoutState.error,
  };
}
