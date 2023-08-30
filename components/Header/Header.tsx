import React from 'react'

import s from './Header.module.scss'
import type { HeaderProps } from './Header.props'

export function Header({}: HeaderProps) {
  return (
    <header className={s.header}>
      <div className={'container'}>Header</div>
    </header>
  )
}
