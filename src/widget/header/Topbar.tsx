import { SocialIcon } from "@/components/ui/shared/Icon/Icon";
import React from "react";

function Topbar() {
  return (
    <div className="w-full bg-bg-pry hidden md:flex justify-between lg:grid grid-cols-7 items-center py-3  px-2  sm:px-5">
      <p className="sm-text sm:p-text sm:p-text text-white uppercase md:text-left  md:col-span-3 hidden lg:block lg:col-span-2">
        <span>Hotline:</span> +1 (931) 302 0787
      </p>
      <p className="sm-text sm:p-text text-white uppercase md:text-center  md:col-span-3">
        New customers save 10% with the code GET 10
      </p>

      <div className="flex gap-2 sm:gap-3 md:justify-end md:col-span-2">
        <SocialIcon
          link="https://facebook.com"
          name="facebook"
          className="text-white p-1 border border-gray-200 rounded-full"
          size={24}
        />
        <SocialIcon
          link="https://facebook.com"
          name="instagram"
          className="text-white p-1 border border-gray-200 rounded-full"
          size={24}
        />
        <SocialIcon
          link="https://facebook.com"
          name="linkedin"
          className="text-white p-1 border border-gray-200 rounded-full"
          size={24}
        />
        <SocialIcon
          link="https://facebook.com"
          name="pinterest"
          className="text-white p-1 border border-gray-200 rounded-full"
          size={24}
        />
      </div>
    </div>
  );
}

export default Topbar;
