import AuthGuard from "@/components/auth/AuthGuard";
import AccountSidebar from "@/components/customer/AccountSide";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function AccountLayout({ children }: Props) {
  return (
    <AuthGuard>
      <div className="container py-8">
        <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
          <AccountSidebar />

          <main>{children}</main>
        </div>
      </div>
    </AuthGuard>
  );
}
