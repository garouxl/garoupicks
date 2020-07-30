import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1``;

export const Paragraph = styled.p``;


export const Image = styled.img`
  max-width: 50vw;
  border-radius: 15px;
  @media (max-width: 800px) {
    max-width: 80vw
  }
`;

export const Return = styled(Link)`
  margin-top: 10px;
  border-bottom: 1px solid var(--primary);
`;
