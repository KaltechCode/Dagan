import OrdersPage from "@/components/order/OrderPage";

export const metadata = {
  title: "My Orders",
};

export default function Page() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">My Orders</h1>

      <OrdersPage />
    </div>
  );
}
