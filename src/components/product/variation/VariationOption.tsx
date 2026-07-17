"use client";

import clsx from "clsx";

interface VariationOptionProps {
  label: string;

  selected: boolean;

  disabled?: boolean;

  onClick(): void;
}

export default function VariationOption({
  label,
  selected,
  disabled,
  onClick,
}: VariationOptionProps) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={clsx(
        "rounded-lg border px-4 py-2 transition",

        selected && "border-primary bg-primary text-white",

        disabled && "cursor-not-allowed opacity-40",
      )}
    >
      {label}
    </button>
  );
}
