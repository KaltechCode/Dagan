"use client";

import { Button } from "@/components/ui/shared/Button";

interface Props {
  loading: boolean;

  disabled?: boolean;

  buyClass?: string;

  onClick(): void;
}

export default function BuyNowButton({
  loading,
  disabled,
  onClick,
  buyClass,
}: Props) {
  return (
    <Button
      variant="secondary"
      loading={loading}
      disabled={disabled}
      onClick={onClick}
      size="md"
      className={`${buyClass}`}
    >
      Buy Now
    </Button>
  );
}
