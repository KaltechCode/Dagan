import DOMPurify from "isomorphic-dompurify";
interface ProductShortDescriptionProps {
  html: string;
}

function ProductFit({ html }: ProductShortDescriptionProps) {
  return (
    <div className="">
      <h4 className="small-title mb-2">Fit For</h4>
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(html),
        }}
      />
    </div>
  );
}

export default ProductFit;
