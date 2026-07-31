import Link from "next/link";
import { PhoneCall } from "lucide-react";

export default function ContactBtn() {
  return (
    <div className="hidden shrink-0 lg:flex lg:items-center lg:gap-3 bg-white text-secondary px-6 py-3 rounded-full hover:bg-transparent group transition-all duration-300 border border-bg-pry hover:border-gray-200">
      <PhoneCall className="text-secondary group-hover:text-white" size={18} />

      <Link
        href="contact"
        className="block text-link text-secondary transition-colors group-hover:bg-transparent group-hover:text-white"
      >
        Contact Us
      </Link>
    </div>
  );
}
