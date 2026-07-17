import DOMPurify from "isomorphic-dompurify";

interface ProductShortDescriptionProps {
  html: string;
}

export default function ProductShortDescription({
  html,
}: ProductShortDescriptionProps) {
  return (
    <div
      className="prose max-w-none"
      dangerouslySetInnerHTML={{
        __html: DOMPurify.sanitize(html),
      }}
    />
  );
}
