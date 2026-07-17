import React from "react";
import { FiSearch } from "react-icons/fi";

function Search() {
  return (
    <div className="flex items-center gap-3 rounded-full bg-white px-2 py-2 w-full lg:max-w-[700px]">
      <button className="bg-background-deep-secondary px-5 py-2 text-sm font-semibold uppercase tracking-[0.15em] text-white transition hover:bg-[#3f7311] h-12">
        Search
      </button>
      <div className="flex flex-1 items-center gap-3 border border-background-secondary h-12 rounded-md px-2">
        <FiSearch className="text-secondary" />
        <input
          type="search"
          placeholder="What are you looking for today?"
          className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
        />
      </div>
    </div>
  );
}

export default Search;
