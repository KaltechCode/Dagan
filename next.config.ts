import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "site16988-71cwo1.scloudsite101.com",
        port: "",
        pathname: "/wp-content/uploads/**", // Use '**' to match all paths on this host
      },
    ],
  },
};

export default nextConfig;
