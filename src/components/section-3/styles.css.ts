import { sprinkles } from '@setgoh-ui/react'
import { style } from '@vanilla-extract/css'

export const Section2 = style([
  sprinkles({}),
  {
    height: '100%',
    gridArea: '4 / 1 / 6 / 4',

    '@media': {
      'screen and (max-width: 1024px)': {
        gridArea: '4 / 1 / 6 / 5',
      },
    },
  },
])

export const Parent = style([
  sprinkles({}),
  {
    height: '100%',

    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridTemplateRows: 'repeat(2, 1fr)',
    gridColumnGap: '16px',
    gridRowGap: '16px',

    '@media': {
      'screen and (max-width: 1024px)': {
        // gridArea: '4 / 1 / 6 / 5',
      },
    },
  },
])

export const Div1 = style([
  sprinkles({}),
  {
    height: '100%',

    gridArea: '1 / 1 / 2 / 2',
  },
])

export const Div2 = style([
  sprinkles({}),
  {
    height: '100%',

    gridArea: '2 / 1 / 3 / 2',
  },
])

export const Div3 = style([
  sprinkles({}),
  {
    height: '100%',

    gridArea: '2 / 2 / 3 / 3',
  },
])

export const Div4 = style([
  sprinkles({}),
  {
    height: '100%',

    gridArea: '1 / 2 / 2 / 3',
  },
])

export const Div5 = style([
  sprinkles({}),
  {
    height: '100%',

    gridArea: '1 / 3 / 2 / 4',
  },
])

export const Div6 = style([
  sprinkles({}),
  {
    height: '100%',

    gridArea: '2 / 3 / 3 / 4',
  },
])
