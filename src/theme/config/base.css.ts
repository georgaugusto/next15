import { createGlobalThemeContract } from '@vanilla-extract/css'

import { MapLeafNodes } from '@/utils/vanilla-extract'

export const palettes = {
  background: {
    main: null,
    secondary: null,
    tertiary: null,
  },
  text: {
    main: null,
    secondary: null,
  },
}

export type Palettes = MapLeafNodes<typeof palettes, string>

export const vars = createGlobalThemeContract(
  {
    palettes: {
      ...palettes,
    },
  },
  (value, path) => value ?? path.join('-'),
)
