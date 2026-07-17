"use client";

import { BREAKPOINTS } from "@/constants/breakpoints";
import { ViewportState } from "@/types/viewport";
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  ReactNode,
} from "react";

const ViewportContext = createContext<ViewportState | null>(null);

interface Props {
  children: ReactNode;
}

export function ViewportProvider({ children }: Props) {
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    function update() {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    update();

    window.addEventListener("resize", update);

    return () => window.removeEventListener("resize", update);
  }, []);

  const value = useMemo(() => {
    const { width, height } = size;

    return {
      width,
      height,

      isXs: width >= BREAKPOINTS.xs,
      isSm: width >= BREAKPOINTS.sm,
      isMd: width >= BREAKPOINTS.md,
      isLg: width >= BREAKPOINTS.lg,
      isXl: width >= BREAKPOINTS.xl,
      is2Xl: width >= BREAKPOINTS["2xl"],

      isMobile: width < BREAKPOINTS.md,

      isTablet: width >= BREAKPOINTS.md && width < BREAKPOINTS.lg,

      isDesktop: width >= BREAKPOINTS.lg,
    };
  }, [size]);

  return (
    <ViewportContext.Provider value={value}>
      {children}
    </ViewportContext.Provider>
  );
}

export function useViewport() {
  const context = useContext(ViewportContext);

  if (!context) {
    throw new Error("useViewport must be used inside ViewportProvider.");
  }

  return context;
}
