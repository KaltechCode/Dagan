// import { cn } from "@/libs/utils";
// import { FieldProps } from "./Fields.types";
// import FieldLabel from "./FieldsLabels";
// import FieldDescription from "./FieldsDescription";
// import FieldError from "./FieldsError";

// export default function Field({
//   label,
//   description,
//   error,
//   required,
//   className,
//   children,
// }: FieldProps) {
//   return (
//     <div className={cn("w-full", className)}>
//       <FieldLabel label={label} required={required} />

//       {children}

//       <FieldDescription description={description} />

//       <FieldError error={error} />
//     </div>
//   );
// }

"use client";

import { ReactNode } from "react";
import { FieldError } from "react-hook-form";

interface Props {
  label: string;
  children: ReactNode;
  error?: FieldError;
}

export default function Field({ label, children, error }: Props) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">{label}</label>

      {children}

      {error && <p className="text-sm text-red-600">{error.message}</p>}
    </div>
  );
}

interface FieldProps {
  label: string;

  children: ReactNode;

  error?: FieldError;

  description?: string;

  required?: boolean;

  htmlFor?: string;

  className?: string;
}

export function FieldTwo({
  label,
  children,
  error,
  description,
  required = false,
  htmlFor,
  className,
}: FieldProps) {
  return (
    <div className={`space-y-2 ${className ?? ""}`}>
      <label htmlFor={htmlFor} className="block text-sm font-medium">
        {label}

        {required && <span className="ml-1 text-red-600">*</span>}
      </label>

      {description && <p className="text-sm text-gray-500">{description}</p>}

      {children}

      {error && <p className="text-sm text-red-600">{error.message}</p>}
    </div>
  );
}
