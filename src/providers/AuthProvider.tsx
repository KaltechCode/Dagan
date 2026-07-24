"use client";

import { useGetProfileQuery } from "@/redux/api/customerApi";
import { clearUser, setUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { tokenService } from "@/services/token.services";
import { useEffect, type ReactNode } from "react";

interface AuthProviderProps {
  children: ReactNode;
}

export default function AuthProvider({ children }: AuthProviderProps) {
  const dispatch = useAppDispatch();

  const hasAccessToken = tokenService.hasAccessToken();

  const {
    data: customer,
    isSuccess,
    isError,
    isLoading,
  } = useGetProfileQuery(undefined, {
    skip: !hasAccessToken,
  });

  useEffect(() => {
    if (!hasAccessToken) {
      dispatch(clearUser());
      return;
    }

    if (isSuccess && customer) {
      dispatch(setUser(customer));
    }

    if (isError) {
      tokenService.clearTokens();
      dispatch(clearUser());
    }
  }, [hasAccessToken, customer, isSuccess, isError, dispatch]);

  /**
   * Prevent UI flicker while restoring authentication.
   */
  if (hasAccessToken && isLoading) {
    return null;
  }

  return <>{children}</>;
}
