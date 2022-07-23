import styled from "styled-components";
import { Swiper } from "swiper/react";

import Arrow from "./Arrow.svg"

export const SwiperWrapper = styled(Swiper)`
  width: var(--width);
  height: 100vh;
  background-color: var(--color-primary);


  .swiper-slide {
    text-align: center;
    font-size: 2rem;
    background: #fff;

    display: flex;
    justify-content: center;
    align-items: center;


    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 8.51%, rgba(0, 0, 0, 0.4) 76.19%);
      z-index: 9999999999;
    }
    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      user-select: none;
      user-drag: none;
    }
  }

  .swiper-button-next,.swiper-button-prev {
    display: none;
    background-color: var(--color-primary);

    height: 172px;
    height: clamp(122px, 12vw, 172px);

    width: 75px;
    width: clamp(50px, 5vw, 75px);


    transform: translateY(-50%);
    top: 50%;
    color: white;
    opacity: .7;
    transition: background-color .3s ease-in-out;
    background-color: rgba(255, 255, 255, 0.5);
    &.swiper-button-disabled {
    }
    &:hover {
    background-color: var(--color-primary);

    }

    &::after {
      content: url(${Arrow});
    }
  }
  .swiper-button-next {
    right: 0;
    &::after {
      transform: rotate(180deg);
    }
  }
  .swiper-button-prev {
    left: 0;
  }

  @media (min-width: 768px) {
  .swiper-button-next,.swiper-button-prev {
    display: flex;
  }
  }
`
export const CarrouselText = styled.div`
  position: absolute;
  left: 50%;
  bottom: 3rem;
  transform: translateX(-50%);
  z-index: 9;

  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.3rem;
  gap: 1rem;

  h2 {
    width: 35ch;
    font-size: 1.3rem;
    font-size: 5vw;
    text-align: center;


    color: var(--color-text-secondary);
    font-weight: 200;
    user-select: none;
  }
  svg {
    height: 3rem;

  }
  @media (min-width: 768px) {
    h2 {
      font-size: 2.18rem;
      font-size: 2.5vw;
      
    }
    svg {
      height: 3.5vw;
      height: 3rem;
    }
  
  }
`

export const Wrapper = styled.div`
  position: relative;
`