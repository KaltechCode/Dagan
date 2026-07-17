// "use client";

// import CartList from "./CartList";
// import CartSummary from "./CartSummary";

// export default function MiniCart() {
//   return (
//     <div className="flex h-full flex-col">
//       <div className="flex-1 overflow-y-auto">
//         <CartList variant="mini" />
//       </div>

//       <div className="border-t p-4">
//         <CartSummary />
//       </div>
//     </div>
//   );
// }

"use client";

import Link from "next/link";
import CartSummary from "./CartSummary";
import { useCart } from "@/hooks/cart/useCart";
import CartItem from "./CartItem";

interface Props {
  open: boolean;

  onClose: () => void;
}

export default function MiniCart({ open, onClose }: Props) {
  const { cart, isLoading, updateItem, removeItem, isUpdating, isRemoving } =
    useCart();

  if (!open) {
    return null;
  }

  return (
    <>
      <div className="fixed inset-0 z-40 bg-black/50" onClick={onClose} />

      <aside className="fixed right-0 top-0 z-50 flex h-screen w-full max-w-md flex-col bg-white shadow-xl">
        <div className="flex items-center justify-between border-b p-5">
          <h2 className="text-lg font-semibold">Shopping Cart</h2>

          <button type="button" onClick={onClose}>
            ✕
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-5">
          {isLoading && <p>Loading...</p>}

          {!isLoading && cart?.items.length === 0 && <p>Your cart is empty.</p>}

          {cart?.items.map((item) => (
            <CartItem
              key={item.key}
              item={item}
              isUpdating={isUpdating}
              isRemoving={isRemoving}
              onQuantityChange={(quantity) =>
                updateItem({
                  key: item.key,
                  quantity,
                }).unwrap()
              }
              onRemove={() => removeItem(item.key).unwrap()}
            />
          ))}
        </div>

        {cart && cart.items.length > 0 && (
          <>
            <CartSummary totals={cart.totals} />

            <div className="space-y-3 border-t p-5">
              <Link
                href="/cart"
                onClick={onClose}
                className="block rounded bg-gray-100 px-4 py-3 text-center"
              >
                View Cart
              </Link>

              <Link
                href="/checkout"
                onClick={onClose}
                className="block rounded bg-black px-4 py-3 text-center text-white"
              >
                Checkout
              </Link>
            </div>
          </>
        )}
      </aside>
    </>
  );
}

//
