import type { NextConfig } from 'next'
import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin'

const withVanillaExtract = createVanillaExtractPlugin()

const nextConfig: NextConfig = {
  env: {
    APPLICATION_KEY: process.env.APPLICATION_KEY,
    API_KEY: process.env.API_KEY,
  },
}

export default withVanillaExtract(nextConfig)
