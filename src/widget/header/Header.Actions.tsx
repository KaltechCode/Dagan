import HeaderAccount from "./Header.Account";
import HeaderCart from "./Header.Cart";
import HeaderWishlist from "./Header.WishList";

export default function HeaderActions() {
  return (
    <div className="flex items-center gap-2 sm:gap-3">
      {/* <HeaderWishlist /> */}
      <HeaderAccount />
      <HeaderCart />
    </div>
  );
}
