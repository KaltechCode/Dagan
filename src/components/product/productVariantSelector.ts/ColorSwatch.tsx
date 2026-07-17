"use client";

import { cn } from "@/libs/utils";

interface Props {
  color: string;

  selected: boolean;

  disabled?: boolean;

  onClick(): void;
}

export default function ColorSwatch({
  color,
  selected,
  disabled,
  onClick,
}: Props) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      aria-label={color}
      className={cn(
        "h-10 w-10 rounded-full border-2 transition",
        selected ? "border-[var(--primary)]" : "border-[var(--border)]",
        disabled && "opacity-40 cursor-not-allowed",
      )}
      style={{
        backgroundColor: color,
      }}
    />
  );
}
