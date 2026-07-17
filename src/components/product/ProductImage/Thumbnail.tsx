import ProductImage from "./ProductImage";

interface Props {
  src: string;

  alt: string;

  active?: boolean;

  onClick(): void;
}

export default function ProductThumbnail({ src, alt, active, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className={`overflow-hidden rounded-lg border ${
        active ? "border-[var(--primary)]" : "border-[var(--border)]"
      }`}
    >
      <ProductImage src={src} alt={alt} width={90} height={90} />
    </button>
  );
}
