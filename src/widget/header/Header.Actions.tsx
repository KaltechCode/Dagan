import HeaderAccount from "./Header.Account";
import HeaderCart from "./Header.Cart";
import HeaderWishlist from "./Header.WishList";

export default function HeaderActions() {
  return (
    <div className="flex items-center gap-4">
      {/* <HeaderWishlist /> */}
      <HeaderAccount />
      <HeaderCart />
    </div>
  );
}
