"use client";

import { Skeleton } from "./Skeleton";

export default function CartSkeleton() {
  return (
    <div className="space-y-6">
      {Array.from({ length: 4 }).map((_, index) => (
        <div key={index} className="flex gap-4">
          <Skeleton className="h-24 w-24 rounded-lg" />

          <div className="flex-1 space-y-3">
            <Skeleton className="h-5 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-10 w-32" />
          </div>
        </div>
      ))}
    </div>
  );
}
