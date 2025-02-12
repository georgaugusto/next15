import { globalStyle } from '@vanilla-extract/css'

globalStyle('*', {
  boxSizing: 'border-box',
  padding: 0,
  margin: 0,
})

globalStyle('body', {
  '-webkit-font-smoothing': 'antialiased',
})
