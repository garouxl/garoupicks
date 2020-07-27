import React from 'react';
import Logo from '../Logo'

import './Menu.css'
import Button from '../Button/'
//import ButtonLink from './components/ButtonLink';

function Menu () {
  return (
    <nav className="Menu">
      <Logo />
      <Button as="a" className="ButtonLink" href="/">
        Novo Vídeo
      </Button>
    </nav>
  );
}

export default Menu;
