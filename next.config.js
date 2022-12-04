/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    WINDOW_CUSTOM_VARIABLE: "__USER__",
  },
};

module.exports = nextConfig;
