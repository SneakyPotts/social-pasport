import type { Metadata } from 'next'
import type {PropsWithChildren} from "react";
import ChakraContext from "@/context/ChakraContext";
import {Header} from "@components/Header";


export const metadata: Metadata = {
  title: 'Соцільний паспорт',
  description: 'Соціальний паспорт учнів | КГ №45',
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="uk">
      <body>
        <ChakraContext>
          <Header/>
          {children}
        </ChakraContext>
      </body>
    </html>
  )
}
