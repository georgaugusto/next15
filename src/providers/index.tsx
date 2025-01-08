import { ReactNode } from 'react'
import { ThemeProvider } from 'next-themes'

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <ThemeProvider>{children}</ThemeProvider>
    </>
  )
}

export default Providers
