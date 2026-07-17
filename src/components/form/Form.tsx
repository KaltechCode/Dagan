"use client";

import { FormHTMLAttributes } from "react";

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {}

export default function Form({
  children,
  className = "",
  ...props
}: FormProps) {
  return (
    <form className={`space-y-6 ${className}`} {...props}>
      {children}
    </form>
  );
}
