import React from "react";
import { AiOutlineUser } from "react-icons/ai";

function UserIcon() {
  return (
    <button className="flex justify-center items-center rounded-full border border-slate-200 bg-white h-12 w-12 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 md:inline-flex items-center gap-2">
      <AiOutlineUser className="h-4 w-4" />
    </button>
  );
}

export default UserIcon;
