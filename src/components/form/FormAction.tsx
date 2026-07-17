import { ReactNode } from "react";

interface FormActionsProps {
  children: ReactNode;
}

export default function FormActions({ children }: FormActionsProps) {
  return <div className="flex justify-end gap-3 pt-4">{children}</div>;
}
