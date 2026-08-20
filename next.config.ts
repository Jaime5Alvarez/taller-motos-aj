import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // resend importa @react-email/render de forma dinámica y opcional (aquí solo se
  // envía texto plano); sin esto Turbopack falla al no poder resolverlo
  serverExternalPackages: ["resend"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.s3.*.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "*.s3.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "**.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;
