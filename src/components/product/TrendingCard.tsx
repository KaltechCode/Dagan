import Image from "next/image";
import React from "react";

function TrendingCard({
  image,
  category,
}: {
  image: string;
  category: string;
}) {
  console.log(image);
  return (
    <div className="relative top-0 left-0">
      <Image
        src={image}
        alt={`Dagan ${category}  products`}
        height={200}
        width={200}
        className="h-full w-full rounded-2xl aspect-square"
      />
      <div className="bg-white absolute bottom-5 left-1/2 -translate-x-1/2 w-[70%] md:w-[50%] rounded-lg shadow-md">
        <p className="category-title flex justify-center w-full text-primary py-3 px-6 rounded-lg">
          {category}
        </p>
      </div>
    </div>
  );
}

export default TrendingCard;
