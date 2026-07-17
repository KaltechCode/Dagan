import Navbar from "./Navbar";
import MobileMenu from "./MobileMenu";
import { FiSearch, FiShoppingBag } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import Search from "@/components/small/Search";
import Logo from "@/components/small/Logo";

import Image from "next/image";
import ShoppingBasket from "@/components/small/ShoppingBasket";
import UserIcon from "@/components/small/UserIcon";
import TopBar from "./TopBar";

export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white shadow-sm">
      <TopBar />
      <div className="mx-auto flex w-[90%] max-w-[1500px] flex-col gap-4 py-5 md:grid md:grid-cols-4 ">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-10  md:col-span-3">
          <Logo />

          {/* search */}
          <Search />
        </div>

        <div className="flex items-center justify-between gap-3 md:col-span-1 md:justify-end">
          <UserIcon />
          <ShoppingBasket />
          <MobileMenu />
        </div>
      </div>
      <div className="hidden border-t border-slate-200 bg-slate-50 px-5 py-3 md:block">
        <Navbar />
      </div>
    </header>
  );
}
