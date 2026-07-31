interface DescriptionTabProps {
  html: string;
  title?: string;
}

function TabsBox({ html, title }: DescriptionTabProps) {
  return (
    <div className="">
      <h3 className="small-title mb-2">{title}</h3>
      <div
        className="prose max-w-none list-decimal h-70 xl:h-85 py-3 overflow-y-scroll"
        dangerouslySetInnerHTML={{
          __html: html,
        }}
      />
    </div>
  );
}

export default TabsBox;
