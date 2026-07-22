import { ReactNode } from "react";

interface ShopLayoutProps {
  sidebar: ReactNode;
  content: ReactNode;
}

export default function ShopLayout({ sidebar, content }: ShopLayoutProps) {
  return (
    <div className="grid gap-3 grid-cols-7 lg:grid-cols-12 lg:gap-10">
      <aside className="hidden lg:block lg:col-span-2">{sidebar}</aside>

      <main className="col-span-7 lg:col-span-10">{content}</main>
    </div>
  );
}
