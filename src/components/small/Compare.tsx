import React from "react";
import { MdCompareArrows } from "react-icons/md";

function Compare() {
  return (
    <button className="h-9 w-9 p-2 rounded-full bg-white shadow-md flex items-center justify-center group/parentwishList hover:bg-primary hover:shadow-lg transition-all duration-300">
      <MdCompareArrows
        size={18}
        className="text-primary cursor-pointer rounded-full group-hover/parentwishList:text-white"
      />
    </button>
  );
}

export default Compare;
