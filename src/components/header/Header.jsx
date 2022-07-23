import { useState } from "react"
import { Link as L } from "react-router-dom"
import useScrollDirection from '@/hooks/useScrollDirection'
import { HeaderContainer, Menu, Link, Social, LogoContainer, LogoMenuContainer, Hamburger } from "./styled"

import Logo from '../svg/Logo'
import Instagram from './Instagram.svg'
import hamburger from "@/assets/Hamburger.svg"
import ModalContact from "../Modal/ModalContact"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [openContact, setOpenContact] = useState(false)
  const scrollDirection = useScrollDirection();



  return (
    <>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <img src={hamburger} alt="Hamburguer menu" />
      </Hamburger>
      <HeaderContainer $scroll={scrollDirection} $show={isOpen} >
        <LogoMenuContainer onClick={() => setIsOpen(!isOpen)}>
          <LogoContainer >
            <L to="/">
              <Logo />
            </L>
          </LogoContainer>
          <Menu>
            <Link to="/">Home</Link>
            <Link to="/nosotros">Nosotros</Link>
            <Link to="/proyectos">Proyectos</Link>
            <Link to="/servicios">Servicios</Link>
          </Menu>
        </LogoMenuContainer>
        <Social>
          <p>
            <a href="#contacto" onClick={() => {
              setOpenContact(true)
              setIsOpen(false)
            }}>CONTACTO</a>
          </p>
          <span />
          <a href="https://www.instagram.com/gb.constructora/" target="_blank" rel="noopener noreferrer">
            <img src={Instagram} alt="Instagram" />
          </a>
        </Social>
      </HeaderContainer>
      <ModalContact
        isOpen={openContact}
        handleClose={() => setOpenContact(false)}
      />
    </>
  )
}

export default Header