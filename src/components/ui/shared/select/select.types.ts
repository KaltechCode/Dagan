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

  options: SelectOption[];

  searchable?: boolean;

  loading?: boolean;

  disabled?: boolean;

  required?: boolean;

  className?: string;

  onChange?(value: string): void;
}
