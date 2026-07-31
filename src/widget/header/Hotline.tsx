import Link from "next/link";
import { PhoneCall } from "lucide-react";

export default function ContactBtn() {
  return (
    <div className="hidden shrink-0 lg:flex lg:items-center lg:gap-3 bg-bg-pry px-6 py-3 rounded-full hover:bg-transparent group transition-all duration-300">
      <PhoneCall className="text-white group-hover:text-secondary" size={18} />

      <Link
        href="contact"
        className="block text-link text-white transition-colors group-hover:text-secondary"
      >
        Contact Us
      </Link>
    </div>
  );
}
