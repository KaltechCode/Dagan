import { DashboardSummary } from "@/types/customer";
import DashboardCard from "./DashbordCard";

interface CustomerStatsProps {
  summary: DashboardSummary;
}

export default function CustomerStats({ summary }: CustomerStatsProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
      <DashboardCard title="Orders" value={summary.orders} />

      <DashboardCard title="Completed" value={summary.completedOrders} />

      <DashboardCard title="Processing" value={summary.processingOrders} />

      <DashboardCard title="Wishlist" value={summary.wishlistItems} />

      <DashboardCard title="Reviews" value={summary.reviews} />
    </div>
  );
}
