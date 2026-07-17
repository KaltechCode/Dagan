import Link from "next/link";

interface FooterLink {
  label: string;

  href: string;
}

interface Props {
  title: string;

  links: FooterLink[];
}

export default function FooterLinks({ title, links }: Props) {
  return (
    <div className="w-full col-span-1 xl:col-span-2">
      <nav aria-labelledby={title} className="">
        <h3
          id={title}
          className="mb-5 text-sm font-semibold uppercase tracking-wide text-white"
        >
          {title}
        </h3>

        <ul className="space-y-3">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="p-text text-white/75 transition-colors duration-200 hover:text-[#8BC53F]"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
