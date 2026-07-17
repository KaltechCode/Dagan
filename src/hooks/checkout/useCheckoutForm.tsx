"use client";

import { useState } from "react";
import { CheckoutAddress } from "@/types/checkout";

const emptyAddress: CheckoutAddress = {
  firstName: "",
  lastName: "",
  company: "",
  address1: "",
  address2: "",
  city: "",
  state: "",
  postcode: "",
  country: "",
  email: "",
  phone: "",
};

export function useCheckoutForm() {
  const [billing, setBilling] = useState<CheckoutAddress>(emptyAddress);

  const [shipping, setShipping] = useState<CheckoutAddress>(emptyAddress);

  const [paymentMethod, setPaymentMethod] = useState("");

  const [customerNote, setCustomerNote] = useState("");

  const [shipToDifferentAddress, setShipToDifferentAddress] = useState(false);

  return {
    billing,
    shipping,
    paymentMethod,
    customerNote,
    shipToDifferentAddress,

    setBilling,
    setShipping,
    setPaymentMethod,
    setCustomerNote,
    setShipToDifferentAddress,
  };
}
