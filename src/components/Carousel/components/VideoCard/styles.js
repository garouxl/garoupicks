import styled from 'styled-components';

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
