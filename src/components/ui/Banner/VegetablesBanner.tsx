import Image from "next/image";
import React from "react";
import { Button } from "../shared/Button";
import Link from "next/link";
import { Icon } from "../shared/Icon/Icon";

function VegetablesBanner() {
  return (
    <div className="bg-[#EEEBE4] rounded-3xl row-span-1 relative top-0 left-0 hidden xl:block">
      <Image
        src={"/banners/Dagan-welcome.png"}
        height={44}
        width={280}
        alt=""
        className="w-auto mx-auto mt-30 lg:mt-10"
      />
      <h3 className="section-title w-[60%] lg:w-[70%] text-center mx-auto mt-10">
        Get Up to 26% Off Vegetables
      </h3>

      <div className=" w-full flex justify-center">
        <Button className="mt-8" variant="primary">
          <Link href={"/shop"} className="flex gap-2">
            {"Shop"} <Icon name="forward" />
          </Link>
        </Button>
      </div>

      <Image
        src="/banners/dagan-food-bag.png"
        height={250}
        width={291}
        className="absolute left-1/2 -translate-x-1/2 bottom-0"
        alt=""
      />
    </div>
  );
}

export default VegetablesBanner;
