import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import Button from '../../../components/Button';

import olar from '../../../utils';

function RegisterVideo() {
  olar('video');

  const history = useHistory();

  const { handleChange, values, clearForm } = useForm({
    titulo: 'Titulo de teste',
    url: 'https://www.youtube.com/watch?v=-nYNd6EuZHU&feature=youtu.be',
    categoria: 'Front End',
  });

  return (
    <PageDefault>
      <h1>
        {`Cadastro de video: ${values.titulo}`}
      </h1>

      <form onSubmit={(event) => {
        event.preventDefault();
        window.alert('Ainda não funciona, só amanhã :) ');
        history.push('/');
      }}
      >
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
        />

        <Button type="submit">
          Cadastrar
        </Button>

      </form>

      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>
    </PageDefault>
  );
}

export default RegisterVideo;
