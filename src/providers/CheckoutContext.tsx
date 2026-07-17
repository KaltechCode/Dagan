import { createContext } from "react";

import { useCheckout } from "@/hooks/checkout/useCheckout";

export type CheckoutContextValue = ReturnType<typeof useCheckout>;

export const CheckoutContext = createContext<CheckoutContextValue | null>(null);
