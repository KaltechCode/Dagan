"use client";

import { Button } from "@/components/ui/shared/Button";
import { Input } from "@/components/ui/shared/Input/Input";

interface ProductQuantityProps {
  value: number;

  min?: number;

  max?: number;

  quantityClass?: string;

  onChange(value: number): void;
}

export default function ProductQuantity({
  value,
  min = 1,
  max = 999,
  onChange,
  quantityClass,
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
    <div
      className={`flex w-fit justify-between p-1 px-[5%] items-center rounded-full border border-gray-200 ${quantityClass}`}
    >
      <Button variant="ghost" size="icon" onClick={decrease}>
        −
      </Button>

      <Input
        type="number"
        min={min}
        max={max}
        value={value}
        className="w-15 text-center border! text-sm border-gray-50! rounded-[10px]"
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
