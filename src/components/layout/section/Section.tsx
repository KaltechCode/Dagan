import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;

  className?: string;
}

export default function Section({ children, className = "" }: SectionProps) {
  return (
    <section
      className={`py-24 md:py-28 lg-py-32 2xl:py-36 ${className} bg-white`}
    >
      <div className="w-[90%] xl:w-[80%] mx-auto">{children}</div>
    </section>
  );
}
