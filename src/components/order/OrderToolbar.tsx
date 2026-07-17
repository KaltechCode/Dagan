"use client";

import { OrderStatus } from "@/types/order";
import OrderStatusFilter from "./OrderFilter";

interface Props {
  search: string;
  status?: string;
  onSearchChange(value: string): void;
  onStatusChange(value?: OrderStatus | undefined): void;
}

export default function OrdersToolbar({
  search,
  status,
  onSearchChange,
  onStatusChange,
}: Props) {
  return (
    <div className="flex flex-col gap-4 md:flex-row">
      {/* <OrderSearch value={search} onChange={onSearchChange} /> */}

      <OrderStatusFilter value={status} onChange={onStatusChange} />
    </div>
  );
}
