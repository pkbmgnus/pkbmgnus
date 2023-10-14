/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  // output: 'out',
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'pkbmgnus.sch.id',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'pkbmgnus.sch.id',
        port: '',
        pathname: '/**',
      },
    ],
  },
};
 
module.exports = nextConfig
