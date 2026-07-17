"use client";

import { useCallback, useState } from "react";

export function useCartDrawer() {
  const [open, setOpen] = useState(false);

  const openDrawer = useCallback(() => {
    setOpen(true);
  }, []);

  const closeDrawer = useCallback(() => {
    setOpen(false);
  }, []);

  const toggleDrawer = useCallback(() => {
    setOpen((value) => !value);
  }, []);

  return {
    open,
    openDrawer,
    closeDrawer,
    toggleDrawer,
    setOpen,
  };
}
