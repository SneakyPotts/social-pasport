import React from 'react'

import s from './Footer.module.scss'
import type { FooterProps } from './Footer.props'

export function Footer({}: FooterProps) {
  return (
    <footer className={s.footer}>
      <div className={'container'}>Footer</div>
    </footer>
  )
}
