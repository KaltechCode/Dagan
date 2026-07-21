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
      <input
        type="number"
        placeholder="Min"
        value={minimum}
        onChange={(event) => setMinimum(event.target.value)}
        className="w-full border-1 border-gray-200 h-8 px-2 text-center outline-none rounded-md focus:outline-none"
      />

      <input
        type="number"
        placeholder="Max"
        value={maximum}
        onChange={(event) => setMaximum(event.target.value)}
        className="w-full border-1 border-gray-200 h-8 px-2 text-center outline-none rounded-md focus:outline-none"
      />

      <button
        className="bg-bg-pry py-2 text-sm text-white w-full rounded-md"
        onClick={() =>
          onApply(
            minimum ? Number(minimum) : undefined,
            maximum ? Number(maximum) : undefined,
          )
        }
      >
        Apply
      </button>
    </div>
  );
}
