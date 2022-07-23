import { FooterContainer } from './styled'

import Instagram from "@/assets/Instagram.svg"
import Facebook from "@/assets/Facebook.svg"
import Logo from "../svg/Logo";

const Footer = () => {
  return (
    <FooterContainer>
      <div className='top-footer'>
        <Logo />
        <div className="separator"/>
        <div className='social'>
          <a href="https://www.instagram.com/gb.constructora/" target="_blank" rel="noreferrer noopener">
            <img src={Facebook} alt="Facebook" /> 
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer noopener">
            <img src={Instagram} alt="Instagram" />
          </a>
        </div>
      </div>
      <p>© 2022 Construcciones GB, todos los derechos reservados.</p>
    </FooterContainer>
  )
}

export default Footer