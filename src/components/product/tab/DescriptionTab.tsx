interface DescriptionTabProps {
  html: string;
}

export default function DescriptionTab({ html }: DescriptionTabProps) {
  return (
    <div
      className="prose max-w-none"
      dangerouslySetInnerHTML={{
        __html: html,
      }}
    />
  );
}
