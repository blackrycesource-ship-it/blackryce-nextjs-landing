import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.js");

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
};

export default withNextIntl(nextConfig);