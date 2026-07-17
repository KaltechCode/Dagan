import { ReactNode } from "react";

export type Size = "xs" | "sm" | "md" | "lg" | "xl" | "icon";

export type Radius = "none" | "sm" | "md" | "lg" | "full";

export type Variant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "destructive"
  | "success"
  | "warning";

export interface BaseComponentProps {
  className?: string;

  children?: ReactNode;
}

export interface HeroSlide {
  id: number;

  title: string;

  subtitle?: string;

  description?: string;

  image: string;

  mobileImage?: string;

  buttonText?: string;

  buttonLink?: string;
}

export interface HeroSectionData {
  id: number;

  title: string;

  image: string[];

  link: string;

  linkText: string;
}

export interface HomepageData {
  hero: HeroSectionData;
}
