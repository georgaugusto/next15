import { sprinkles } from '@setgoh-ui/react'
import { style } from '@vanilla-extract/css'

export const Box = style([
  sprinkles({
    gap: 2,
  }),
  {
    minWidth: '220px',

    display: 'flex',
  },
])

export const Value = style([
  sprinkles({}),
  {
    display: 'flex',
    flexDirection: 'column',
  },
])
