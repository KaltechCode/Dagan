"use client";

import { LucideProps } from "lucide-react";

import { icons } from "@/assets/icons";

import {
  ecommerceReactIconsTypes,
  IconName,
  SocialIconName,
} from "./Icon.types";
import { IconBaseProps, IconType } from "react-icons/lib";
import { socialIcons } from "@/assets/icons/social";
import Link from "next/link";
import { ecommerceReactIcons } from "@/assets/icons/ecommerce";

interface Props extends LucideProps {
  name: IconName;
}

export function Icon({ name, ...props }: Props) {
  const Component = icons[name];

  return <Component {...props} />;
}

interface Prop extends IconBaseProps {
  name: SocialIconName;
  link: string;
}

export function SocialIcon({ name, link, ...props }: Prop) {
  const Component: IconType = socialIcons[name];

  return (
    <Link target="_blank" href={link} className="cursor-pointer">
      <Component {...props} />
    </Link>
  );
}

interface WhyPros extends IconBaseProps {
  name: ecommerceReactIconsTypes;
}
export function WhyIcons({ name, ...props }: WhyPros) {
  const Component: IconType = ecommerceReactIcons[name];

  return <Component {...props} />;
}
