"use client";

import { useMeQuery } from "@/redux/api/authApi";
import { PropsWithChildren } from "react";

export default function AuthProvider({ children }: PropsWithChildren) {
  useMeQuery();

  return children;
}
