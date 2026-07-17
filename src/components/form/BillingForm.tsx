"use client";

import { useCustomer } from "@/hooks/customer/useCustomer";
import AddressForm from "./AddressForm";
import { useUpdateBillingMutation } from "@/redux/api/customerApi";

export default function BillingAddressForm() {
  const { customer } = useCustomer();

  const [updateBilling, { isLoading }] = useUpdateBillingMutation();

  return (
    <AddressForm
      title="Billing Address"
      address={customer?.billing}
      loading={isLoading}
      onSubmit={async (values) => {
        await updateBilling(values).unwrap();
      }}
    />
  );
}
