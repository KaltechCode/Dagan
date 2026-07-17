import React from "react";
import { GoHeart } from "react-icons/go";

function WishList() {
  return (
    <button className="h-9 w-9 p-2 rounded-full bg-white shadow-md flex items-center justify-center group/parentwishList hover:bg-primary hover:shadow-lg transition-all duration-300">
      <GoHeart
        size={18}
        className="text-primary cursor-pointer rounded-full group-hover/parentwishList:text-white"
      />
    </button>
  );
}

export default WishList;
