import React from 'react';
import LogoPng from '../../assets/img/Logo.png';

import { WrapperImage, Image } from './styles.js';


function Logo ({ title }) {
  return (
    <WrapperImage to="/" title="Work In Progress">
      <Image
        className="Logo"
        src={LogoPng}
        alt={title}
        title={title}
      />W.I.P
    </WrapperImage>
  )
}

export default Logo
