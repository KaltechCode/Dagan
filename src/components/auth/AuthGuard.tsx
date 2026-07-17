"use client";

import { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/auth/useAuth";

interface AuthGuardProps {
  children: ReactNode;
  fallback?: ReactNode;
  redirectTo?: string;
}

export default function AuthGuard({
  children,
  fallback = null,
  redirectTo = "/login",
}: AuthGuardProps) {
  const router = useRouter();

  const { authenticated, loading, initialized } = useAuth();

  useEffect(() => {
    if (initialized && !loading && !authenticated) {
      router.replace(redirectTo);
    }
  }, [authenticated, initialized, loading, redirectTo, router]);

  if (!initialized || loading) {
    return fallback;
  }

  if (!authenticated) {
    return null;
  }

  return <>{children}</>;
}
