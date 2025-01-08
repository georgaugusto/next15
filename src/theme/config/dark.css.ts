import { createGlobalTheme } from '@vanilla-extract/css'

import { vars } from './base.css'

import type { Palettes } from './base.css'

export const dark = {
  background: {
    main: '#333333',
    secondary: '#4F4F4F',
    tertiary: '#606060',
  },
  text: {
    main: '#FFFFFF',
    secondary: '#F5F5F5',
  },
} satisfies Palettes

createGlobalTheme(':root.dark', vars.palettes, {
  ...dark,
})
