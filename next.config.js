const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  env: {
    AMIIBO_API_BASE_URL: process.env.AMIIBO_API_BASE_URL,
  },
  images: {
    domains: ['raw.githubusercontent.com'],
  },
}

module.exports = nextConfig
