'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function ThemeToggler() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme)
  }

  return (
    <div>
      <p>The current theme is: {theme}</p>
      {resolvedTheme === 'dark' ? (
        <button onClick={() => handleThemeChange('light')}>Light Mode</button>
      ) : (
        <button onClick={() => handleThemeChange('dark')}>Dark Mode</button>
      )}
    </div>
  )
}
