import withNetlify from '@netlify/next';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["your-image-domain.com"], // Optional: if you're loading remote images
  },
};

export default withNetlify(nextConfig);
