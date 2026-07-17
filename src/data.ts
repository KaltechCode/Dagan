import { ecommerceReactIconsTypes } from "./components/ui/shared/Icon/Icon.types";

export interface IWhyIcon {
  name: ecommerceReactIconsTypes;
  text: string;
}

export const MAIN_NAVIGATION = [
  {
    label: "Shop",
    href: "/shop",
  },
  {
    label: "Categories",
    href: "/categories",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export const whyUs: IWhyIcon[] = [
  {
    name: "bus",
    text: "Flexible Delivery",
  },
  {
    name: "money",
    text: "100% Money Back",
  },
  {
    name: "payment",
    text: "Secure Payment",
  },
  {
    name: "customerSupport",
    text: "24 Hour Support",
  },
];
