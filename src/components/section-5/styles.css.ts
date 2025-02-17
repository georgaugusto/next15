import { sprinkles } from '@setgoh-ui/react'
import { style } from '@vanilla-extract/css'

export const Section2 = style([
  sprinkles({}),
  {
    gridArea: '2 / 4 / 8 / 5',

    '@media': {
      'screen and (max-width: 1024px)': {
        // gridArea: '8 / 1 / 10 / 5',
        gridArea: '5 / 1 / 6 / 3',
      },
    },
  },
])
