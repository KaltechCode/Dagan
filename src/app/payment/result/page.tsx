import PaymentResult from "@/components/checkout/PaymentResult";

interface Props {
  searchParams: {
    orderId?: string;
    key?: string;
  };
}

export default function Page({ searchParams }: Props) {
  return (
    <PaymentResult
      orderId={Number(searchParams.orderId) || 0}
      orderKey={searchParams.key ?? ""}
    />
  );
}
