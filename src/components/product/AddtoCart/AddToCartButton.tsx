// "use client";

// import { ButtonHTMLAttributes } from "react";
// import { useCart } from "@/hooks/cart/useCart";

// interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
//   productId: number;

//   quantity?: number;

//   variationId?: number;

//   attributes?: Record<string, string>;

//   children?: React.ReactNode;

//   onSuccess?: () => void;
// }

// export default function AddToCartButton({
//   productId,
//   quantity = 1,
//   variationId,
//   attributes,
//   children = "Add to Cart",
//   onSuccess,
//   disabled,
//   ...props
// }: Props) {
//   const { addItem, isAdding } = useCart();

//   async function handleClick() {
//     try {
//       await addItem({
//         productId,
//         quantity,
//         variationId,
//         attributes,
//       }).unwrap();

//       onSuccess?.();
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   return (
//     <button {...props} disabled={disabled || isAdding} onClick={handleClick}>
//       {isAdding ? "Adding..." : children}
//     </button>
//   );
// }

"use client";

import { ButtonHTMLAttributes } from "react";
import { useCart } from "@/hooks/cart/useCart";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  productId: number;

  quantity?: number;

  variationId?: number;

  attributes?: Record<string, string>;

  onSuccess?: () => void;

  onError?: (error: unknown) => void;

  children?: React.ReactNode;
}

export default function AddToCartButton({
  productId,
  quantity = 1,
  variationId,
  attributes,
  onSuccess,
  onError,
  children = "Add to Cart",
  disabled,
  ...props
}: Props) {
  const { addItem, add, isAdding } = useCart();

  async function handleAddToCart() {
    try {
      await addItem({
        productId,
        quantity,
        variationId,
        attributes,
      }).unwrap();

      onSuccess?.();
    } catch (error) {
      console.error(error);

      onError?.(error);
    }
  }

  return (
    <button
      {...props}
      type={props.type ?? "button"}
      disabled={disabled || isAdding}
      onClick={handleAddToCart}
      className="bg-bg-pry text-white text-center px-6 py-3 rounded-sm cursor-pointer"
    >
      {isAdding ? "Adding..." : children}
    </button>
  );
}

// usaage
// variant
{
  /* <AddToCartButton
  productId={product.id}
  quantity={quantity}
  variationId={currentProduct.id}
  attributes={selectedOptions}
/>; */
}

// simple
// <AddToCartButton
//   productId={product.id}
// />
