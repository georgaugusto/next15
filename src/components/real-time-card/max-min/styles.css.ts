import { sprinkles } from '@setgoh-ui/react'
import { style } from '@vanilla-extract/css'

export const Another = style([
  sprinkles({}),
  {
    // display: 'flex',
    // flexDirection: 'row',
    // justifyItems: 'center',
    // alignContent: 'center',
    // alignItems: 'center',
  },
])

export const Max = style([
  sprinkles({
    color: 'contentNegative',
  }),
  {},
])

export const Min = style([
  sprinkles({
    color: 'contentAccent',
  }),
  {},
])
