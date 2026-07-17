// "use client";

// import Link from "next/link";

// import { Button } from "@/components/ui/shared/Button";

// import CartTotals from "./CartTotals";

// export default function CartSummary() {
//   return (
//     <div className="space-y-6">
//       <CartTotals />

//       <Button fullWidth>
//         <Link href="/checkout">Proceed to Checkout</Link>
//       </Button>
//     </div>
//   );
// }

"use client";

import { CartTotals } from "@/types/cart";

interface Props {
  totals: CartTotals;

  className?: string;
}

export default function CartSummary({ totals, className }: Props) {
  function formatPrice(price: number) {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
    }).format(price);
  }

  return (
    <div className={className}>
      <div className="space-y-3 border-t pt-4">
        <div className="flex items-center justify-between">
          <span>Subtotal</span>

          <span>{formatPrice(totals.subtotal)}</span>
        </div>

        <div className="flex items-center justify-between">
          <span>Discount</span>

          <span>-{formatPrice(totals.discount)}</span>
        </div>

        <div className="flex items-center justify-between">
          <span>Shipping</span>

          <span>{formatPrice(totals.shipping)}</span>
        </div>

        <div className="flex items-center justify-between">
          <span>Tax</span>

          <span>{formatPrice(totals.tax)}</span>
        </div>

        <div className="flex items-center justify-between border-t pt-4 text-lg font-semibold">
          <span>Total</span>

          <span>{formatPrice(totals.total)}</span>
        </div>
      </div>
    </div>
  );
}

// <CartSummary totals={cart.totals}
