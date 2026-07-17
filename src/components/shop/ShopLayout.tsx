import { ReactNode } from "react";

interface ShopLayoutProps {
  sidebar: ReactNode;
  content: ReactNode;
}

export default function ShopLayout({ sidebar, content }: ShopLayoutProps) {
  return (
    <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
      <aside className="hidden lg:block">{sidebar}</aside>

      <main>{content}</main>
    </div>
  );
}
