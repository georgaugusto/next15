import { style } from '@vanilla-extract/css'

import { vars } from '@/theme/css'

export const providerRoot = style({
  color: vars.palettes.text.main,
  backgroundColor: vars.palettes.background.secondary,
})

// export const providerRoot = style({
//   color: #FFFFFF,
//   backgroundColor: #aaaaaa,
// })
