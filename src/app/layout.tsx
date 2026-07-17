import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";

import ReduxProvider from "@/redux/provider";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/footer/Footer";
import { ViewportProvider } from "@/providers/ViewportProvider";
import AuthProvider from "@/providers/AuthProvider";

const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-instrument",
});

export const metadata: Metadata = {
  title: "WooCommerce Store",
  description: "Headless WooCommerce Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jost.variable} antialiased`}>
      <body>
        <ReduxProvider>
          <ViewportProvider>
            <AuthProvider>{children}</AuthProvider>
          </ViewportProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
