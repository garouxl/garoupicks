import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const WrapperImage = styled(Link)`
  border-bottom: 1px solid var(--primary);
  color: var(--primary);
  text-decoration: none;
`;

export const Image = styled.img`
  max-width: 168px;
  @media (max-width: 800px) {
    max-width: 105px
  }
`;
