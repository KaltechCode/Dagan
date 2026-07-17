"use client";

import { Trash2 } from "lucide-react";

import { Button } from "@/components/ui/shared/Button";
import { useCart } from "../../features/product/hooks/useCart";

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
    <Button
      variant="ghost"
      size="md"
      onClick={() => remove(productId, variationId)}
    >
      <Trash2 size={18} />
    </Button>
  );
}
