"use client";

import { Button } from "@/components/ui/shared/Button";

interface SubmitButtonProps {
  loading?: boolean;
  children: React.ReactNode;
}

export default function SubmitButton({ loading, children }: SubmitButtonProps) {
  return (
    <Button type="submit" loading={loading}>
      {children}
    </Button>
  );
}
