import clsx from "clsx";

import type { StatusDefinition } from "@/types/order";

interface StatusBadgeProps {
  status: StatusDefinition;
}

export default function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold",
        status.className,
      )}
    >
      {status.label}
    </span>
  );
}
