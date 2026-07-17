"use client";

import { ButtonHTMLAttributes } from "react";

interface Props {
  value: number;

  min?: number;

  max?: number;

  step?: number;

  disabled?: boolean;

  onChange: (quantity: number) => void;

  decrementButtonProps?: ButtonHTMLAttributes<HTMLButtonElement>;

  incrementButtonProps?: ButtonHTMLAttributes<HTMLButtonElement>;
}

export default function QuantitySelector({
  value,
  min = 1,
  max = Number.MAX_SAFE_INTEGER,
  step = 1,
  disabled,
  onChange,
  decrementButtonProps,
  incrementButtonProps,
}: Props) {
  function decrease() {
    if (disabled) return;

    const quantity = Math.max(min, value - step);

    if (quantity !== value) {
      onChange(quantity);
    }
  }

  function increase() {
    if (disabled) return;

    const quantity = Math.min(max, value + step);

    if (quantity !== value) {
      onChange(quantity);
    }
  }

  function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
    if (disabled) return;

    const quantity = Number(event.target.value);

    if (Number.isNaN(quantity)) {
      return;
    }

    onChange(Math.min(max, Math.max(min, quantity)));
  }

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        {...decrementButtonProps}
        disabled={disabled || value <= min}
        onClick={decrease}
      >
        -
      </button>

      <input
        type="number"
        min={min}
        max={max}
        step={step}
        value={value}
        disabled={disabled}
        onChange={handleInput}
        className="w-16 text-center"
      />

      <button
        type="button"
        {...incrementButtonProps}
        disabled={disabled || value >= max}
        onClick={increase}
      >
        +
      </button>
    </div>
  );
}

// usesage
{
  /* <QuantitySelector
  value={item.quantity}
  disabled={isUpdating}
  onChange={(quantity) =>
    updateItem({
      key: item.key,
      quantity,
    })
  }
/>; */
}
