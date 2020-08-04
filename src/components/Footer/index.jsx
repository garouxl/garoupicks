import React from 'react';
import { FooterBase } from './styles';
import Logo from '../Logo';

function Footer() {
  return (
    <FooterBase>
      <FooterBase.Wrapper>
        <Logo />
        <p>
          Criado inicialmente durante a
          {' '}
          <a href="https://www.alura.com.br/">
            Imersão React da Alura
          </a>
        </p>
      </FooterBase.Wrapper>
    </FooterBase>
  );
}

export default Footer;
