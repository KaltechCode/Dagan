import DOMPurify from "isomorphic-dompurify";

interface DescriptionTabProps {
  html: string;
}

export default function DescriptionTab({ html }: DescriptionTabProps) {
  return (
    <div
      className="prose max-w-none"
      dangerouslySetInnerHTML={{
        __html: DOMPurify.sanitize(html),
      }}
    />
  );
}
