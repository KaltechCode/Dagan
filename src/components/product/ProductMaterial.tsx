import DOMPurify from "isomorphic-dompurify";
interface ProductShortDescriptionProps {
  html: string;
  title?: string;
}

function ProductInfoDetails({ html, title }: ProductShortDescriptionProps) {
  return (
    <div className="">
      <h4 className="small-title mb-2">{title}</h4>
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(html),
        }}
      />
    </div>
  );
}

export default ProductInfoDetails;
