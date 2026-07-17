import React from "react";
import { BsFillLightningChargeFill } from "react-icons/bs";

function HotSale() {
  return (
    <div className="flex gap-2 bg-black py-2 pl-2">
      <span className="flex gap-1 items-center text-[12px]">
        HOT SALE 20% OFF{" "}
        <BsFillLightningChargeFill className="fill-background-other" />
      </span>{" "}
      <span className="flex items-center gap-1 text-[12px]">
        HOT SALE 20% OFF{" "}
        <BsFillLightningChargeFill className="fill-background-other" />
      </span>
    </div>
  );
}

export default HotSale;
