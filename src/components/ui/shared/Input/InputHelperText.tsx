interface Props {
  text?: string;
}

export default function InputHelperText({ text }: Props) {
  if (!text) return null;

  return <p className="mt-1 text-sm text-gray-500">{text}</p>;
}
