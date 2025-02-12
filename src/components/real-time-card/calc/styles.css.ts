import { sprinkles } from '@setgoh-ui/react'
import { style } from '@vanilla-extract/css'

export const Container = style([
  sprinkles({}),
  {
    display: 'flex',

    justifyContent: 'center',
    alignItems: 'baseline',
    // alignItems: 'baseline',
  },
])

export const Value = style([
  sprinkles({}),
  {
    display: 'flex',

    // justifyContent: 'center',
    alignItems: 'center',

    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
])

export const Icon = style([
  sprinkles({
    marginRight: 2,
  }),
  {
    // height: '100%',
    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
])

export const Unit = style([
  sprinkles({}),
  {
    marginBottom: '-10px',
    // justifyContent: 'center',
    // justifyItems: 'center',
    // alignContent: 'center',
    // alignItems: 'center',
    // textAlign: 'left',
  },
])
