"use client";

import { PropsWithChildren } from "react";

import { CheckoutContext } from "./CheckoutContext";
import { useCheckout } from "@/hooks/checkout/useCheckout";

export default function CheckoutProvider({ children }: PropsWithChildren) {
  const checkout = useCheckout();

  return (
    <CheckoutContext.Provider value={checkout}>
      {children}
    </CheckoutContext.Provider>
  );
}
