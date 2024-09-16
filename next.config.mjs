// next.config.mjs
const nextConfig = {
  images: {
    domains: ['img.clerk.com', 'images.unsplash.com'], // Add any other domains you need
  },
  experimental: {
    appDir: true, // If you're using the app directory feature
  },
  metadataBase: new URL('http://localhost:3000'), // Set your base URL
};

export default nextConfig;
