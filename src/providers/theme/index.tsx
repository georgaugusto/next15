'use client'

import { ReactNode } from 'react'

import { ThemeProvider as NextThemeProvider } from 'next-themes'
import { Theme } from '@/theme'

import * as styles from './styles.css'

import '@/theme/global.css'

export const ThemeProvider = ({
  children,
  theme,
  defaultTheme,
}: {
  children: ReactNode
  defaultTheme?: Theme
  theme?: Theme
}) => {
  return (
    <>
      <NextThemeProvider
        attribute="class"
        defaultTheme={defaultTheme}
        forcedTheme={theme}
      >
        {/* {children} */}
        <div className={styles.providerRoot}>{children}</div>
      </NextThemeProvider>
    </>
  )
}

export default ThemeProvider
