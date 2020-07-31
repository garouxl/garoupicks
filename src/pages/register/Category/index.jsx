import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function RegisterCategory() {
  const initialValues = {
    nome: '',
    descricao: '',
    cor: '#000000',
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
    setCategories([
      ...categories,
      values,
    ]);
    setValues(initialValues);
  }

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.nome}
      </h1>

      <form onSubmit={submitCategory}>
        <FormField
          label="Nome da categoria"
          type="text"
          name="nome"
          value={values.nome}
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
      <ul>
        {
          categories.map((item) => (
            <li key={item}>
              {item.nome}
            </li>
          ))
        }
      </ul>
      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default RegisterCategory;
