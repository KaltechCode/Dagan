import DOMPurify from "isomorphic-dompurify";

interface DescriptionTabProps {
  html: string;
  title?: string;
}

function TabsBox({ html, title }: DescriptionTabProps) {
  return (
    <div className="">
      <h3 className="small-title mb-2">{title}</h3>
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(html),
        }}
      />
    </div>
  );
}

export default TabsBox;
