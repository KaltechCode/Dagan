interface CategorySkeletonProps {
  count?: number;
}

export default function CategorySkeleton({ count = 8 }: CategorySkeletonProps) {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
      {Array.from({
        length: count,
      }).map((_, index) => (
        <div key={index} className="overflow-hidden rounded-xl border">
          <div className="aspect-square bg-gray-200" />

          <div className="space-y-2 p-4">
            <div className="h-4 w-3/4 rounded bg-gray-200" />

            <div className="h-3 w-1/2 rounded bg-gray-200" />
          </div>
        </div>
      ))}
    </div>
  );
}
