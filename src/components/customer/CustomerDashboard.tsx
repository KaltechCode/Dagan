"use client";

import {
  useGetCustomerQuery,
  useGetDashboardQuery,
} from "@/redux/api/customerApi";
import CustomerStats from "./CustomerStats";
import AccountSidebar from "./AccountSide";
import CustomerAvatar from "./CustomerAvater";
import AddressBook from "./AddressBook";
import CustomerSkeleton from "../ui/shared/skeleton/CustomerSkeleton";

export default function CustomerDashboard() {
  const { data: customerData, isLoading: loadingCustomer } =
    useGetCustomerQuery();

  const { data: dashboardData, isLoading: loadingDashboard } =
    useGetDashboardQuery();

  if (loadingCustomer || loadingDashboard) {
    return <CustomerSkeleton />;
  }

  const customer = customerData?.customer;

  const summary = dashboardData?.summary;

  if (!customer || !summary) {
    return null;
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
      <AccountSidebar />

      <div className="space-y-8">
        <div className="flex items-center gap-4">
          <CustomerAvatar
            name={customer.displayName}
            avatar={customer.avatar}
          />

          <div>
            <h1 className="text-2xl font-bold">{customer.displayName}</h1>

            <p className="text-gray-500">{customer.email}</p>
          </div>
        </div>

        <CustomerStats summary={summary} />

        <AddressBook customer={customer} />
      </div>
    </div>
  );
}
