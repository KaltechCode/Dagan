import { ReactNode } from "react";

export interface SelectOption {
  label: string;
  value: string;
  disabled?: boolean;
  icon?: ReactNode;
}

export interface SelectProps {
  label?: string;

  description?: string;

  error?: string;

  placeholder?: string;

  value?: string;

  required?: boolean;

  disabled?: boolean;

  searchable?: boolean;

  loading?: boolean;

  options: SelectOption[];

  onChange?(value: string): void;
}
