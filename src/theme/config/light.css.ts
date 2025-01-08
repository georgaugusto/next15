import { createGlobalTheme } from '@vanilla-extract/css'

import { vars } from './base.css'

import type { Palettes } from './base.css'

export const light = {
  background: {
    main: '#FFFFFF',
    secondary: '#F5F5F5',
    tertiary: '#EEEEEE',
  },
  text: {
    main: '#333333',
    secondary: '#4F4F4F',
  },
} satisfies Palettes

createGlobalTheme(':root', vars.palettes, {
  ...light,
})
