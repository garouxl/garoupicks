import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import Button from '../../../components/Button';

import videosRepository from '../../../repositories/videos';
import categoryRepository from '../../../repositories/categories';

import olar from '../../../utils';

function RegisterVideo() {
  olar('video');

  const history = useHistory();
  const [categories, setCategories] = useState([]);
  const categoryTitles = categories.map(({ titulo }) => titulo);
  const { handleChange, values, clearForm } = useForm({
    titulo: '',
    url: '',
    categoria: '',
  });

  useEffect(() => {
    categoryRepository
      .getAll()
      .then((allCategories) => {
        setCategories(allCategories);
      }).catch((error) => {
        window.console.log('tratar o erro', error);
      });
  }, []);

  function submitVideo(event) {
    event.preventDefault();

    const chosenCategory = categories.find((item) => {
      return item.titulo.toLowerCase() === values.categoria.toLowerCase();
    });

    videosRepository
      .setNewVideo({
        titulo: values.titulo,
        url: values.url,
        categoriaId: chosenCategory.id,
      })
      .then(() => {
        clearForm();
        history.push('/');
      })
      .catch((error) => {
        window.console.warn('Tratar o erro e mostrar', error);
      });
  }

  return (
    <PageDefault>
      <h1>
        {`Cadastro de video: ${values.titulo}`}
      </h1>

      <form onSubmit={submitVideo}>
        <FormField
          label="Titulo do video"
          type="text"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
          as="input"
        />
        <FormField
          label="URL do video"
          type="text"
          name="url"
          value={values.url}
          onChange={handleChange}
          as="input"
        />

        <FormField
          label="Categoria do video"
          type="text"
          name="categoria"
          value={values.categoria}
          onChange={handleChange}
          as="input"
          suggestions={categoryTitles}
        />

        <Button type="submit">
          Cadastrar video
        </Button>

      </form>

      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>
    </PageDefault>
  );
}

export default RegisterVideo;
