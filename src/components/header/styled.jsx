import { NavLink as L } from "react-router-dom"
import styled from 'styled-components'



export const HeaderContainer = styled.header`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 999999;

  width: 100vw;
  height: 100vh;
  
  display: ${prop => prop.$show ? 'flex' : 'none'};
  
  background-color: #E65F43;  
  transition: top 0.5s ease-in-out;
  
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    
    height: 6rem;
    padding-bottom: 1.25rem ;
    
    background-color: #E65F43;
    opacity: 0.9;
    z-index: 999;
    
    
    ${props => props.$scroll === "down" ? `top: -6rem;` : `top: 0px;`}

  }
`
export const LogoMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 7vh 0 0 0;
  gap: 5rem;
  gap: 10vh;
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-end;
    padding: 0;
    gap: 0;
    flex-grow: 0;
    
  }

  @media (min-width: 1024px) {
    gap: 4em;
  }

`


export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  svg {
    height: 7.5rem;
  }
  padding: 0 2rem;

  @media (min-width: 768px) {
    justify-content: center;
    svg {
      height: 48px;
    }
    padding: 0 2rem;
  }

  @media (min-width: 1024px) {
    padding: 0 5rem;
  }
`
export const Link = styled(L)`
  margin: 0;
  padding: 0;
  text-decoration: none;
  text-transform: uppercase;
  color: var(--color-text-secondary);
  font-weight: 400;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  
  &.active {
    font-weight: 900;


  }
  &:hover {
    font-weight: 900;
  }

  @media (min-width: 768px) {
    font-size: 1rem;
    &.active {
      &::after {
      content: "";
      position: absolute;
      display: block;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 18px 18px 18px;
      border-color: transparent transparent white transparent;
      bottom: 0;
      }
    }
  }

`

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  padding: 0 1rem;
  
  gap: 2rem;
  
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 2.3rem;

  }
`





export const Social = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  align-items: flex-end;
  padding: 0 1rem 6rem 1rem;
  padding: 2rem 1rem 6rem 1rem;

  gap: 1rem;

  p {
    font-family: Inter;
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0;
    a {
      text-decoration: none;
      color: var(--color-text-secondary);
    }
  }
  span {
    width: 2px;
    height: 1.6rem;
    background-color: var(--color-text-secondary);

  }
  > a {
    
    width: 1.75rem;
    align-self: flex-end;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      vertical-align: bottom;
    }
  }

  @media (min-width: 768px) {
    justify-content: space-between;
    padding: 0 1rem 0rem 1rem;

    gap: 1.4rem;
    p {
      font-size: 1rem;
    }

  }

  @media (min-width: 1024px) {
    padding: 0 5rem 0rem 2rem;

  }
`

export const Hamburger = styled.div`
  position: absolute;
  height: 50px;
  width: 50px;
  right: 1.5rem;
  top: 1.5rem;
  z-index: 9999;

  img {
    width: 100%;
  }

  @media (min-width: 768px) {
    display: none;
  }
`