import { Customer } from "@/types/customer";
import AddressCard from "./AddressCard";

interface AddressBookProps {
  customer: Customer;
}

export default function AddressBook({ customer }: AddressBookProps) {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <AddressCard title="Billing Address" address={customer.billing} />

      <AddressCard title="Shipping Address" address={customer.shipping} />
    </div>
  );
}
