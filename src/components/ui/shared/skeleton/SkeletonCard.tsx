import { Skeleton } from "./Skeleton";
import { SkeletonText } from "./SkeletonText";

export function SkeletonCard() {
  return (
    <div className="rounded-xl border border-[var(--border)] p-4">
      <Skeleton className="h-48 w-full rounded-lg" />

      <div className="mt-4">
        <SkeletonText lines={2} />
      </div>

      <Skeleton className="mt-4 h-10 w-full rounded-lg" />
    </div>
  );
}
