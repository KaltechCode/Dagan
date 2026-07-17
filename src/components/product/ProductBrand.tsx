import Link from "next/link";

interface Props {
  brand?: Brand;
}

export default function ProductBrand({ brand }: Props) {
  if (!brand) {
    return null;
  }

  return (
    <div>
      <span className="font-medium">Brand:</span>{" "}
      <Link
        href={`/brands/${brand.slug}`}
        className="text-primary hover:underline"
      >
        {brand.name}
      </Link>
    </div>
  );
}
