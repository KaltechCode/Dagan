"use client";

import { Card } from "@/components/ui/shared/Card";

import type { OrderNote } from "@/types/order";

interface OrderTimelineProps {
  notes: OrderNote[];
}

export default function OrderTimeline({ notes }: OrderTimelineProps) {
  return (
    <Card>
      <h2 className="mb-6 text-xl font-semibold">Order Timeline</h2>

      <div className="space-y-6">
        {notes.map((note) => (
          <div key={note.id} className="relative pl-6">
            <div className="absolute left-0 top-2 h-3 w-3 rounded-full bg-primary" />

            <p className="font-medium">{note.note}</p>

            <p className="mt-1 text-sm text-gray-500">{note.createdAt}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}
