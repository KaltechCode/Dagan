"use client";

import Navbar from "./Navbar";

import { useViewport } from "@/providers/ViewportProvider";
import DesktopHeader from "./Desktop.Header";
import MobileHeader from "./Mobile.Header";

export default function Header() {
  const { isDesktop } = useViewport();

  return isDesktop ? <DesktopHeader /> : <MobileHeader />;
}
