"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/shared/Button";

interface Props {
  onPrevious(): void;

  onNext(): void;
}

export default function GalleryNavigation({ onPrevious, onNext }: Props) {
  return (
    <>
      <Button
        size="icon"
        variant="secondary"
        className="absolute left-4 top-1/2 -translate-y-1/2"
        onClick={onPrevious}
      >
        <ChevronLeft />
      </Button>

      <Button
        size="icon"
        variant="secondary"
        className="absolute right-4 top-1/2 -translate-y-1/2"
        onClick={onNext}
      >
        <ChevronRight />
      </Button>
    </>
  );
}
