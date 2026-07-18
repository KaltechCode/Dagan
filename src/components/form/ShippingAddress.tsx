// "use client";

// import { useUpdateShippingMutation } from "@/redux/api/customerApi";
// import AddressForm from "./AddressForm";
// import { useCustomer } from "@/hooks/customer/useCustomer";

// export default function ShippingAddressForm() {
//   const { customer } = useCustomer();

//   const [updateShipping, { isLoading }] = useUpdateShippingMutation();

//   return (
//     <AddressForm
//       title="Shipping Address"
//       address={customer?.shipping}
//       loading={isLoading}
//       onSubmit={async (values) => {
//         await updateShipping(values).unwrap();
//       }}
//     />
//   );
// }
