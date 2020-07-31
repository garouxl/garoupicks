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
  z-index: 200;
  position: relative;
  animation: pulse 5s cubic-bezier(.785, .135, .15, .86) infinite;
  @media (max-width: 800px) {
    max-width: 80vw;
  }

  @keyframes pulse {
  50% {
    transform: scale(1.2) rotateZ(10deg);
    filter: blur(5px);
  }
}
`;

export const Return = styled(Link)`
  margin-top: 10px;
  border-bottom: 1px solid var(--primary);
`;
