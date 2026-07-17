// "use client";

// import { Card } from "@/components/ui/shared/Card";

// import { useCart } from "../../hooks/cart/useCart";

// export default function CartTotals() {
//   const { totals } = useCart();

//   if (!totals) {
//     return null;
//   }

//   return (
//     <Card className="space-y-4">
//       <Row label="Subtotal" value={totals.subtotal} />

//       <Row label="Shipping" value={totals.shipping} />

//       <Row label="Discount" value={totals.discount} />

//       <Row label="Tax" value={totals.tax} />

//       <hr />

//       <Row label="Total" value={totals.total} bold />
//     </Card>
//   );
// }

// function Row({
//   label,
//   value,
//   bold,
// }: {
//   label: string;

//   value: string;

//   bold?: boolean;
// }) {
//   return (
//     <div className="flex justify-between">
//       <span className={bold ? "font-semibold" : ""}>{label}</span>

//       <span className={bold ? "font-semibold" : ""}>{value}</span>
//     </div>
//   );
// }
