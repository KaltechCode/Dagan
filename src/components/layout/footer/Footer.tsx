import FooterBottom from "./FooterBottom";
import FooterLinks from "./FooterLinks";
import FooterLogo from "./FooterLogo";
import Newsletter from "./Newsletter";

const information = [
  {
    label: "Contact Us",
    href: "/contact",
  },
  {
    label: "Career",
    href: "/career",
  },
  {
    label: "My Account",
    href: "/account",
  },
  {
    label: "Order & Returns",
    href: "/returns",
  },
  {
    label: "FAQs",
    href: "/faqs",
  },
];

const quickShop = [
  {
    label: "Women",
    href: "/category/women",
  },
  {
    label: "Men",
    href: "/category/men",
  },
  {
    label: "Children",
    href: "/category/children",
  },
  {
    label: "Accessories",
    href: "/category/accessories",
  },
  {
    label: "Blog",
    href: "/blog",
  },
];

const customerService = [
  {
    label: "Orders FAQs",
    href: "/order-faq",
  },
  {
    label: "Shipping",
    href: "/shipping",
  },
  {
    label: "Privacy Policy",
    href: "/privacy-policy",
  },
  {
    label: "Return & Refund",
    href: "/returns",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#00552F] text-white">
      <div className="mx-auto w-[90%] lg:px-8">
        <div className="grid  gap-10 py-12 grid-cols-1 md:grid-cols-5 xl:grid-cols-12 lg:gap-8 xl:gap-12">
          <FooterLogo />

          <FooterLinks title="Information" links={information} />

          <FooterLinks title="Quick Shop" links={quickShop} />

          <FooterLinks title="Customer Services" links={customerService} />

          <Newsletter />
        </div>

        <FooterBottom />
      </div>
    </footer>
  );
}
