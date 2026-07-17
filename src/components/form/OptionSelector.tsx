"use client";

import { Controller, useFormContext } from "react-hook-form";

interface OptionItem {
  id: string;
  title: string;
  description?: string;
  icon?: string;
  cost?: string;
  disabled?: boolean;
}

interface OptionSelectorProps {
  name: string;
  options: OptionItem[];
}

export default function OptionSelector({ name, options }: OptionSelectorProps) {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <div className="space-y-3">
          {options.map((option) => (
            <label
              key={option.id}
              className={`flex cursor-pointer items-start gap-4 rounded-lg border p-4 transition ${
                field.value === option.id ? "border-primary" : "border-gray-200"
              }`}
            >
              <input
                type="radio"
                value={option.id}
                checked={field.value === option.id}
                onChange={() => field.onChange(option.id)}
                disabled={option.disabled}
              />

              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="font-medium">{option.title}</span>

                  {option.cost && (
                    <span className="font-semibold">{option.cost}</span>
                  )}
                </div>

                {option.description && (
                  <p className="mt-1 text-sm text-gray-500">
                    {option.description}
                  </p>
                )}
              </div>
            </label>
          ))}
        </div>
      )}
    />
  );
}
