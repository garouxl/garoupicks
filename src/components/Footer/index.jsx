import React from 'react';
import { FooterBase } from './styles';
// import Logo from '../Logo'
import Logo from '../../assets/img/alura-logo.svg';

function Footer() {
  return (
    <FooterBase>
      <FooterBase.Wrapper>
        <a href="https://www.alura.com.br/">
          <img src={Logo} alt="Logo Alura" />
        </a>
        <p>
          Criado durante a
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
