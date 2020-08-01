import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Uniqid from 'uniqid';

import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function RegisterCategory() {

  const URL = window.location.hostname.includes('localhost')
    ? 'http://localhost:8080/categorias'
    : 'https://garoupicks.herokuapp.com/categorias';

  const initialValues = {
    titulo: '',
    descricao: '',
    cor: '#1b27d0',
  };
  // gera as categorias e o setter
  const [categories, setCategories] = useState([]);
  // gera os valores e o setter
  const [values, setValues] = useState(initialValues);

  function handleValues(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  function handleChange(event) {
    // const { getAttribute, value } = event.target;
    handleValues(
      event.target.getAttribute('name'),
      event.target.value,
    );
  }

  function submitCategory(event) {
    event.preventDefault();
    window.fetch(URL, {
      method: 'POST',
      body: window.JSON.stringify({ ...values }),
      headers: {
        'content-type': 'application/json',
      },
    }).then(() => {
      setCategories([
        ...categories,
        values,
      ]);
      setValues(initialValues);
    });
  }

  useEffect(() => {
    window.fetch(URL)
      .then(async (serverResponse) => {
        const result = await serverResponse.json();
        setCategories([
          ...result,
        ]);
      });
  },
  []);

  return (
    <PageDefault>
      <h1>
        { `Cadastro de Categoria: ${values.titulo}`}
      </h1>

      <form onSubmit={submitCategory}>
        <FormField
          label="Nome da categoria"
          type="text"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
          as="input"
        />
        <FormField
          label="Descrição da categoria"
          type="text"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
          as="textarea"
        />
        <FormField
          label="Cor da categoria"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
          as="input"
        />
        <Button>
          Cadastrar
        </Button>
      </form>

      {categories.length === 0 && (
        <h3>
          Carregando...
        </h3>
      )}

      <table>
        <tbody>
          {
            categories.map((item) => (
              <tr key={Uniqid()}>
                <td style={{ borderBottomColor: item.cor }}>
                  {item.titulo}
                </td>
                <td style={{ borderBottomColor: item.cor }}>
                  {item.descricao}
                </td>
                <td style={{ borderBottomColor: item.cor }}>
                  <span style={{ backgroundColor: item.cor }}>{item.cor}</span>
                </td>
              </tr>
            ))
          }
        </tbody>
        <thead>
          <tr>
            <th>Título</th>
            <th>Descrição</th>
            <th>Cor</th>
          </tr>
        </thead>
      </table>
      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default RegisterCategory;
