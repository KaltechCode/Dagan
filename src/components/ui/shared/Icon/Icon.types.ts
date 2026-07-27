import { icons } from "@/assets/icons";
import { dashboardIcons } from "@/assets/icons/dashboard";
import { ecommerceReactIcons } from "@/assets/icons/ecommerce";
import { socialIcons } from "@/assets/icons/social";

export type IconName = keyof typeof icons;
export type SocialIconName = keyof typeof socialIcons;
export type ecommerceReactIconsTypes = keyof typeof ecommerceReactIcons;
export type DashboardIconName = keyof typeof dashboardIcons;
