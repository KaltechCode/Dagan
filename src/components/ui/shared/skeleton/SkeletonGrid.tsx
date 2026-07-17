import { SkeletonProductCard } from "./SkeletonProductCard";

interface Props {
  items?: number;
}

export function SkeletonGrid({ items = 8 }: Props) {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {Array.from({
        length: items,
      }).map((_, index) => (
        <SkeletonProductCard key={index} />
      ))}
    </div>
  );
}
