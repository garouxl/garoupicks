import React from 'react';
import LogoPng from '../../assets/img/Logo.png'

import { WrapperImage, Image } from './styles.js'


function Logo ({ title }) {
  return (
    <WrapperImage to="/">
      <Image
        className="Logo"
        src={LogoPng}
        alt={title}
        title={title}
      />
    </WrapperImage>
  )
}

export default Logo
