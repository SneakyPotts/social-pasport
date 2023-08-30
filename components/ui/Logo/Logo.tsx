import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

import s from './Logo.module.scss'
import type { LogoProps } from './Logo.props'

export function Logo({}: LogoProps) {
  return (
    <Link
      href={'/'}
      className={s.logo}
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
