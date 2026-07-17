interface ShippingReturnsTabProps {
  content?: string;
}

export default function ShippingReturnsTab({
  content,
}: ShippingReturnsTabProps) {
  return (
    <div className="prose max-w-none">
      {content || (
        <>
          <h3>Shipping</h3>

          <p>
            Shipping costs and delivery times are calculated during checkout
            based on your delivery address and selected shipping method.
          </p>

          <h3>Returns</h3>

          <p>
            Eligible products may be returned within the return period according
            to the store's return policy.
          </p>
        </>
      )}
    </div>
  );
}
