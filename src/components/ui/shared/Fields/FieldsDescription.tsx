interface Props {
  description?: string;
}

export default function FieldDescription({ description }: Props) {
  if (!description) return null;

  return (
    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
      {description}
    </p>
  );
}
