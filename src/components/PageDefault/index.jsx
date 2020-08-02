import React from 'react';

import styled, { css } from 'styled-components';
import Menu from '../Menu';
import Footer from '../Footer';

const Main = styled.main`
  background-color: var(--black);
  color: var(--white);
  flex: 1;
  padding-top: 95px;
  padding-bottom:10px;
  padding-left: 5%;
  padding-right: 5%;
  min-height: 80vh;
  ${({ paddingAll }) => css`
    padding-left: ${paddingAll};
    padding-right: ${paddingAll};
  `};
`;

function PageDefault({ children, paddingAll }) {
  return (
    <div>
      <Menu />
      <Main paddingAll={paddingAll}>
        {children}
      </Main>
      <Footer />
    </div>
  );
}

export default PageDefault;
