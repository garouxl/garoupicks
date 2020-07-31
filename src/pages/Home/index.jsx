import React from 'react';

import PageDefault from '../../components/PageDefault';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';

import dadosIniciais from '../../data/dados_iniciais.json';

function Home() {
  return (
    <PageDefault>
      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription="Aliens, O Resgate arrecadou $ 180 milhões em todo o mundo. Foi indicado para sete prêmios da Academia , incluindo um de Melhor Atriz para Sigourney Weaver, ganhando ambos de Efeitos Sonoros e Efeitos Visuais. Ele ganhou oito Saturn Awards, incluindo Melhor Filme de Ficção Científica, Melhor Atriz para Weaver, e Melhor Direção e Melhor Escrita para Cameron."
      />
      {
        dadosIniciais.categorias.map((categoria) => (
          <Carousel
            key={categoria}
            ignoreFirstVideo
            category={categoria}
          />
        ))
      }
    </PageDefault>
  );
}

export default Home;
