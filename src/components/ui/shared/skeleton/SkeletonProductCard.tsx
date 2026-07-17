import { Skeleton } from "./Skeleton";

export function SkeletonProductCard() {
  return (
    <div className="rounded-xl border border-[var(--border)] p-4">
      <Skeleton className="aspect-square w-full rounded-lg" />

      <Skeleton className="mt-4 h-5 w-3/4" />

      <Skeleton className="mt-2 h-4 w-1/2" />

      <Skeleton className="mt-4 h-10 w-full rounded-lg" />
    </div>
  );
}
