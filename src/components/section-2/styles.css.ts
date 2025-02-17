import { sprinkles } from '@setgoh-ui/react'
import { style } from '@vanilla-extract/css'

export const Section2 = style([
  sprinkles({
    gap: 8,
  }),
  {
    gridArea: '2 / 1 / 4 / 4',

    display: 'flex',

    '@media': {
      'screen and (max-width: 1024px)': {
        // height: '150px',
        // gridArea: '2 / 1 / 4 / 5',
      },

      'screen and (max-width: 768px)': {
        // height: '150px',

        flexDirection: 'column',

        // gridArea: '2 / 1 / 4 / 5',
      },
    },
  },
])
