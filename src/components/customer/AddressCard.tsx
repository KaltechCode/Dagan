import { Card } from "@/components/ui/shared/Card";
import { Button } from "@/components/ui/shared/Button";
import { CustomerAddress } from "@/types/customer";

interface AddressCardProps {
  title: string;
  address: CustomerAddress;
  onEdit?: () => void;
}

export default function AddressCard({
  title,
  address,
  onEdit,
}: AddressCardProps) {
  return (
    <Card>
      <div className="mb-4 flex items-center justify-between">
        <h3 className="font-semibold">{title}</h3>

        {onEdit && (
          <Button variant="outline" size="sm" onClick={onEdit}>
            Edit
          </Button>
        )}
      </div>

      <div className="space-y-1 text-sm">
        <p>
          {address.firstName} {address.lastName}
        </p>

        {address.company && <p>{address.company}</p>}

        <p>{address.address1}</p>

        {address.address2 && <p>{address.address2}</p>}

        <p>
          {address.city}, {address.state}
        </p>

        <p>{address.postcode}</p>

        <p>{address.country}</p>

        {address.phone && <p>{address.phone}</p>}
      </div>
    </Card>
  );
}
