interface Props {
  label?: string;
  required?: boolean;
}

export default function FieldLabel({ label, required }: Props) {
  if (!label) return null;

  return (
    <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-100">
      {label}

      {required && <span className="ml-1 text-red-500">*</span>}
    </label>
  );
}
