import { Skeleton } from "./Skeleton";

export default function ShopSkeleton() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {Array.from({
        length: 12,
      }).map((_, index) => (
        <Skeleton key={index} className="h-[380px] rounded-xl" />
      ))}
    </div>
  );
}
