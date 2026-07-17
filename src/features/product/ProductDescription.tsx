interface Props {
  html: string;
}

export default function ProductDescription({ html }: Props) {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: html,
      }}
    />
  );
}
