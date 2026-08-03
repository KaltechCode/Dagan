import HeaderActions from "./Header.Actions";
import HeaderLogo from "./Header.Logo";
import HeaderNavigation from "./Header.Navigation";
import HeaderSearch from "./Header.Search";
import Navbar from "./Navbar";
import Topbar from "./Topbar";

export default function DesktopHeader() {
  return (
    <header className="sticky top-0 z-50">
      <Topbar />
      <div className="w-full bg-white">
        <div className="flex h-20 items-center justify-between gap-8 bg-white w-[95%] 3k:w-[90%] mx-auto">
          <HeaderLogo />
          <HeaderSearch />
          <HeaderActions />
        </div>
      </div>
      <div className="relative z-50 border-b border-gray-200 bg-bg-pry">
        <Navbar />
      </div>
    </header>
  );
}
