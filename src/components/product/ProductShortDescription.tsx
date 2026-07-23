interface ProductShortDescriptionProps {
  html: string;
}

export default function ProductShortDescription({
  html,
}: ProductShortDescriptionProps) {
  return (
    <div>
      <h3 className="small-title mb-3">Short Description</h3>

      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{
          __html: html,
        }}
      />
    </div>
  );
}
