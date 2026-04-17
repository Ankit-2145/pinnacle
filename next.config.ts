import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/src/pages/:path*.html",
        destination: "/:path*",
        permanent: true,
      },
      {
        source: "/src/pages/learning.html",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
