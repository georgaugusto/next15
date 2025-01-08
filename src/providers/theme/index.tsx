'use client'

import { darkTheme, lightTheme } from '@/styles/globalTheme.css'
import { ThemeProvider as NextThemeProvider } from 'next-themes'

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <NextThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      value={{
        light: lightTheme,
        dark: darkTheme,
      }}
    >
      {children}
    </NextThemeProvider>
  )
}

export default ThemeProvider
