import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function SectionActions({ children }: Props) {
  return <div className="mt-10 flex justify-center">{children}</div>;
}
