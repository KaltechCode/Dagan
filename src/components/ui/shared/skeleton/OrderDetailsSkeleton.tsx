import { Skeleton } from "@/components/ui/shared/skeleton";

export default function OrderDetailsSkeleton() {
  return (
    <div className="space-y-8">
      <div className="rounded-xl border p-6">
        <div className="space-y-4">
          <Skeleton className="h-8 w-52" />

          <div className="grid gap-4 md:grid-cols-3">
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-full" />
          </div>
        </div>
      </div>

      <div className="rounded-xl border">
        <div className="border-b p-6">
          <Skeleton className="h-7 w-48" />
        </div>

        <div className="divide-y">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="flex items-center gap-4 p-6">
              <Skeleton className="h-20 w-20 rounded-lg" />

              <div className="flex-1 space-y-3">
                <Skeleton className="h-5 w-2/3" />
                <Skeleton className="h-4 w-40" />
              </div>

              <Skeleton className="h-6 w-20" />
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border p-6">
          <Skeleton className="mb-5 h-7 w-40" />

          <div className="space-y-3">
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-5/6" />
            <Skeleton className="h-5 w-2/3" />
          </div>
        </div>

        <div className="rounded-xl border p-6">
          <Skeleton className="mb-5 h-7 w-40" />

          <div className="space-y-3">
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-4/5" />
            <Skeleton className="h-5 w-1/2" />
          </div>
        </div>
      </div>

      <div className="rounded-xl border p-6">
        <Skeleton className="mb-6 h-7 w-40" />

        <div className="space-y-4">
          <div className="flex justify-between">
            <Skeleton className="h-5 w-28" />
            <Skeleton className="h-5 w-24" />
          </div>

          <div className="flex justify-between">
            <Skeleton className="h-5 w-28" />
            <Skeleton className="h-5 w-24" />
          </div>

          <div className="flex justify-between">
            <Skeleton className="h-6 w-32" />
            <Skeleton className="h-6 w-28" />
          </div>
        </div>
      </div>
    </div>
  );
}
