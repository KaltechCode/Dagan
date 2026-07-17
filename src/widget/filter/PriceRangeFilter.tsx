"use client";

import { Button } from "@/components/ui/shared/Button";
import { Input } from "@/components/ui/shared/Input/Input";

import { useState } from "react";

interface Props {
  min?: number;

  max?: number;

  onApply(min?: number, max?: number): void;
}

export default function PriceRangeFilter({ min, max, onApply }: Props) {
  const [minimum, setMinimum] = useState(min?.toString() ?? "");

  const [maximum, setMaximum] = useState(max?.toString() ?? "");

  return (
    <div className="space-y-4">
      <Input
        type="number"
        placeholder="Min"
        value={minimum}
        onChange={(event) => setMinimum(event.target.value)}
      />

      <Input
        type="number"
        placeholder="Max"
        value={maximum}
        onChange={(event) => setMaximum(event.target.value)}
      />

      <Button
        fullWidth
        onClick={() =>
          onApply(
            minimum ? Number(minimum) : undefined,
            maximum ? Number(maximum) : undefined,
          )
        }
      >
        Apply
      </Button>
    </div>
  );
}
