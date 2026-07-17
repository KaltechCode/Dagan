import Image from "next/image";
import { Button } from "../shared/Button";
import Link from "next/link";
import { Icon } from "../shared/Icon/Icon";

function GardenFreshBanner() {
  return (
    <div className="bg-[#EEEBE4] rounded-3xl row-span-1 relative top-0 left-0 hidden md:block  xl:col-span-2">
      <Image
        src={"/banners/Dagan-welcome.png"}
        height={44}
        width={280}
        alt=""
        className="w-auto mx-auto mt-10"
      />
      <h3 className="section-title  w-[60%]  text-center mx-auto mt-10">
        Get Up to 26% Off Vegetables
      </h3>

      <Image
        src="/banners/dagan-food-bag.png"
        height={250}
        width={291}
        className="absolute left-1/2 -translate-1/2 top-[60%] w-[50%]"
        alt=""
      />

      <div className=" w-full flex justify-center absolute left-1/2 -translate-x-1/2 bottom-5">
        <Button className="mt-8" variant="primary">
          <Link href={"/shop"} className="flex gap-2">
            {"Shop"} <Icon name="forward" />
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default GardenFreshBanner;
