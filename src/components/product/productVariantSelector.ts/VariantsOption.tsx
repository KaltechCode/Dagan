"use client";

import { cn } from "@/libs/utils";

interface Props {
  label: string;

  selected: boolean;

  disabled?: boolean;

  onClick(): void;
}

export default function VariantOption({
  label,
  selected,
  disabled,
  onClick,
}: Props) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={cn(
        "rounded-lg border px-4 py-2 text-sm transition",
        selected
          ? "border-[var(--primary)] bg-[var(--primary)] text-white"
          : "border-[var(--border)]",
        disabled && "cursor-not-allowed opacity-40",
      )}
    >
      {label}
    </button>
  );
}
