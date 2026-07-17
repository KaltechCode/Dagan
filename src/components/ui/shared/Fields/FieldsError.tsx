interface Props {
  error?: string;
}

export default function FieldError({ error }: Props) {
  if (!error) return null;

  return (
    <p role="alert" className="mt-1 text-sm text-red-600">
      {error}
    </p>
  );
}
