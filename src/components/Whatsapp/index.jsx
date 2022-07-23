import styled from "styled-components"
import Logo from "@/assets/whatsapp.svg"

const Wrapper = styled.a`
  position: fixed;
  bottom: 1rem;
  right: 1rem; 


  display: flex;
  align-items: center;


  z-index: 99999;
  img {
    width: 3rem;
    filter: drop-shadow(0 0 .5rem rgba(0,0,0,.5));
    transition: all .3s ease-in-out;
    opacity: .7;
    &:hover {
      opacity: 1;
      transform: scale(1.1);
    }
  }

  @media (min-width: 768px) {
    bottom: 2rem;
    right: 2rem; 
    img {
      width:4rem;

    }
  }



`


const Whatsapp = () => {
  return (
    <Wrapper href="https://wa.me/549000000?text=Hola,%20me%20gustaria%20más%20información"  target="_blank" rel="noopener noreferrer">
      <img src={Logo} alt="Whatsapp" />
    </Wrapper>
  )
}

export default Whatsapp