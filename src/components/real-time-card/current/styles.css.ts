import { sprinkles } from '@setgoh-ui/react'
import { style } from '@vanilla-extract/css'

export const Value = style([
  sprinkles({}),
  {
    display: 'flex',
    flexDirection: 'column',

    // justifyItems: 'center',
    // justifyContent: 'center',
    // alignContent: 'center',
    // alignItems: 'center',
  },
])
