"use client";

import { Button } from "@/components/ui/shared/Button";

interface Props {
  label: string;

  onRemove(): void;
}

export default function FilterChip({ label, onRemove }: Props) {
  return (
    <Button size="sm" variant="outline" onClick={onRemove}>
      {label} ×
    </Button>
  );
}
