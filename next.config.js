/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["ashley-api.herokuapp.com"],
  },
};

module.exports = nextConfig;

// module.exports = {
//   images: {
//     domains: ["ashley-api.herokuapp.com"],
//   },
// };
