/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  experimental: {
    serverComponentsExternalPackages: ['@sparticuz/chromium', 'playwright-core']
  }
};
export default nextConfig;
