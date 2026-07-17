"use client";
import Compare from "@/components/small/Compare";
import HotSale from "@/components/small/HotSale";
import ProductBadge from "@/components/small/ProductBadge";
import WishList from "@/components/small/WishList";
import { Product } from "@/types/product";
import Image from "next/image";
import Marquee from "react-fast-marquee";

// import ProductImage from "../ProductImage/ProductImage";
// import ProductPrice from "../ProductPrice/ProductPrice";
// import ProductRating from "../ProductRating/ProductRating";
// import ProductActions from "../ProductActions/ProductActions";
// import ProductStock from "../ProductStock/ProductStock";
// import ProductTitle from "../ProductTitle/ProductTitle";

function ProductVerticalCard({ item }: { item: Product }) {
  return (
    <div className="group relative left-0 right-0 cursor-pointer">
      {/* image */}
      <div className="relative top-0 left-0 rounded-2xl w-full aspect-[3/4] overflow-hidden bg-[#efefef]">
        <Image
          src={item.images ? item.images[0].src : ""}
          alt={item?.description || "Product image"}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover aspect-[3/4] group-hover:scale-120 transition-all duration-500 ease-in-out absolute top-0 left-0 group-hover:hidden"
        />
        <Image
          src={item.images ? item.images[0].src : ""}
          alt={item?.description || "Product image"}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover aspect-[3/4] group-hover:scale-120 transition-all duration-500 ease-in-out absolute top-0 left-0 hidden group-hover:block"
        />

        <div className="absolute top-3 left-3">
          <ProductBadge label="Sale" />
        </div>
        <div className="absolute w-full bottom-0 right-0 group-hover:hidden bg-black">
          <Marquee speed={50} pauseOnHover={true} gradient={false}>
            <HotSale />
          </Marquee>
        </div>

        <div className="absolute top-3 -right-10 group-hover:right-3 gap-2 flex flex-col">
          <WishList />
          <Compare />
        </div>
      </div>

      {/* Decriptions */}
      <div className="mt-3">
        <div className="w-full h-2 bg-[#efefef] relative left-0 top-0 rounded-full">
          <div
            className={`absolute h-full top-0 left-0 w-[50%] rounded-full bg-red-500`}
          ></div>
        </div>

        <div className="hidden md:flex w-full justify-between mt-4">
          <p>
            <span className="text-secondary"> SOLD: {}</span>{" "}
            <span className="text-bold text-black">23</span>
          </p>
          <p>
            <span className="text-secondary">AVAILABLE: {}</span>{" "}
            <span className="text-bold text-black">199</span>
          </p>
        </div>

        <div className="mt-3">
          <h2 className="text-black">{item.name}</h2>
        </div>

        <div className="flex items-center mt-2">
          <span className="text-primary font-bold">$ {item.salePrice}</span>
          <span className="text-secondary line-through ml-2">
            ${item.regularPrice}
          </span>
          <span className="text-primary text-sm font-bold ml-2 bg-background-secondary py-[3px] px-[10px] rounded-full">
            {(
              ((Number(item.regularPrice) - Number(item.salePrice)) /
                Number(item.regularPrice)) *
              100
            ).toFixed(0)}
            %
          </span>
        </div>
      </div>

      <div className=""></div>
    </div>
  );
}

export default ProductVerticalCard;
