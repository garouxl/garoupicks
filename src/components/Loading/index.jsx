import React from 'react';
import styled from 'styled-components';

import Logo from '../../assets/img/loading.svg';

const Wrapper = styled.div`
  width: 200px;
  margin: 0 auto;
`;

function Loading() {
  return (
    <Wrapper>
      <img alt="loading" src={Logo} />
    </Wrapper>
  );
}

export default Loading;
