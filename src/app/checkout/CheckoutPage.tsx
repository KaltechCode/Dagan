"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { useCart } from "@/hooks/cart/useCart";
import { useCheckout } from "@/hooks/checkout/useCheckout";
import { useCheckoutForm } from "@/hooks/checkout/useCheckoutForm";

import AddressForm from "@/components/form/AddressForm";
import PaymentMethodSelector from "@/components/form/PaymentMethod";
import OrderSummary from "@/components/order/OrderSummary";
import PlaceOrderButton from "@/components/checkout/PlaceOrderBtn";

export default function CheckoutPage() {
  const router = useRouter();

  const { cart } = useCart();

  const { paymentMethods, placeOrder, isPlacingOrder } = useCheckout();

  const {
    billing,
    shipping,
    paymentMethod,
    customerNote,
    shipToDifferentAddress,

    setBilling,
    setShipping,
    setPaymentMethod,
  } = useCheckoutForm();

  useEffect(() => {
    if (!paymentMethod && paymentMethods.length) {
      setPaymentMethod(paymentMethods[0].id);
    }
  }, [paymentMethod, paymentMethods, setPaymentMethod]);

  async function handlePlaceOrder() {
    const order = await placeOrder({
      billing,

      shipping,

      paymentMethod,

      customerNote,

      shipToDifferentAddress,
    });

    if (order.redirectUrl) {
      router.push(order.redirectUrl);
      return;
    }

    if (order.paymentUrl) {
      router.push(order.paymentUrl);
      return;
    }

    router.push(`/orders/${order.orderId}`);
  }

  if (!cart) {
    return null;
  }

  return (
    <section className="container py-10 bg-white">
      <div className="grid gap-10 lg:grid-cols-[1fr_420px]">
        <div className="space-y-8">
          <AddressForm
            title="Billing Address"
            value={billing}
            onChange={setBilling}
          />

          <AddressForm
            title="Shipping Address"
            value={shipping}
            onChange={setShipping}
          />

          <PaymentMethodSelector
            methods={paymentMethods}
            value={paymentMethod}
            onChange={setPaymentMethod}
          />
        </div>

        <aside className="space-y-6">
          <OrderSummary cart={cart} editable />

          <PlaceOrderButton
            className="w-full rounded bg-black py-4 text-white"
            isLoading={isPlacingOrder}
            onPlaceOrder={handlePlaceOrder}
          />
        </aside>
      </div>
    </section>
  );
}
