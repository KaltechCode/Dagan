import Link from "next/link";

import { Button } from "@/components/ui/shared/Button";

export default function EmptyProducts() {
  return (
    <div className="py-20 text-center">
      <h2 className="text-2xl font-semibold">No Products Found</h2>

      <p className="mt-3 text-gray-500">
        Try changing your filters or search terms.
      </p>

      <Button className="mt-6">
        <Link href="/shop">Clear Filters</Link>
      </Button>
    </div>
  );
}
