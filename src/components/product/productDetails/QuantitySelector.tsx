"use client";

interface Props {
  value: number;

  onChange(quantity: number): void;
}

export default function QuantitySelector({ value, onChange }: Props) {
  return (
    <div className="flex items-center gap-3">
      <button
        onClick={() => onChange(Math.max(1, value - 1))}
        className="h-10 w-10 rounded border"
      >
        -
      </button>

      <span className="w-10 text-center">{value}</span>

      <button
        onClick={() => onChange(value + 1)}
        className="h-10 w-10 rounded border"
      >
        +
      </button>
    </div>
  );
}
