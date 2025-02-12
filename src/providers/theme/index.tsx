'use client'

// import { darkTheme, lightTheme } from '@/styles/globalTheme.css'
// import { darkTheme, lightTheme } from '@/styles_copy/globalTheme.css'
import { lightThemeClass, darkThemeClass } from '@setgoh-ui/react'
import { ThemeProvider as NextThemeProvider } from 'next-themes'

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <NextThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      value={{
        light: lightThemeClass,
        dark: darkThemeClass,
      }}
    >
      {children}
    </NextThemeProvider>
  )
}

export default ThemeProvider
