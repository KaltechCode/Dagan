import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "Categories", href: "/categories" },
  { label: "Deals", href: "/deals" },
  { label: "Blog", href: "/blog" },
];

export default function Navbar() {
  return (
    <nav className="mx-auto flex w-[90%] max-w-[1500px] flex-wrap items-center gap-5 text-sm font-medium text-slate-600">
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="transition hover:text-slate-950"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
