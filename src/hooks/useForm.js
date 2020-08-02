import { useState } from 'react';

function useForm(initialValues) {

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

  function clearForm() {
    setValues(initialValues);
  }

  return {
    values,
    clearForm,
    handleChange,
  };
}

export default useForm;
