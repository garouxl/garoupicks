import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import uniqid from 'uniqid';
import { FieldGroup } from './styles';

const Input = styled.input``;

function FormField({
  label, type, name, value, onChange, as, suggestions,
}) {
  const fieldId = `id_${name}`;
  const hasSuggestions = Boolean(suggestions.length);

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
        list={hasSuggestions ? `suggestionFor_${fieldId}` : undefined}
        autoComplete={hasSuggestions ? 'off' : undefined}
      />
      <label
        htmlFor={fieldId}
      >
        {label}
      </label>
      { hasSuggestions && (
        <datalist id={`suggestionFor_${fieldId}`}>
          {
            suggestions.map((suggestion) => (
              <option key={uniqid()} value={suggestion}>
                {suggestion}
              </option>
            ))
          }
        </datalist>
      )}

    </FieldGroup>
  );
}

FormField.defaultProps = {
  type: 'text',
  as: 'input',
  value: '',
  onChange: () => {},
  suggestions: [],
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  as: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  suggestions: PropTypes.arrayOf(PropTypes.string),
};

export default FormField;
