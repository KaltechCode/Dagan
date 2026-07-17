interface EmptyTabProps {
  message: string;
}

export default function EmptyTab({ message }: EmptyTabProps) {
  return <div className="py-10 text-center text-gray-500">{message}</div>;
}
