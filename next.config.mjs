/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    reactCompiler: true,
    ppr: 'incremental'
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.cse.iitk.ac.in',
        
      },{
        protocol: 'https',
        hostname:"images.pexels.com"
      }
    ]
  },
};

export default nextConfig;
