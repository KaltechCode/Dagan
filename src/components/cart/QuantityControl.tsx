"use client";

interface Props {
  value: number;
  onChange(value: number): void;
}

export default function QuantityControl({ value, onChange }: Props) {
  return (
    <div className="flex items-center rounded-lg border">
      <button
        className="px-3 py-2"
        onClick={() => onChange(Math.max(1, value - 1))}
      >
        −
      </button>

      <span className="w-12 text-center">{value}</span>

      <button className="px-3 py-2" onClick={() => onChange(value + 1)}>
        +
      </button>
    </div>
  );
}
