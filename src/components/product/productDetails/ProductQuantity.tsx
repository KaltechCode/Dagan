"use client";

import { Button } from "@/components/ui/shared/Button";
import { Input } from "@/components/ui/shared/Input/Input";

interface ProductQuantityProps {
  value: number;

  min?: number;

  max?: number;

  onChange(value: number): void;
}

export default function ProductQuantity({
  value,
  min = 1,
  max = 999,
  onChange,
}: ProductQuantityProps) {
  function decrease() {
    if (value <= min) {
      return;
    }

    onChange(value - 1);
  }

  function increase() {
    if (value >= max) {
      return;
    }

    onChange(value + 1);
  }

  return (
    <div className="flex w-fit items-center rounded-lg border border-gray-200">
      <Button variant="ghost" size="icon" onClick={decrease}>
        −
      </Button>

      <Input
        type="number"
        min={min}
        max={max}
        value={value}
        className="w-15 text-center border-none! text-sm"
        onChange={(event) => onChange(Number(event.target.value))}
      />

      <Button
        variant="ghost"
        size="icon"
        onClick={increase}
        className="border-none outline-none focus:outline-none transition-colors"
      >
        +
      </Button>
    </div>
  );
}
