import { sprinkles } from '@setgoh-ui/react'
import { style } from '@vanilla-extract/css'

export const Box = style([
  sprinkles({}),
  {
    width: '100%',
    // height: '100%',
    gridArea: '1 / 1 / 2 / 5',

    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    '@media': {
      'screen and (max-width: 1024px)': {
        // gridArea: '1 / 1 / 1 / 5',
      },
    },
  },
])

export const Name = style([
  sprinkles({
    fontFamily: 'default',
    fontWeight: 'bold',
    fontSize: '4xl',

    color: 'contentAccent',
  }),
  {
    display: 'flex',

    textAlign: 'center',
  },
])

export const LeftBoxDiv = style([
  sprinkles({
    gap: 8,
  }),
  {
    display: 'flex',
    alignItems: 'center',
  },
])

export const CenterBoxDiv = style([
  sprinkles({}),
  {
    display: 'flex',
  },
])

export const RightBoxDiv = style([
  sprinkles({
    gap: 8,
  }),
  {
    display: 'flex',
  },
])
