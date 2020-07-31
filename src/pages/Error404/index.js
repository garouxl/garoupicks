
import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../components/PageDefault';
import { Section, Image, Return } from './styles'

import Easter from '../../assets/img/ozzyLemmyEaster.jpg'

function Erro404() {
  return (
    <PageDefault>
      <Section>
        <h1>Error 404</h1>
        <a href="https://garouxl.github.io/" tagert="_blank">
          <Image src={Easter} alt=""/>
        </a>
        <Return as={Link} to="/">
          Ir para home
        </Return>
      </Section>
    </PageDefault>
  )
}

export default Erro404;
