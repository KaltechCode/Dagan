import { ProductAttribute } from "@/types/product";

interface SpecificationsTabProps {
  attributes: ProductAttribute[];
}

export default function SpecificationsTab({
  attributes,
}: SpecificationsTabProps) {
  return (
    <table className="w-full border-collapse">
      <tbody>
        {attributes.map((attribute) => (
          <tr key={attribute.id} className="border-b">
            <th className="w-1/3 py-4 text-left font-medium">
              {attribute.name}
            </th>

            <td className="py-4">{attribute.options.join(", ")}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
