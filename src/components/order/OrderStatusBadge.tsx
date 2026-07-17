import type { OrderStatus } from "@/types/order";
import StatusBadge from "./StatusBadge";
import { ORDER_STATUS } from "@/constants/order";

interface Props {
  status: OrderStatus;
}

export default function OrderStatusBadge({ status }: Props) {
  return <StatusBadge status={ORDER_STATUS[status]} />;
}
