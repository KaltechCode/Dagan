import HeaderCart from "./Header.Cart";
import HeaderLogo from "./Header.Logo";
import HeaderSearch from "./Header.Search";
import HeaderMenuButton from "./Menu.Button";
import Navbar from "./Navbar";
import Topbar from "./Topbar";

export default function MobileHeader() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white">
      <Topbar />
      <div className="flex items-center justify-between  px-1  sm:px-5 py-3">
        <div className="flex items-center gap-4 ">
          {/* <HeaderMenuButton /> */}

          <HeaderLogo />

          {/* <HeaderSearch /> */}
        </div>

        <div className="flex items-center gap-3">
          <HeaderSearch compact />

          <HeaderCart />

          <div className="relative z-50 w-full border-b border-gray-200 bg-white">
            <Navbar />
          </div>
        </div>
      </div>
    </header>
  );
}
