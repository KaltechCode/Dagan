import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;

  className?: string;
}

export default function Section({ children, className = "" }: SectionProps) {
  return (
    <section className={`py-8 md:py-10 lg-py-16 2xl:py-18 ${className}`}>
      <div className="w-[95%] 3k:w-[90%] mx-auto">{children}</div>
    </section>
  );
}
