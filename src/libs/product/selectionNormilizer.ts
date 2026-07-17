import { SelectedOptions } from "../types/selected-option";

export function normalizeSelection(
  selected: SelectedOptions,
  available: Record<string, string[]>,
): SelectedOptions {
  const normalized: SelectedOptions = {};

  for (const key of Object.keys(selected)) {
    const value = selected[key];

    if (available[key]?.includes(value)) {
      normalized[key] = value;
    }
  }

  return normalized;
}
