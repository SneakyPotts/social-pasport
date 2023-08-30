import type { Metadata } from 'next'
import type { ReactNode } from 'react'

import { Roboto } from 'next/font/google'

import ChakraContext from '@context/ChakraContext'

import { Footer } from '@components/Footer'
import { Header } from '@components/Header'

import '@styles/global.scss'

const roboto = Roboto({ weight: ['300', '400', '500', '700'], subsets: ['cyrillic', 'latin'] })

export const metadata: Metadata = {
  title: 'Соцільний паспорт',
  description: 'Соціальний паспорт учнів | КГ №45',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ChakraContext>
          <Header />
          {children}
          <Footer />
        </ChakraContext>
      </body>
    </html>
  )
}
