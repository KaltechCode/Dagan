import Image from "next/image";
import React from "react";

function HomeFirstBanner() {
  return (
    <div className="bg-bg-other aspect-[6/3] xl:aspect-[5/2] min-h-[40vh] relative overflow-hidden w-full">
      <div className=" h-[60%] aspect-square  absolute z-10 left-1/2 top-1/2 -translate-1/2 bg-[linear-gradient(#fff_0%,#f3f3f3_30%)] rounded-full"></div>

      <div className="absolute top-0 -translate-y-1/2 -left-7 hidden">
        <Image
          height={473}
          width={486}
          priority
          className="h-full"
          src={"/banners/frruit-dagan-image.png"}
          alt=""
        />
      </div>

      <div className="">
        <Image
          height={442}
          width={167}
          priority
          className="absolute top-1/2 -translate-y-1/2 -left-7 min-w-[200px] h-[442px] aspect-auto"
          src={"/banners/fruit-daga-image.png"}
          alt=""
        />
      </div>

      <div className="absolute z-30 w-[95%] sm:w-[75%] xmd:w-[65%] md:w-[60%] 2xl:w-[55%] top-1/2 left-1/2 -translate-1/2 text-center">
        <p className="hero-title">Grab the best Offer Of this Week!</p>
        <div className="h-30"></div>
      </div>
      <div className="">
        <Image
          height={470}
          width={555}
          priority
          className="w-[50%] xmd:w-[37%]  md:w-[35%] absolute bottom-0 right-0 z-10"
          src={"/banners/fruit-dagan-banner-1.png"}
          alt=""
        />
      </div>
      <div className="hidden xl:block">
        <Image
          height={470}
          width={555}
          priority
          className="w-[50%] xmd:w-[37%]  md:w-[35%] lg:w-[25%] absolute bottom-20 -left-10 z-10"
          src={"/banners/frruit-dagan-image.png"}
          alt=""
        />
      </div>
      <div className="">
        <Image
          height={470}
          width={555}
          priority
          className="w-auto md:w-[15%] lg:w-[10%] z-10 absolute bottom-2 right-1/2 "
          src={"/banners/tomatoes.png"}
          alt=""
        />
      </div>
    </div>
  );
}

export default HomeFirstBanner;
