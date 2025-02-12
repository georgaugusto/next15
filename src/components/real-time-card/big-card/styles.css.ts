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
    display: 'flex',
    alignContent: 'center',
  },
])

export const Container = style([
  sprinkles({ gap: 2 }),
  {
    height: '100%',

    display: 'flex',
    flexDirection: 'column',
  },
])
