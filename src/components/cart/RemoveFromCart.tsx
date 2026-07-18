"use client";

import { Trash2 } from "lucide-react";

import { Button } from "@/components/ui/shared/Button";
import { useCart } from "@/hooks/cart/useCart";

interface Props {
  productId: number;

  variationId?: number;
}

export default function RemoveFromCartButton({
  productId,
  variationId,
}: Props) {
  const { remove } = useCart();

  return (
    <Button variant="ghost" size="md" onClick={() => remove(String(productId))}>
      <Trash2 size={18} />
    </Button>
  );
}
