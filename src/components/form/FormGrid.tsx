import { ReactNode } from "react";

interface FormGridProps {
  children: ReactNode;
}

export default function FormGrid({ children }: FormGridProps) {
  return <div className="grid gap-4 md:grid-cols-2">{children}</div>;
}
