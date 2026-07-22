import DOMPurify from "isomorphic-dompurify";
interface ProductShortDescriptionProps {
  html: string;
}

function ProductMaterial({ html }: ProductShortDescriptionProps) {
  return (
    <div className="">
      <h4 className="small-title mb-2">Material</h4>
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(html),
        }}
      />
    </div>
  );
}

export default ProductMaterial;
