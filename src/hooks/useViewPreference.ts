"use client";

import { useEffect, useState } from "react";

export type ViewMode = "grid" | "list";

const STORAGE_KEY = "shop:view";

export function useViewPreference() {
  const [view, setView] = useState<ViewMode>("grid");

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as ViewMode | null;

    if (saved === "grid" || saved === "list") {
      setView(saved);
    }
  }, []);

  function changeView(mode: ViewMode) {
    setView(mode);

    localStorage.setItem(STORAGE_KEY, mode);
  }

  return {
    view,
    setView: changeView,
  };
}
