"use client";

import CartItem from "./CartItems";

import { useCart } from "../../hooks/cart/useCart";

import EmptyCart from "./EmptyCart";

interface Props {
  variant?: "cart" | "mini" | "checkout";
}

export default function CartList({ variant = "cart" }: Props) {
  const { items } = useCart();

  if (!items.length) {
    return <EmptyCart />;
  }

  return (
    <div>
      {items.map((item) => (
        <CartItem key={item.key} item={item} variant={variant} />
      ))}
    </div>
  );
}
