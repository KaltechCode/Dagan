"use client";

import { Card } from "@/components/ui/shared/Card";
import { CustomerAddress } from "@/types/customer";

interface ShippingAddressProps {
  address: CustomerAddress;
}

export default function ShippingAddress({ address }: ShippingAddressProps) {
  return (
    <Card className="h-full">
      <h2 className="mb-4 text-xl font-semibold">Shipping Address</h2>

      <div className="space-y-2 text-sm">
        <p>
          {address.firstName} {address.lastName}
        </p>

        {address.company && <p>{address.company}</p>}

        <p>{address.address1}</p>

        {address.address2 && <p>{address.address2}</p>}

        <p>
          {address.city}, {address.state}
        </p>

        <p>{address.postcode}</p>

        <p>{address.country}</p>

        {address.phone && <p>{address.phone}</p>}
      </div>
    </Card>
  );
}
