"use client";

import { CheckoutContext } from "@/providers/CheckoutContext";
import { useContext } from "react";

export function useCheckoutContext() {
  const context = useContext(CheckoutContext);

  if (!context) {
    throw new Error("useCheckoutContext must be used inside CheckoutProvider.");
  }

  return context;
}
