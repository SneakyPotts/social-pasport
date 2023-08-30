import type { Metadata } from 'next'
import type { ReactNode } from 'react'

import { Roboto } from 'next/font/google'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import '@styles/global.scss'

const roboto = Roboto({ weight: ['300', '400', '500', '700'], subsets: ['cyrillic', 'latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
