import { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Replace with your allowed domain
        port: '',
        pathname: '/**', // Restrict to a specific path if needed
      },
    ],
  },
  experimental: {
    globalNotFound: true,
  },
}      


const withNextIntl = createNextIntlPlugin()
export default withNextIntl(nextConfig)