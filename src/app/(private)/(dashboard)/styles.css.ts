import { sprinkles } from '@setgoh-ui/react'
import { style } from '@vanilla-extract/css'

export const Container = style([
  sprinkles({
    // gap: 20,
    // marginLeft: 10,
  }),
  {
    height: 'calc(100vh - 4rem)',

    margin: '2rem',

    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gridTemplateRows: 'repeat(7, 1fr)',
    gridColumnGap: '2rem',
    gridRowGap: '2rem',

    '@media': {
      'screen and (max-width: 1024px)': {
        height: '100%',

        margin: '1rem',

        gridTemplateRows: 'repeat(9, 1fr)',
        gridColumnGap: '1rem',
        gridRowGap: '1rem',
      },
    },
  },
])
