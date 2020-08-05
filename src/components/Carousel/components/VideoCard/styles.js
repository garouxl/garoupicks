import styled from 'styled-components';

export const VideoCardWrapper = styled.div`
  position: relative;
  .back {
    transform: rotateY(180deg);
  }

  &:hover .back {
    transform: rotateY(0deg);
  }
  &:hover .front {
    transform: rotateY(180deg);
}
`;

export const VideoCardContainer = styled.a`
  position: absolute;
  top: 0;
  left: 0;
  border: 2px solid;
  border-radius: 4px;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 298px;
  height: 197px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 16px;
  outline: 0;
  transition: .5s cubic-bezier(0.65,0.12,0.1,0.97);

  &:not(:first-child) {
    margin-left: 20px;
  }
`;

export const VideoCardContainerPreview = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  border: 2px solid;
  border-radius: 4px;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 298px;
  height: 197px;
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  display: flex;
  align-items: flex-end;
  padding: 16px;
  outline: 0;
  transition: .5s cubic-bezier(0.65,0.12,0.1,0.97);

`;

export const ResponsiveIframe = styled.iframe`
  position: absolute;
  z-index: 9;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
`;
