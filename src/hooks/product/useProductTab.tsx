"use client";

import { useState } from "react";

export type ProductTabKey =
  | "description"
  | "specifications"
  | "features"
  | "shipping"
  | "care_instructions"
  | "fit"
  | "product highlights"
  | "styling_suggestions"
  | "why"
  | "perfect_for";

export function useProductTabs() {
  const [activeTab, setActiveTab] = useState<ProductTabKey>("description");

  return {
    activeTab,
    setActiveTab,
  };
}
