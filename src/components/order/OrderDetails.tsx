"use client";

import type { Order } from "@/types/order";

interface Props {
  order: Order;
}

export default function OrderDetails({ order }: Props) {
  return (
    <div className="space-y-8">
      {/* Order Summary */}
      <section className="rounded-xl border bg-white p-6">
        <div className="flex flex-col gap-4 md:flex-row md:justify-between">
          <div>
            <h1 className="text-2xl font-bold">Order #{order.number}</h1>

            <p className="mt-1 text-sm text-gray-500">
              Placed on {new Date(order.created_at).toLocaleDateString()}
            </p>
          </div>

          <div className="text-right">
            <span className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
              {order.status}
            </span>

            <p className="mt-3 text-xl font-bold">
              {order.currency} {order.total}
            </p>
          </div>
        </div>
      </section>

      {/* Ordered Items */}
      <section className="rounded-xl border bg-white p-6">
        <h2 className="mb-6 text-xl font-semibold">Order Items</h2>

        <div className="space-y-4">
          {order.items.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b pb-4 last:border-0"
            >
              <div className="flex items-center gap-4">
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-20 w-20 rounded-lg object-cover"
                  />
                )}

                <div>
                  <h3 className="font-medium">{item.name}</h3>

                  {item.sku && (
                    <p className="text-sm text-gray-500">SKU: {item.sku}</p>
                  )}

                  <p className="text-sm text-gray-500">
                    Quantity: {item.quantity}
                  </p>
                </div>
              </div>

              <p className="font-semibold">
                {order.currency} {item.total}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Addresses */}
      <div className="grid gap-6 md:grid-cols-2">
        <section className="rounded-xl border bg-white p-6">
          <h2 className="mb-4 text-lg font-semibold">Billing Address</h2>

          <div className="space-y-1 text-sm">
            <p>
              {order.billing.first_name} {order.billing.last_name}
            </p>

            {order.billing.company && <p>{order.billing.company}</p>}

            <p>{order.billing.address_1}</p>

            {order.billing.address_2 && <p>{order.billing.address_2}</p>}

            <p>
              {order.billing.city}, {order.billing.state}
            </p>

            <p>{order.billing.postcode}</p>

            <p>{order.billing.country}</p>

            <p>{order.billing.email}</p>

            <p>{order.billing.phone}</p>
          </div>
        </section>

        <section className="rounded-xl border bg-white p-6">
          <h2 className="mb-4 text-lg font-semibold">Shipping Address</h2>

          <div className="space-y-1 text-sm">
            <p>
              {order.shipping.first_name} {order.shipping.last_name}
            </p>

            {order.shipping.company && <p>{order.shipping.company}</p>}

            <p>{order.shipping.address_1}</p>

            {order.shipping.address_2 && <p>{order.shipping.address_2}</p>}

            <p>
              {order.shipping.city}, {order.shipping.state}
            </p>

            <p>{order.shipping.postcode}</p>

            <p>{order.shipping.country}</p>
          </div>
        </section>
      </div>

      {/* Totals */}
      <section className="rounded-xl border bg-white p-6">
        <h2 className="mb-6 text-xl font-semibold">Order Totals</h2>

        <div className="space-y-3">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>
              {order.currency} {order.subtotal}
            </span>
          </div>

          <div className="flex justify-between">
            <span>Discount</span>
            <span>
              {order.currency} {order.discount_total}
            </span>
          </div>

          <div className="flex justify-between">
            <span>Shipping</span>
            <span>
              {order.currency} {order.shipping_total}
            </span>
          </div>

          <div className="flex justify-between">
            <span>Tax</span>
            <span>
              {order.currency} {order.total_tax}
            </span>
          </div>

          <div className="border-t pt-4 text-lg font-bold flex justify-between">
            <span>Total</span>

            <span>
              {order.currency} {order.total}
            </span>
          </div>
        </div>
      </section>

      {/* Payment */}
      <section className="rounded-xl border bg-white p-6">
        <h2 className="mb-4 text-xl font-semibold">Payment</h2>

        <p>{order.payment_method_title}</p>
      </section>
    </div>
  );
}
