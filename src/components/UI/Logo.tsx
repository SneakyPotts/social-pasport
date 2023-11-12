import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

export default function Logo() {
  return (
    <Link
      href={'/'}
      className='logo'
    >
      <Image
        src={'/logo.png'}
        fill
        sizes={'10vw'}
        alt={'Соціальний паспорт учнів | КГ №45'}
      />
    </Link>
  )
}
