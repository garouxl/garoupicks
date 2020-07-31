import styled from 'styled-components';

const FieldGroup = styled.div`
  &:not(:last-child) {
    margin-bottom: 1rem;
  }

  input,
  textarea {
    font-size: 1.5rem;
    font-family: inherit;
    color: var(--black);
    padding: 1.4rem 1.5rem 1rem 1.5rem;
    border-radius: 3px;
    background-color: var(--grayMedium);
    border: none;
    border-bottom: 3px solid transparent;
    width: 90%;
    display: block;
    transition: all .3s;

    @media (max-width: 800px) {
      background-color: var(--grayMedium);
      width: 100%;
    }

    &:focus {
      box-shadow: 0 .0 .5rem var(--backEnd);
      border-bottom: 3px solid var(--primary);
      outline: 0;
    }

    &:focus:invalid {
      border-bottom: 3px solid var(--invalid);
      box-shadow: 0 .0 .5rem var(--invalid);
    }

    &:focus:valid {
      border-bottom: 3px solid var(--valid);
      box-shadow: 0 .0 .5rem var(--valid);
    }

    &::-webkit-input-placeholder {
      color: var(--blackLighter);
    }
  }

  label {
    font-size: 1rem;
    color: var(--blackLighter);
    line-height: 1.2rem;
    margin: 10px 0 0 2rem;
    display: block;
    transform: translate(-22px,-100px);
    transition: all .3s;
  }

  input:placeholder-shown + label,
  textarea:placeholder-shown + label {
    font-size: 1.5rem;
    opacity: 0;
    visibility: hidden;
    transform: translate(-8px, -53px);
    color: var(--blackLighter);
  }

  textarea {
    height:120px;
  }

  textarea:placeholder-shown + label {
    transform: translate(-8px, -103px);
  }

  textarea + label {
    transform: translate(-22px,-151px);
  }

  input[type='color'] {
    padding: 4px 20px 0 20px;
    width: 160px;
    height: 60px;


    @media (max-width: 800px) {
      background-color: var(--grayMedium);
      width: 100%;
    }
  }

  input[type='color'] + label {
    font-size: 1rem;
    font-weight: 400;
    transform: translate(-21px,-91px);
    color: var(--blackLighter);
  }

`;

export { FieldGroup };
