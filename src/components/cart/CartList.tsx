"use client";

import { useCart } from "../../hooks/cart/useCart";
import CartItem from "./CartItem";

import EmptyCart from "./EmptyCart";

interface Props {
  variant?: "cart" | "mini" | "checkout";
}

export default function CartList({ variant = "cart" }: Props) {
  const { cart } = useCart();

  if (!cart?.items.length) {
    return <EmptyCart />;
  }

  return (
    <div>
      {cart.items?.map((item) => (
        <CartItem key={item.key} item={item} />
      ))}
    </div>
  );
}
