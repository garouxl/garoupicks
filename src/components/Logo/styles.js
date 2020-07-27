import styled from 'styled-components';

export const Link = styled.a`
  border-bottom: 1px solid var(--primary);
`;

export const Image = styled.img`
  max-width: 168px;
  @media (max-width: 800px) {
    max-width: 105px
  }
`;
