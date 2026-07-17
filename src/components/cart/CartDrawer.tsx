"use client";

import MiniCart from "./MiniCart";

interface CartDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function CartDrawer({ open, onOpenChange }: CartDrawerProps) {
  return (
    <Drawer
      open={open}
      onOpenChange={onOpenChange}
      side="right"
      title="Shopping Cart"
      className="w-full max-w-md"
    >
      <MiniCart />
    </Drawer>
  );
}
