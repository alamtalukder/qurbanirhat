/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Allows all domains over HTTPS
      },
      {
        protocol: 'http',
        hostname: '**', // Optional: Allows all domains over HTTP
      },
    ],
  },
};

export default nextConfig; // Use 'export default nextConfig;' if using .mjs
