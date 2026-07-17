// "use client";

// import { ShoppingCart } from "lucide-react";

// import { Button } from "@/components/ui/shared/Button";

// import { useCart } from "@/hooks/cart/useCart";

// interface CartBadgeProps {
//   onClick?: () => void;
// }

// export default function CartBadge({ onClick }: CartBadgeProps) {
//   const { itemCount } = useCart();

//   return (
//     <Button variant="ghost" size="icon" onClick={onClick} className="relative">
//       <ShoppingCart className="h-6 w-6" />

//       {itemCount > 0 && (
//         <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1 text-xs font-medium text-white">
//           {itemCount > 99 ? "99+" : itemCount}
//         </span>
//       )}
//     </Button>
//   );
// }

"use client";

import { useCart } from "@/hooks/cart/useCart";

interface Props {
  className?: string;

  showZero?: boolean;
}

export default function CartBadge({ className, showZero = true }: Props) {
  const { cart, isLoading } = useCart();

  if (isLoading) {
    return null;
  }

  const quantity = cart?.items.length ?? 0;

  if (!showZero && cart?.items.length === 0) {
    return null;
  }
  return (
    <span className={`${className} text-primary text-xs`}>{quantity}</span>
  );
}

// Header usesage
// import CartBadge from "@/components/cart/CartBadge";

// <div className="relative">
//   <ShoppingCart />

//   <CartBadge className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white" />
// </div>;

// mobile header usesage
// <CartBadge className="ml-2 rounded-full bg-primary px-2 py-1 text-xs text-white" />

// sidebar usage
// <CartBadge
//   showZero
//   className="rounded bg-gray-100 px-2 py-1"
// />
