// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      // Estas redirecciones ayudan a manejar las redirecciones de TikTok
      {
        source: '/api/auth/tiktok/callback',
        destination: '/api/auth/tiktok/callback-page',
      },
    ];
  },
  async headers() {
    return [
      {
        // Aplicar estos encabezados a todas las rutas
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

export default nextConfig;