import { ITrending } from "@/types/content/Trending";
import React from "react";
import TrendingCard from "./TrendingCard";

export default function TrendingGrid({ data }: { data: ITrending[] }) {
  return (
    <div className="w-full mt-7 grid grid-cols-2 mobile-landscape:grid-cols-4 md:grid-cols-3 gap-7 lg:gap-10">
      {data.map((item, key) => {
        return <TrendingCard {...item} key={key} />;
      })}
    </div>
  );
}
