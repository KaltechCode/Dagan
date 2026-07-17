// "use client";

// import Image from "next/image";
// import Link from "next/link";

// import { Trash2 } from "lucide-react";

// import { Button } from "@/components/ui/shared/Button";

// import { useCart } from "../../hooks/cart/useCart";

// import type { CartItem as CartItemType } from "../../types/cart";

// interface Props {
//   item: CartItemType;

//   variant?: "cart" | "mini" | "checkout";
// }

// export default function CartItem({ item, variant = "cart" }: Props) {
//   const { updateItem, removeItem, mutating } = useCart();

//   return (
//     <div className="flex gap-4 border-b py-5">
//       <Link href={`/product/${item.slug}`}>
//         <Image
//           src={item.image.src}
//           alt={item.image.alt ?? item.name}
//           width={variant === "mini" ? 70 : 120}
//           height={variant === "mini" ? 70 : 120}
//           className="rounded-lg"
//         />
//       </Link>

//       <div className="flex flex-1 flex-col">
//         <Link
//           href={`/product/${item.slug}`}
//           className="font-medium hover:text-primary"
//         >
//           {item.name}
//         </Link>

//         {item.attributes.length > 0 && (
//           <div className="mt-2 space-y-1 text-sm text-gray-500">
//             {item.attributes.map((attribute) => (
//               <div key={attribute.name}>
//                 {attribute.name}: {attribute.option}
//               </div>
//             ))}
//           </div>
//         )}

//         <div className="mt-3 flex items-center gap-3">
//           <Button
//             size="icon"
//             variant="outline"
//             disabled={item.quantity <= item.minQuantity || mutating}
//             onClick={() =>
//               updateItem({
//                 key: item.key,
//                 quantity: item.quantity - 1,
//               })
//             }
//           >
//             -
//           </Button>

//           <span>{item.quantity}</span>

//           <Button
//             size="icon"
//             variant="outline"
//             disabled={item.quantity >= item.maxQuantity || mutating}
//             onClick={() =>
//               updateItem({
//                 key: item.key,
//                 quantity: item.quantity + 1,
//               })
//             }
//           >
//             +
//           </Button>
//         </div>
//       </div>

//       <div className="flex flex-col items-end justify-between">
//         <span className="font-semibold">{item.total}</span>

//         {variant !== "checkout" && (
//           <Button
//             variant="ghost"
//             size="icon"
//             disabled={mutating}
//             onClick={() => removeItem(item.key)}
//           >
//             <Trash2 className="h-5 w-5" />
//           </Button>
//         )}
//       </div>
//     </div>
//   );
// }

"use client";

import Image from "next/image";
import QuantitySelector from "./QuantitySelector";
import { CartItem as CartItemType } from "@/types/cart";
import { useCart } from "@/hooks/cart/useCart";

interface Props {
  item: CartItemType;

  editable?: boolean;

  showRemove?: boolean;

  isUpdating?: boolean;

  isRemoving?: boolean;

  onQuantityChange?: (quantity: number) => void;

  onRemove?: () => {};
}

export default function CartItem({
  item,
  editable = true,
  showRemove = true,
  isUpdating,
}: Props) {
  const { updateItem, removeItem, isRemoving } = useCart();

  async function handleQuantityChange(quantity: number) {
    await updateItem({
      key: item.key,
      quantity,
    }).unwrap();
  }
  async function handleRemove() {
    await removeItem(item.key).unwrap();
  }

  return (
    <div className="flex gap-4 border-b py-4 bg-white">
      <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded">
        {item.image && (
          <Image
            src={item?.image.src}
            alt={item?.image.alt}
            fill
            className="object-cover"
          />
        )}
      </div>

      <div className="flex flex-1 flex-col">
        <h3 className="font-medium">{item.name}</h3>

        <p className="text-sm text-gray-500">₦{item.price.toFixed(2)}</p>

        {editable && (
          <div className="mt-3">
            <QuantitySelector
              value={item.quantity}
              disabled={isUpdating}
              onChange={handleQuantityChange}
            />
          </div>
        )}
      </div>

      <div className="flex flex-col items-end justify-between">
        <span className="font-semibold">₦{item.total.toFixed(2)}</span>

        {showRemove && (
          <button
            type="button"
            disabled={isRemoving}
            onClick={handleRemove}
            className="text-sm text-red-500"
          >
            Remove
          </button>
        )}
      </div>
    </div>
  );
}

// usesage
