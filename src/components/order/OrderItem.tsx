"use client";

import Image from "next/image";
import Link from "next/link";

import { Card } from "@/components/ui/shared/Card";

import type { OrderItem as OrderItemType } from "@/types/order";

interface OrderItemProps {
  item: OrderItemType;
}

export default function OrderItem({ item }: OrderItemProps) {
  return (
    <Card className="flex gap-5 p-4">
      <Link href={`/product/${item.slug}`}>
        <Image
          src={item.image.src}
          alt={item.image.alt ?? item.name}
          width={100}
          height={100}
          className="rounded-lg object-cover"
        />
      </Link>

      <div className="flex flex-1 flex-col">
        <Link
          href={`/product/${item.slug}`}
          className="font-semibold hover:text-primary"
        >
          {item.name}
        </Link>

        {item.attributes.length > 0 && (
          <div className="mt-2 space-y-1 text-sm text-gray-500">
            {item.attributes.map((attribute) => (
              <p key={attribute.name}>
                {attribute.name}: {attribute.option}
              </p>
            ))}
          </div>
        )}

        <div className="mt-4 grid grid-cols-2 gap-3 text-sm md:grid-cols-4">
          <div>
            <p className="text-gray-500">Price</p>

            <p>{item.price}</p>
          </div>

          <div>
            <p className="text-gray-500">Quantity</p>

            <p>{item.quantity}</p>
          </div>

          <div>
            <p className="text-gray-500">Subtotal</p>

            <p>{item.subtotal}</p>
          </div>

          <div>
            <p className="text-gray-500">Total</p>

            <p className="font-semibold">{item.total}</p>
          </div>
        </div>
      </div>
    </Card>
  );
}
