import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FieldGroup } from './styles';

const Input = styled.input``;

function FormField({
  label, type, name, value, onChange, as,
}) {
  const fieldId = `id_${name}`;

  return (
    <FieldGroup>
      <Input
        as={as}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={label}
        required="required"
      />
      <label
        htmlFor={fieldId}
      >
        {label}
      </label>
    </FieldGroup>
  );
}

FormField.defaultProps = {
  type: 'text',
  as: 'input',
  value: '',
  onChange: () => {},
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  as: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default FormField;
