import type { NextConfig } from 'next'
// import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin'

// const withVanillaExtract = createVanillaExtractPlugin()

const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin')

const withVanillaExtract = createVanillaExtractPlugin({
  reactStrictMode: true,
  swcMinify: true,
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  pageExtensions: ['page.tsx', 'api.ts', 'api.tsx'],
})

const nextConfig: NextConfig = {
  // experimental: {
  //   turbo: {
  //     rules: {
  //       '*.svg': {
  //         loaders: ['@svgr/webpack'],
  //         as: '*.js',
  //       },
  //     },
  //   },
  // },
}

export default withVanillaExtract(nextConfig)
