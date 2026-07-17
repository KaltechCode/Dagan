"use client";

import NavItem from "./NavItem";

export interface NavigationItem {
  label: string;
  href: string;
}

interface NavigationProps {
  items: NavigationItem[];
}

export default function Navigation({ items }: NavigationProps) {
  return (
    <ul className="flex items-center flex-1 justify-center">
      {items.map((item) => (
        <NavItem key={item.href} item={item} />
      ))}
    </ul>
  );
}
