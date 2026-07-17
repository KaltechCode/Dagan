"use client";

import { Skeleton } from "./Skeleton";

export default function OrdersSkeleton() {
  return (
    <div className="space-y-4">
      {Array.from({
        length: 6,
      }).map((_, index) => (
        <Skeleton key={index} className="h-16 w-full rounded-lg" />
      ))}
    </div>
  );
}
