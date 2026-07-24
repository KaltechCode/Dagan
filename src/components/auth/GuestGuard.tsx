"use client";

import { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";

import { tokenService } from "@/services/token.services";
import { useAppSelector } from "@/redux/hooks";
import { selectIsAuthenticated } from "@/redux/features/auth/authSelectors";

interface GuestGuardProps {
  children: ReactNode;
  redirectTo?: string;
}

export default function GuestGuard({
  children,
  redirectTo = "/account",
}: GuestGuardProps) {
  const router = useRouter();

  const isAuthenticated = useAppSelector(selectIsAuthenticated);

  const hasToken = tokenService.hasAccessToken();

  useEffect(() => {
    if (hasToken || isAuthenticated) {
      router.replace(redirectTo);
    }
  }, [hasToken, isAuthenticated, redirectTo, router]);

  if (hasToken || isAuthenticated) {
    return null;
  }

  return <>{children}</>;
}
