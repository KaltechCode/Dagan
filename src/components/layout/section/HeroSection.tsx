"use client";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/shared/Button";
import { HeroSectionData } from "@/types/ui";

interface HeroSectionProps {
  data: HeroSectionData;
}

export default function HeroSection({ data }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-bg-other h-[80vh]">
      <Image
        src={data.image[0]}
        alt={data.title}
        width={850}
        height={438}
        priority
        className="aspect-video w-[90%] xmd:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[45%] absolute right-0 lg:bottom-[10%] bottom-0 z-10"
      />
      <Image
        src={"/images/banners/hero-image-sm-4.png"}
        alt={data.title}
        width={50}
        height={50}
        priority
        className="aspect-square w-[70px] absolute right-5 top-24 xmd:right-24 md:right-[25%] xl:right-[40%] z-10"
      />

      {/* carrot */}
      <Image
        src={"/images/banners/hero-image-sm-2.png"}
        alt={data.title}
        width={50}
        height={50}
        priority
        className="aspect-square  w-[70px]  absolute left-24 xmd:left-40 bottom-[20%] md:left-[40%] z-10"
      />

      {/* second grren */}
      <Image
        src={"/images/banners/hero-image-sm-1.png"}
        alt={data.title}
        width={50}
        height={50}
        priority
        className="aspect-video  w-[70px]  absolute left-10 xmd:left-28 xmd:top-24 md:left-[10%] top-16 z-10"
      />
      <Image
        src={"/images/banners/hero-image-sm-3.png"}
        alt={data.title}
        width={50}
        height={50}
        priority
        className="aspect-video w-[80px] lg:w-[100px] absolute right-[16%] bottom-[40%] xmd:bottom-[45%] md:bottom-[50%] lg:bottom-[58%] lg:right-[25%] xl:right-[30%] z-10"
      />

      <div className="absolute inset-0 " />
      <div className="w-[90%] mx-auto absolute  z-20  top-28 items-center ml-[3%]">
        <div className="w-[90%] sm:w-[80%] xmd:w-[70%]  lg:w-[60%] mx-auto lg:ml-20">
          <Image
            src={"/images/banners/subtitle.png"}
            alt={data.title}
            width={300}
            height={100}
            priority
            className="aspect-[3/1] mx-auto md:ml-0 lg"
          />
          <h1 className="hero-title mt-7 md:w-[65%] lg:w-[80%] text-center md:text-left">
            {data.title}
          </h1>

          <div className="flex justify-center md:justify-start">
            <Button className="mt-8" variant="primary">
              <Link href={data.link}>{data.linkText}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
