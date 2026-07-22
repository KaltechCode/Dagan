"use client";

import { Button } from "@/components/ui/shared/Button";

interface Props {
  loading: boolean;

  disabled?: boolean;

  onClick(): void;
}

export default function BuyNowButton({ loading, disabled, onClick }: Props) {
  return (
    <Button
      variant="secondary"
      loading={loading}
      disabled={disabled}
      onClick={onClick}
      size="md"
      className="px-3!"
    >
      Buy Now
    </Button>
  );
}
