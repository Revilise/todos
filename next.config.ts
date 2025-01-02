import withPWAInit from "@ducanh2912/next-pwa";
import { NextConfig } from "next";

const withPWA = withPWAInit({
  dest: "public"
})

export default withPWA({
  experimental: {
    cssChunking: true,
  } satisfies NextConfig,
})
