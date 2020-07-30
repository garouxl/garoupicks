import React from 'react';
import { FieldGroup } from './styles'

function FormField ({ label, type, name, value, onChange }) {
  return (
    <FieldGroup>
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={label}
          required="required"
        />
        <label>
          {label}
        </label>
    </FieldGroup>
  )
}

export default FormField;
