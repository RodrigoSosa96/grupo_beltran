import styled from "styled-components";

export const FooterContainer = styled.footer`
  position: relative;
  /* bottom: 0; */
  width: 100vw;
  height: 224px;

  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .top-footer {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;

    margin-bottom: 1.5rem;
    
    svg {
      width: 70px;
    }

    .separator {
      width: 2px;
      height: 70%;
      background-color: white;
    }

    .social {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
      a {
        img {        
          width: 30px;
          height: 30px;
        }

      }
    }
  }
  p {
    font-size: clamp(1rem, 1.39vw, 1.25rem);
    font-weight: 300;
    text-align: center;
  }


  background-color: rgb(230, 95, 67);
  color: var(--color-text-secondary);



  @media (min-width: 768px) {

  }

  @media (min-width: 1024px) {

  }

`