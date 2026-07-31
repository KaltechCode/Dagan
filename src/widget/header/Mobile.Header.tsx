import MobileMenu from "@/components/layout/Header/MobileMenu";
import HeaderCart from "./Header.Cart";
import HeaderLogo from "./Header.Logo";
import HeaderSearch from "./Header.Search";
import HeaderMenuButton from "./Menu.Button";
import Navbar from "./Navbar";
import Topbar from "./Topbar";
import { Menu } from "lucide-react";
import { Icon } from "@/components/ui/shared/Icon/Icon";
import HeaderAccount from "./Header.Account";

export default function MobileHeader() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white">
      <Topbar />
      <div className="flex items-center justify-between  px-1  sm:px-5 py-3 px-2 pr-4 w-full">
        {/* logo */}
        <div className="flex items-center gap-4 ">
          {/* <HeaderMenuButton /> */}

          <HeaderLogo />
        </div>

        {/* search */}
        <HeaderSearch />

        {/* Actions */}
        <div className="flex items-center">
          <HeaderAccount />

          <HeaderCart />

          <div className="relative  z-0 w-full border-b border-gray-200 bg-white">
            <MobileMenu
              trigger={
                <button
                  aria-label="Open Menu"
                  className="rounded-md transition hover:bg-gray-100 mt-.5"
                >
                  <Icon size={28} className="text-gray-600" name="menu" />
                </button>
              }
            />
          </div>
        </div>
      </div>
    </header>
  );
}
