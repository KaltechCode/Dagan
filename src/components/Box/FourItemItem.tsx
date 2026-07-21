import { ProductImage } from "@/types/product";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function FourItemItem({
  item,
  name,
  slug,
}: {
  item?: string;
  name: string;
  slug: string;
}) {
  return (
    <div className="col-span-1 row-span-1 bg-white cursor-pointer">
      <Link href={`/shop?category=${slug}`} className="cursor-pointer">
        <div className="w-full">
          <Image
            src={item || ""}
            alt={name}
            height={200}
            width={200}
            className="aspect-square w-full"
          />
        </div>
        <h3 className="bold-text text-center mt-2 truncate py-1.5 text-text-sdy">
          {name}
        </h3>{" "}
      </Link>
    </div>
  );
}

export default FourItemItem;
