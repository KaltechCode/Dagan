"use client";

import { Card } from "@/components/ui/shared/Card";

import type { CustomerAddress } from "@/types/customer";

interface BillingAddressProps {
  address: CustomerAddress;
}

export default function BillingAddress({ address }: BillingAddressProps) {
  return (
    <Card className="h-full">
      <h2 className="mb-4 text-xl font-semibold">Billing Address</h2>

      <div className="space-y-2 text-sm">
        <p>
          {address.first_name} {address.last_name}
        </p>

        {address.company && <p>{address.company}</p>}

        <p>{address.address_1}</p>

        {address.address_2 && <p>{address.address_2}</p>}

        <p>
          {address.city}, {address.state}
        </p>

        <p>{address.postcode}</p>

        <p>{address.country}</p>

        {address.phone && <p>{address.phone}</p>}

        {address.email && <p>{address.email}</p>}
      </div>
    </Card>
  );
}
