import Link from "next/link";

import { Button } from "@/components/ui/shared/Button";

export default function ProductNotFound() {
  return (
    <div className="py-24 text-center">
      <h1 className="text-3xl font-bold">Product Not Found</h1>

      <p className="mt-4 text-gray-500">
        The requested product does not exist or is no longer available.
      </p>

      <Button className="mt-8">
        <Link href="/shop">Continue Shopping</Link>
      </Button>
    </div>
  );
}
