"use client";

import { LucideProps } from "lucide-react";

import { icons } from "@/assets/icons";

import {
  DashboardIconName,
  ecommerceReactIconsTypes,
  IconName,
  SocialIconName,
} from "./Icon.types";
import { IconBaseProps, IconType } from "react-icons/lib";
import { socialIcons } from "@/assets/icons/social";
import Link from "next/link";
import { ecommerceReactIcons } from "@/assets/icons/ecommerce";
import { dashboardIcons } from "@/assets/icons/dashboard";

interface Props extends LucideProps {
  name: IconName;
}

// icon (lucide)

export function Icon({ name, ...props }: Props) {
  const Component = icons[name];

  return <Component {...props} />;
}

interface Prop extends IconBaseProps {
  name: SocialIconName;
  link: string;
}

// social Icon

export function SocialIcon({ name, link, ...props }: Prop) {
  const Component: IconType = socialIcons[name];

  return (
    <Link target="_blank" href={link} className="cursor-pointer">
      <Component {...props} />
    </Link>
  );
}

interface DProp extends IconBaseProps {
  name: DashboardIconName;
}
// dashboard Icon

export function DashboardIcon({ name, ...props }: DProp) {
  const Component: IconType = dashboardIcons[name];

  return <Component {...props} />;
}

// why Icon

interface WhyPros extends IconBaseProps {
  name: ecommerceReactIconsTypes;
}
export function WhyIcons({ name, ...props }: WhyPros) {
  const Component: IconType = ecommerceReactIcons[name];

  return <Component {...props} />;
}
