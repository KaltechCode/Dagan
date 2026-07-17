import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  {
    label: "Privacy Policy",
    href: "/privacy-policy",
  },
  {
    label: "Terms & Conditions",
    href: "/terms-and-conditions",
  },
  {
    label: "Shipping Policy",
    href: "/shipping-policy",
  },
];

const payments = [
  {
    name: "Visa",
    image: "/payment/visa.svg",
  },
  {
    name: "Mastercard",
    image: "/payment/master-card.svg",
  },
  {
    name: "Amex",
    image: "/payment/amiix.svg",
  },
  {
    name: "PayPal",
    image: "/payment/paypal.svg",
  },
  {
    name: "Apple Pay",
    image: "/payment/apple.svg",
  },
  {
    name: "Discover",
    image: "/payment/discover.svg",
  },
];

export default function FooterBottom() {
  return (
    <div className="border-t border-white/10 py-6">
      <div className="flex flex-col  gap-6 lg:flex-row lg:items-center lg:justify-between">
        {/* Left */}

        <div className="flex gap-7 items-center justify-center">
          <p className="p-text text-white/70">
            © {new Date().getFullYear()} Dagan International Market. All rights
            reserved.
          </p>

          <div className="flex items-center gap-2 text-white/70 p-text">
            <p>Design by </p>

            <Link
              href={"https://kaltechconsultancy.tech/"}
              className="cursor-pointer bold-text text-white"
            >
              {" "}
              Kaltech
            </Link>
          </div>
        </div>

        {/* Right */}

        <div className="flex flex-wrap items-center gap-3 justify-center">
          {payments.map((payment) => (
            <div
              key={payment.name}
              className="flex items-center justify-center rounded-md bg-white p-1 px-2"
            >
              <Image
                src={payment.image}
                alt={payment.name}
                width={48}
                height={28}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
