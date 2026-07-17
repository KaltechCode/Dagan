import {
  ShoppingCart,
  Heart,
  Package,
  CreditCard,
  Truck,
  Tag,
  Store,
  Handbag,
  UserRound,
  DollarSign,
} from "lucide-react";

import { BiSupport } from "react-icons/bi";

import { RiSecurePaymentLine } from "react-icons/ri";
import { CiDeliveryTruck } from "react-icons/ci";
import { LuDollarSign } from "react-icons/lu";

export const ecommerceIcons = {
  cart: Handbag,

  wishlist: Heart,

  package: Package,

  checkout: CreditCard,

  shipping: Truck,

  coupon: Tag,

  store: Store,

  bag: Handbag,

  user: UserRound,
};

export const ecommerceReactIcons = {
  customerSupport: BiSupport,
  payment: RiSecurePaymentLine,
  bus: CiDeliveryTruck,
  money: LuDollarSign,
};
