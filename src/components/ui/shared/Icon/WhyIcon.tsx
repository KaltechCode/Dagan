import React from "react";
import { WhyIcons } from "./Icon";
import { IWhyIcon } from "@/data";

function WhyIcon({ name, text }: IWhyIcon) {
  return (
    <div className="flex gap-5 justify-center items-center border-b border-gray-200 py-5">
      <WhyIcons name={name} className="text-bg-sdy text-4xl " />
      <p className="product-title">{text}</p>
    </div>
  );
}

export default WhyIcon;
