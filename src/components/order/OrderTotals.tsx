"use client";

import { Card } from "@/components/ui/shared/Card";
import { CartTotals } from "@/types/cart";
import { number } from "zod";

interface OrderTotalsProps {
  totals: CartTotals;
}

function TotalRow({
  label,
  value,
  emphasize = false,
}: {
  label: string;
  value: number;
  emphasize?: boolean;
}) {
  return (
    <div className="flex items-center justify-between">
      <span className={emphasize ? "font-semibold" : ""}>{label}</span>

      <span className={emphasize ? "font-semibold" : ""}>{value}</span>
    </div>
  );
}

export default function OrderTotals({ totals }: OrderTotalsProps) {
  return (
    <Card className="space-y-4">
      <h2 className="text-xl font-semibold">Order Totals</h2>

      <TotalRow label="Subtotal" value={totals.subtotal} />

      <TotalRow label="Shipping" value={totals.shipping} />

      <TotalRow label="Discount" value={totals.discount} />

      <TotalRow label="Tax" value={totals.tax} />

      <hr />

      <TotalRow label="Grand Total" value={totals.total} emphasize />
    </Card>
  );
}
