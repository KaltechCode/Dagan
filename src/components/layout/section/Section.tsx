import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;

  className?: string;
}

export default function Section({ children, className = "" }: SectionProps) {
  return (
    <section
      className={`py-8 md:py-10 lg-py-16 2xl:py-18 ${className} bg-white`}
    >
      <div className="w-[95%] xl:w-[90%] mx-auto">{children}</div>
    </section>
  );
}
