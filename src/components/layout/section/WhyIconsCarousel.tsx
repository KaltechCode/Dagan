import { WhyIcons } from "@/components/ui/shared/Icon/Icon";
import WhyIcon from "@/components/ui/shared/Icon/WhyIcon";
import { IWhyIcon, whyUs } from "@/data";
import React from "react";

function WhyIconsCarousel() {
  return (
    <div className="grid grid-cols-1 grid-rows-1 gap-7 xl:gap-16 md:grid-cols-4 xl:grid-cols-4 py-8 px-4 xmd:border border-gray-200 rounded-4xl mt-20">
      {whyUs.map((item: IWhyIcon, key: number) => {
        return <WhyIcon {...item} key={key} />;
      })}
    </div>
  );
}

export default WhyIconsCarousel;
