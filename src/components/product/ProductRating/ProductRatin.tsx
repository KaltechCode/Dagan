"use client";

import { Star } from "lucide-react";

import { cn } from "@/libs/utils";

interface ProductRatingPropsTwo {
  rating: number;

  reviews?: number;

  showReviews?: boolean;

  size?: number;

  className?: string;
}

export function ProductRatingTwo({
  rating,
  reviews = 0,
  showReviews = true,
  size = 16,
  className,
}: ProductRatingPropsTwo) {
  const roundedRating = Math.round(rating);

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="flex items-center">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            size={size}
            className={cn(
              index < roundedRating
                ? "fill-yellow-400 text-yellow-400"
                : "text-gray-300",
            )}
          />
        ))}
      </div>

      {showReviews && (
        <span className="text-sm text-[var(--text-muted)]">({reviews})</span>
      )}
    </div>
  );
}

interface ProductRatingProps {
  rating: number;

  reviews: number;

  shop?: boolean;
}

export default function ProductRating({
  rating,
  reviews,
  shop,
}: ProductRatingProps) {
  return (
    <div
      className={`flex items-center gap-3 mt-3 ${shop && "flex-col gap-3 items-start"}`}
    >
      <div className="flex">
        {Array.from({
          length: 5,
        }).map((_, index) => (
          <Star
            key={index}
            size={14}
            className={
              index < Math.round(rating)
                ? "fill-yellow-400 text-yellow-400"
                : "text-gray-300"
            }
          />
        ))}
      </div>

      <span className="text-sm text-gray-500">
        {rating.toFixed(1)} ({reviews} reviews)
      </span>
    </div>
  );
}
