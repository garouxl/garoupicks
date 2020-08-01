import React from 'react';

import styled from 'styled-components';
import Menu from '../Menu';
import Footer from '../Footer';

const Main = styled.main`
  background-color: var(--black);
  color: var(--white);
  flex: 1;
  padding: 95px 5% 10px;
  min-height: 80vh;
`;

function PageDefault({ children }) {
  return (
    <div>
      <Menu />
      <Main>
        {children}
      </Main>
      <Footer />
    </div>
  );
}

export default PageDefault;
