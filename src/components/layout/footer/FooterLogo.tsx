import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function FooterLogo() {
  return (
    <div className="space-y-6 col-span-1 w-full md:col-span-2 xl:col-span-3">
      <Link href="/" className="inline-flex">
        <Image
          src="/Dagan-white-logo.png"
          alt="Dagan International Market"
          width={180}
          height={55}
          priority
        />
      </Link>

      <ul className="space-y-5">
        <li className="flex items-center gap-3">
          <p className="font-semibold">Mail</p>

          <a
            href="mailto:info@daganinternationalmarket.com"
            className="mt-1 block p-text text-white/80 truncate transition hover:text-[#8BC53F]"
          >
            info@daganinternationalmarket.com
          </a>
        </li>

        <li className="flex items-center gap-3">
          <p className="font-semibold">Phone</p>

          <a
            href="tel:+19312172876"
            className="mt-1 block p-text text-white/80 transition hover:text-[#8BC53F]"
          >
            +1 (931) 217 2876
          </a>
        </li>

        <li className="flex items-center gap-3">
          <p className="font-semibold">Address</p>

          <address className="mt-1 p-text not-italic leading-7 text-white/80">
            1681 Fort Campbell Blvd # D,
            <br />
            Clarksville, TN 37042, USA.
          </address>
        </li>
      </ul>
    </div>
  );
}
