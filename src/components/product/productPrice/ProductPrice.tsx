// "use client";

import { formatCurrency } from "@/components/helpers/currency";

import { cn } from "@/libs/utils";
import { getPriceRange } from "./utils";
import { formatPrice } from "@/libs/product/priceFormat";

// export default function ProductPriceTwo({
//   price,
//   regularPrice,
//   salePrice,
//   type = "simple",
//   variations = [],
//   currency = "₦",
//   showDiscount = true,
//   className,
// }: ProductPriceProps) {
//   if (type === "variable" && variations.length) {
//     const range = getPriceRange(variations);

//     if (!range) {
//       return null;
//     }

//     return (
//       <div className={cn(className)}>
//         <span className="text-lg font-semibold">
//           {formatPrice(range.min, currency)}

//           {range.min !== range.max && ` - ${formatPrice(range.max, currency)}`}
//         </span>
//       </div>
//     );
//   }

//   const hasSale = !!salePrice && salePrice !== regularPrice;

//   return (
//     <div className={cn("flex items-center gap-2", className)}>
//       <span className="text-lg font-semibold text-[var(--text)]">
//         {formatPrice(salePrice || price || 0, currency)}
//       </span>

//       {hasSale && (
//         <>
//           <span className="text-sm text-[var(--text-muted)] line-through">
//             {formatPrice(regularPrice || 0, currency)}
//           </span>

//           {showDiscount && (
//             <span className="rounded bg-red-100 px-2 py-1 text-xs font-medium text-red-600">
//               -{calculateDiscount(regularPrice || 0, salePrice || 0)}%
//             </span>
//           )}
//         </>
//       )}
//     </div>
//   );
// }

interface ProductPriceProps {
  price: number;

  regularPrice?: number;

  salePrice: number;

  onSale: boolean;
}

export default function ProductPrice({
  price,
  regularPrice,
  salePrice,
  onSale,
}: ProductPriceProps) {
  if (onSale) {
    return (
      <div className="flex items-center gap-4">
        <span className="text-[17px] font-semibold text-primary">
          {formatCurrency(salePrice)}
        </span>

        {regularPrice && (
          <span className="text-xl text-gray-500 line-through text-[16px]">
            {formatCurrency(regularPrice)}
          </span>
        )}
      </div>
    );
  }

  return (
    <span className="text-[17px] font-semibold text-primary">
      {formatCurrency(price)}
    </span>
  );
}
