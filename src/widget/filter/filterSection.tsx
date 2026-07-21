import { ReactNode } from "react";

interface Props {
  title: string;

  children: ReactNode;
  classname?: string;
}

export default function FilterSection({ title, children, classname }: Props) {
  return (
    <section className={`border-b border-gray-200 pb-3 ${classname}`}>
      <h3 className="mb-4 bold-text">{title}</h3>

      {children}
    </section>
  );
}
