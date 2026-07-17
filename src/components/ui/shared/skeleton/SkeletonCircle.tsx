import { Skeleton } from "./Skeleton";

interface Props {
  size?: number;
}

export function SkeletonCircle({ size = 40 }: Props) {
  return (
    <Skeleton
      className="rounded-full"
      style={{
        width: size,
        height: size,
      }}
    />
  );
}
