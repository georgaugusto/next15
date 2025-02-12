import Providers from '@/providers'
import { Roboto } from 'next/font/google'
import '@setgoh-ui/react/dist/index.css'
import '@/styles/globalStyle.css'
import '@/styles/styles.css'

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
})

export const metadata = {
  title: 'title',
  description: 'description',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={roboto.variable} suppressHydrationWarning>
      <head></head>
      <body>
        <Providers>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  )
}
