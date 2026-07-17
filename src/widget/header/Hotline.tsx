import Link from "next/link";
import { PhoneCall } from "lucide-react";

export default function Hotline() {
  return (
    <div className="hidden shrink-0 lg:flex lg:items-center lg:gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#EAF5E5]">
        <PhoneCall className="h-5 w-5 text-[#00552F]" strokeWidth={2} />
      </div>

      <div className="leading-tight">
        <p className="text-xs uppercase tracking-wide text-gray-500">
          Hotline 24/7
        </p>

        <Link
          href="tel:+19312172876"
          className="block text-sm font-semibold text-gray-900 transition-colors hover:text-[#7CB518]"
        >
          +1 (931) 217-2876
        </Link>
      </div>
    </div>
  );
}
