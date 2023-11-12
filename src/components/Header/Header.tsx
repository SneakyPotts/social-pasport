import React from 'react';
import {HeaderProps} from "./Header.props";
import Logo from "@UI/Logo";

export function Header({...props}: HeaderProps) {
  return (
    <header className='header'>
      <div className='container'>
        <Logo/>
      </div>
    </header>
  );
}
