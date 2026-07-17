"use client";

import { useState } from "react";

export type ProductTabKey =
  | "description"
  | "specifications"
  | "additional-information"
  | "shipping";

export function useProductTabs() {
  const [activeTab, setActiveTab] = useState<ProductTabKey>("description");

  return {
    activeTab,
    setActiveTab,
  };
}
