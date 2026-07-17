import { Skeleton } from "./Skeleton";

interface Props {
  lines?: number;
}

export function SkeletonText({ lines = 3 }: Props) {
  return (
    <div className="space-y-2">
      {Array.from({
        length: lines,
      }).map((_, index) => (
        <Skeleton key={index} className="h-4 w-full" />
      ))}
    </div>
  );
}
