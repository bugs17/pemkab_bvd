/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
    serverActions: {
      bodySizeLimit: '20mb', // Ubah sesuai kebutuhan, misalnya 5mb
    },
  },
  // ini di uncomment jika render di lakukan dua kali dalam mode dev
  // reactStrictMode: false,
  
};

export default nextConfig;
