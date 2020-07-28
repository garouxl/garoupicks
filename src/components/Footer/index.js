import React from 'react';
import { FooterBase } from './styles';
import Logo from '../Logo'

function Footer() {
  return (
    <FooterBase>
      <FooterBase.wrapper>
        <Logo title="Garoupicks lower logo"/>
        <p>
          Criado durante a
          {' '}
          <a href="https://www.alura.com.br/">
            Imersão React da Alura
          </a>
        </p>
      </FooterBase.wrapper>
    </FooterBase>
  );
}

export default Footer;
