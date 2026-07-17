// "use client";

// import { cn } from "@/libs/utils";

// interface ProductStockProps {
//   quantity?: number;

//   status?: string;

//   className?: string;
// }

// export default function ProductStock({
//   quantity = 0,
//   status,
//   className,
// }: ProductStockProps) {
//   if (status === "outofstock") {
//     return (
//       <p className={cn("text-sm font-medium text-red-600", className)}>
//         Out of stock
//       </p>
//     );
//   }

//   if (quantity <= 5) {
//     return (
//       <p className={cn("text-sm font-medium text-orange-500", className)}>
//         Only {quantity} left
//       </p>
//     );
//   }

//   return (
//     <p className={cn("text-sm font-medium text-green-600", className)}>
//       In stock
//     </p>
//   );
// }

interface ProductStockProps {
  inStock: boolean;

  quantity?: number | null;
}

export default function ProductStock({ inStock, quantity }: ProductStockProps) {
  return (
    <div className="flex items-center gap-2">
      <span
        className={
          inStock
            ? "h-3 w-3 rounded-full bg-green-500"
            : "h-3 w-3 rounded-full bg-red-500"
        }
      />

      <span>{inStock ? "In Stock" : "Out of Stock"}</span>

      {quantity !== undefined && inStock && (
        <span className="text-sm text-gray-500">({quantity} available)</span>
      )}
    </div>
  );
}
