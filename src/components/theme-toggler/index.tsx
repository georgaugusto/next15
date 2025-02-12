'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { IconMoonFilled } from '@tabler/icons-react'
import { IconSunFilled } from '@tabler/icons-react'
import { vars } from '@setgoh-ui/react'

export function ThemeToggler() {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

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
      {resolvedTheme === 'dark' ? (
        <IconMoonFilled
          size="32"
          cursor={'pointer'}
          color={vars.colors.contentPrimary}
          onClick={() => handleThemeChange('light')}
        />
      ) : (
        <IconSunFilled
          size="32"
          cursor={'pointer'}
          color={vars.colors.contentPrimary}
          onClick={() => handleThemeChange('dark')}
        />
      )}
    </div>
  )
}
