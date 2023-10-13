/** @type {import('next').NextConfig} */
const nextConfig = {};
// const withFonts = require('next-fonts');
module.exports = {
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
