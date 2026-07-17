import OrderDetailsPage from "@/components/order/OrderDetailsPage";

interface Props {
  params: {
    id: string;
  };
}

export default function Page({ params }: Props) {
  return <OrderDetailsPage orderId={Number(params.id)} />;
}
