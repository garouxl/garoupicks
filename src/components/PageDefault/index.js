import React, { Fragment} from 'react';

import Menu from '../Menu'
import Footer from '../Footer'
import styled from 'styled-components'

const Main = styled.main`
  background-color: var(--black);
  color: var(--white);
  flex: 1;
  padding: 95px 5% 10px;
`;

function PageDefault({ children }) {
  return (
    <Fragment>
      <Menu />
      <Main>
        {children}
      </Main>
      <Footer />
    </Fragment>

  );
}

export default PageDefault;
