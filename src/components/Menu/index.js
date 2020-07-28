import React from 'react';
import { Link } from 'react-router-dom'
import Logo from '../Logo'

import './Menu.css'
import Button from '../Button/'
//import ButtonLink from './components/ButtonLink';

function Menu () {
  return (
    <nav className="Menu">
      <Logo title="Garoupicks upper logo"/>
      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo Vídeo
      </Button>
    </nav>
  );
}

export default Menu;
