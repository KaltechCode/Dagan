"use client";

import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;

  disabled?: boolean;

  onPlaceOrder: () => Promise<void>;
}

export default function PlaceOrderButton({
  isLoading,
  disabled,
  onPlaceOrder,
  children = "Place Order",
  ...props
}: Props) {
  async function handleClick() {
    if (disabled || isLoading) {
      return;
    }

    await onPlaceOrder();
  }

  return (
    <button
      {...props}
      type="button"
      disabled={disabled || isLoading}
      onClick={handleClick}
    >
      {isLoading ? "Placing Order..." : children}
    </button>
  );
}

interface Prop extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;

  disabled?: boolean;
}

export function PlaceOrderBtnForm({
  isLoading,
  disabled,
  children = "Place Order",
  ...props
}: Prop) {
  return (
    <button {...props} type="submit" disabled={disabled || isLoading}>
      {isLoading ? "Placing Order..." : children}
    </button>
  );
}
