import { ReactNode } from "react";

import { Card } from "@/components/ui/shared/Card";

interface DashboardCardProps {
  title: string;
  value: number | string;
  icon?: ReactNode;
}

export default function DashboardCard({
  title,
  value,
  icon,
}: DashboardCardProps) {
  return (
    <Card className="flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-500">{title}</p>

        <h3 className="mt-1 text-2xl font-bold">{value}</h3>
      </div>

      {icon}
    </Card>
  );
}
