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
      <div className="mx-auto flex h-20 items-center gap-8 px-6 bg-white">
        <HeaderLogo />
        <HeaderSearch />
        <HeaderActions />
      </div>
      <div className="relative z-50 border-b border-gray-200 bg-white">
        <Navbar />
      </div>
    </header>
  );
}
