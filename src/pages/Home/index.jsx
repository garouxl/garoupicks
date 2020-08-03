import React, { useEffect, useState } from 'react';
import uniqid from 'uniqid';

import PageDefault from '../../components/PageDefault';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Loading from '../../components/Loading';

import categoriesRepository from '../../repositories/categories';
import olar from '../../utils';

function Home() {

  olar('home');

  const [initialData, setInitialData] = useState([]);

  useEffect(() => {
    categoriesRepository.getAllWithVideos()
      .then((categoriesWithVideos) => {
        window.setTimeout(() => {
          setInitialData(categoriesWithVideos);
        }, 1000);
      })
      .catch((error) => {
        window.console.warn('Tratar o erro e mostrar', error);
      });
  }, []);

  return (
    <PageDefault paddingAll="0">
      {initialData.length === 0 && (<Loading />)}

      {
        initialData.map((category, index) => {
          const isFirst = index === 0;
          if (index === 0) {
            return (
              <div key={uniqid()}>
                <BannerMain
                  videoTitle={initialData[0].videos[0].titulo}
                  url={initialData[0].videos[0].url}
                  videoDescription={initialData[0].videos[0].descricao}
                />
                <Carousel
                  ignoreFirstVideo={isFirst}
                  category={category}
                />
              </div>
            );
          }
          return (
            <Carousel
              key={uniqid()}
              ignoreFirstVideo={isFirst}
              category={category}
            />
          );
        })
      }
    </PageDefault>
  );
}

export default Home;
