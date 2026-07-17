import { ReactNode } from "react";

interface Props {
  title: string;

  children: ReactNode;
}

export default function FilterSection({ title, children }: Props) {
  return (
    <section className="border-b py-6">
      <h3 className="mb-4 font-semibold">{title}</h3>

      {children}
    </section>
  );
}
