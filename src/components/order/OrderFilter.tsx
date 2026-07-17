"use client";

import { Select } from "../ui/shared/Button/Select";

interface OrderStatusFilterProps {
  value?: string;

  onChange(value?: string): void;
}

const options = [
  {
    label: "All Orders",
    value: "",
  },
  {
    label: "Pending",
    value: "pending",
  },
  {
    label: "Processing",
    value: "processing",
  },
  {
    label: "On Hold",
    value: "on-hold",
  },
  {
    label: "Completed",
    value: "completed",
  },
  {
    label: "Cancelled",
    value: "cancelled",
  },
  {
    label: "Refunded",
    value: "refunded",
  },
  {
    label: "Failed",
    value: "failed",
  },
];

export default function OrderStatusFilter({
  value,
  onChange,
}: OrderStatusFilterProps) {
  return (
    <div className="w-full md:w-64">
      <Select
        value={value ?? ""}
        options={options}
        onChange={(event) => onChange(event.target.value || undefined)}
      />
    </div>
  );
}
