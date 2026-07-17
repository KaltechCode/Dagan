"use client";

import { Heart } from "lucide-react";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  addToWishlist,
  removeFromWishlist,
} from "@/redux/features/wishlist/Wishlist.Slice";
import { Button } from "@/components/ui/shared/Button";

interface WishlistButtonProps {
  productId: number;
}

export default function WishlistButton({ productId }: WishlistButtonProps) {
  const dispatch = useAppDispatch();

  const isWishlisted = useAppSelector((state) =>
    state.wishlist.items.some((item) => item.id === productId),
  );

  function handleClick() {
    if (isWishlisted) {
      dispatch(removeFromWishlist(productId));
    } else {
      dispatch(addToWishlist({ id: productId }));
    }
  }

  return (
    <Button
      type="button"
      variant="ghost"
      size="md"
      onClick={handleClick}
      aria-label="Toggle wishlist"
    >
      <Heart
        size={20}
        className={isWishlisted ? "fill-red-500 text-red-500" : ""}
      />
    </Button>
  );
}
