"use client";

import { useState } from "react";
import OrdersSkeleton from "../ui/shared/skeleton/OrderSkeleton";
import EmptyOrders from "./OrderEmpty";
import OrdersTable from "./OrderTable";
import { useOrders } from "@/hooks/order/useOrder";
import OrdersToolbar from "./OrderToolbar";
import { OrderStatus } from "@/types/order";

export default function OrdersPage() {
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState<OrderStatus | undefined>();
  const [search, setSearch] = useState("");

  const { orders, loading } = useOrders({
    page,
    status,
    search,
  });

  if (loading) {
    return <OrdersSkeleton />;
  }

  if (!orders.length) {
    return <EmptyOrders />;
  }

  return (
    <div className="space-y-8">
      <OrdersToolbar
        status={status}
        search={search}
        onStatusChange={setStatus}
        onSearchChange={setSearch}
      />

      <OrdersTable />

      {/* <OrdersPagination pagination={pagination} onPageChange={setPage} /> */}
    </div>
  );
}
