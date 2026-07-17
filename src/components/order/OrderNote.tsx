"use client";

import { Card } from "@/components/ui/shared/Card";

interface OrderNotesProps {
  note?: string;
}

export default function OrderNotes({ note }: OrderNotesProps) {
  if (!note) {
    return null;
  }

  return (
    <Card>
      <h2 className="mb-4 text-xl font-semibold">Customer Note</h2>

      <p className="leading-7">{note}</p>
    </Card>
  );
}
