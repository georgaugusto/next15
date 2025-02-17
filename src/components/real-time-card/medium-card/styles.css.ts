import { sprinkles } from '@setgoh-ui/react'
import { style } from '@vanilla-extract/css'

export const Box = style([
  sprinkles({
    gap: 2,
  }),
  {
    width: '100%',
    height: '100%',

    display: 'flex',
    flexDirection: 'column',
  },
])

export const Title = style([
  sprinkles({ gap: 2 }),
  {
    position: 'absolute',

    display: 'flex',
    alignContent: 'center',
  },
])

export const Container = style([
  sprinkles({ gap: 8 }),
  {
    height: '100%',

    minHeight: '150px',

    display: 'flex',
    flexDirection: 'row',

    // alignItems: 'center',
    // justifyContent: 'center',

    justifyItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
])
