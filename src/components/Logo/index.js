import React from 'react';
import LogoPng from '../../assets/img/Logo.png'

import { Link, Image } from './styles.js'


function Logo () {
  return (
    <Link href="/">
      <Image
        className="Logo"
        src={LogoPng}
        alt="Garoupicks Logo"
        title="Garoupicks logo"
      />
    </Link>
  )
}

export default Logo
