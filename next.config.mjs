/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
    serverActions: {
      bodySizeLimit: '20mb', // Ubah sesuai kebutuhan, misalnya 5mb
    },
  },
};

export default nextConfig;
