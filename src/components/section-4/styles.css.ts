import { sprinkles } from '@setgoh-ui/react'
import { style } from '@vanilla-extract/css'

export const Section2 = style([
  sprinkles({
    gap: 8,
  }),
  {
    gridArea: '6 / 1 / 8 / 4',

    display: 'flex',

    '@media': {
      'screen and (max-width: 1024px)': {
        gridArea: '6 / 1 / 8 / 5',
      },
    },
  },
])

export const Box = style([
  sprinkles({
    // gap: 20,
    // marginLeft: 10,
  }),
  {
    width: '100%',
    height: '100%',
  },
])
