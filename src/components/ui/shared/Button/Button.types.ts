import { ButtonHTMLAttributes, ReactNode } from "react";

import { Size, Variant } from "@/types/ui";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;

  size?: Size;

  loading?: boolean;

  fullWidth?: boolean;

  leftIcon?: ReactNode;

  rightIcon?: ReactNode;
}
