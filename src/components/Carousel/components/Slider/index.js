/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import SlickSlider from 'react-slick';
import styled from 'styled-components';

const Container = styled.ul`
  padding: 0;
  margin: 0;
  transition: .5s cubic-bezier(0.65, 0.12, 0.1, 0.97);
  @media (min-width: 800px) {
    &:hover li:not(:hover) {
    transform: scale(.90) translateY(10px);
    opacity: .5;
  }
    li {
      transition: .5s cubic-bezier(0.65, 0.12, 0.1, 0.97);
    }

    li:hover {
      opacity: 1;
      filter: hue-rotate(35deg);
    }
  }
  .slick-prev,
  .slick-next {
    z-index: 50;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 30px;
    height: 30px;
    transform: initial;
    &:before {
      font-size: 30px;
    }
  }

  .slick-prev {
    left: -35px;
    @media (max-width: 800px) {
      visibility: hidden;
    }

  }

  .slick-next {
    right: -35px;
    @media (max-width: 800px) {
      visibility: hidden;
    }
  }

  .slick-next::before,
  .slick-prev::before {
    transition: .3s ease-in-out;
    color: ${({ categoryColor }) => `${categoryColor}`}
  }
`;

export const SliderItem = styled.li`
  margin-right: 16px;
  img {
    margin: 16px;
    width: 298px;
    height: 197px;
    object-fit: cover;
  }
`;


const Slider = ({ children, categoryColor }) => (
  <Container categoryColor={categoryColor}>
    <SlickSlider {...{
      dots: false,
      infinite: true,
      speed: 300,
      centerMode: false,
      variableWidth: true,
      adaptiveHeight: true,
    }}
    >
      {children}
    </SlickSlider>
  </Container>
);

export default Slider;
