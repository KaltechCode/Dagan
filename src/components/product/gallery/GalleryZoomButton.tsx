"use client";

import { ZoomIn } from "lucide-react";

import { Button } from "@/components/ui/shared/Button";

interface Props {
  onClick(): void;
}

export default function GalleryZoomButton({ onClick }: Props) {
  return (
    <Button
      size="icon"
      variant="secondary"
      className="absolute right-4 top-4"
      onClick={onClick}
    >
      <ZoomIn />
    </Button>
  );
}
