"use client";

import { Input } from "@/components/ui/shared/Input/Input";
import Section from "./Section";
import SectionHeader from "./SectionHeader";

import { Button } from "@/components/ui/shared/Button";

export default function NewsletterSection() {
  return (
    <Section className="bg-gray-50">
      <SectionHeader
        title="Stay Updated"
        description="Receive updates about new arrivals, promotions, and exclusive offers."
      />

      <form className="mx-auto flex max-w-xl gap-4">
        <Input type="email" placeholder="Email address" />

        <Button>Subscribe</Button>
      </form>
    </Section>
  );
}
