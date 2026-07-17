"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { NavigationItem } from "./Header.Navigation";

interface Props {
  item: NavigationItem;
}

export default function NavItem({ item }: Props) {
  const pathname = usePathname();

  const active =
    pathname === item.href ||
    (item.href !== "/" && pathname.startsWith(item.href));

  return (
    <li>
      <Link
        href={item.href}
        aria-current={active ? "page" : undefined}
        className={clsx(
          "relative flex h-14 items-center px-5 lg:px-4 text-sm font-semibold uppercase tracking-wide transition-colors duration-200",
          active ? "text-[#7CB518]" : "text-gray-900 hover:text-[#7CB518]",
        )}
      >
        {item.label}

        <span
          className={clsx(
            "absolute bottom-0 left-1/2 h-[3px] -translate-x-1/2 rounded-full bg-[#7CB518] transition-all duration-300",
            active ? "w-8" : "w-0 group-hover:w-8",
          )}
        />
      </Link>
    </li>
  );
}
