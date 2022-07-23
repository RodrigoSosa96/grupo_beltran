import styled from "styled-components";

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 0 2rem;

    
    h2 {
      color: var(--color-primary);
      font-weight: 900;
      padding-bottom: 2rem;

      /* line-height: 3rem; */
      line-height: 3.4rem;
      font-size: 4.5rem;


      span {
        color: var(--color-text);
        font-size: 0.85em;
      }
    }
    > div {
      position: relative;
      width: 100%;

      h3 {
        font-weight: 600;
        padding-bottom: 2rem;
        font-size: 1.4rem;

      }
      p {
        padding-bottom: 4rem;
        width: 100%;
        text-align: justify;
        
        font-size: 1rem;


        a {
          color: var(--color-text);
          font-size: 1.05em;
          font-weight: 500;
          :hover {
          text-decoration: underline;
            
          }
        }

      }
      div {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 1rem;
        img {
          width: 150px;
        }
        a {
          color: var(--color-text-secondary);
          font-size: .9rem;


          font-weight: 400;
          border-radius: 5px;
          background-color: #858585;
          padding: .5rem 3rem;
          padding: .5rem min(3rem, 3vw);
          transition: background-color .3s ease-in-out;
          &:hover {
            background-color: var(--color-primary);
          }
        }
      }
    }

  @media (min-width: 768px) {
    padding: 0;
    h2 {
      
      padding-left: 10rem;
      padding-left: clamp(5rem, 10vw, 10rem);
      
      line-height: 4rem;
      font-size: 5.33rem;
      font-size: min(5.33rem, 6vw);
      line-height: min(4rem, 4.5vw);
    }
    > div {
      padding-left: 10rem;
      padding-left: clamp(5rem, 10vw, 10rem);

      padding-right: 4rem;
      padding-right: clamp(3rem, 4vw, 4rem);

      h3 {
        font-size: 1.69rem;
        font-size: min(1.69rem, 1.9vw);
      }
      p {
        width: 50ch;
        padding-bottom: 5rem;

        font-size: 1.188rem;
        font-size: min(1.188rem, 1.3vw);
      }
      div {
        margin: 0;
        img {
          width: 250px;
          width: min(250px, 17vw);
        }
        a {
          font-size: 1.8rem;
          font-size: min(1.8rem, 2vw);
        }
      }
    }
  }
`

export const Proyectos = styled.article`
  position: relative;
  height: 100vh;
  width: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  a {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #e65f43;
    transition: opacity 0.3s ease-in-out;
    opacity: .7;
    &:hover {
      /* background-color: #E64B2C; */
      opacity: 1;
    }

    color: var(--color-text-secondary);
    border-radius: 10px;

    padding: .7rem 2.5rem;
    font-size: 1.8rem;

  }
  p {
    position: absolute;
    bottom: 10rem;
    left: 2rem;

    color: var(--color-text-secondary);
    font-size: 1.25rem;
    font-size: clamp(.9rem, 2vw, 1.25rem);
    font-weight: 200;
  }
  @media (min-width: 1024px) {
    p {
      font-size: 1.25rem;

    }
  }
`

export const Tarjetas = styled.article`
  position: relative;
  max-width: var(--width-desktop);
  display: flex;
  flex-direction: column;
  align-items: center;
  
  /* padding: 5rem 4rem; */

  h2 {

    font-weight: 900;

    font-size: min(2rem, 7vw);

    line-height: min(2rem, 7vw);
    

    /* line-height: min(4rem, 4.5vw); */

    text-align: center;
    
    color: var(--color-primary);
    padding: 1em 0; 

    span {

      font-size: 1.3em;

      color: var(--color-text);
    }
  }

  .cards {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-direction: column;
    align-items: center;

    position: relative;
    gap: 2rem;

    width: var(--width);
    max-width: var(--width-desktop);
    padding: 2rem 2rem;
    
    
  }

  @media (min-width: 768px) {
    h2 {
      padding-bottom: 2rem;
      font-size: 4rem;
      font-size: min(4rem, 4.5vw);

      line-height: min(4rem, 4.5vw);


    }
    .cards {
      flex-direction: row;
      padding: 4rem 4rem;

    }
  }
`

export const Card = styled.div`
  position: relative;
  .img-wrapper {
    position: relative;
    max-width: 382px;
    aspect-ratio: 0.69/1;
    /* padding: .5rem; */

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }


  &:hover div.content {
    opacity: 1;
  }

  .content {
    transition: all .2s ease-in-out;
    opacity: 0;

    display: none;
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;

    background-color: var(--color-black-transparent);
    
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
    gap: 1rem;

    color: var(--color-background);
    cursor: pointer;
    user-select: none;

    h3 {
      font-weight: 900;
      max-width: 10ch;
      text-align: center;
      font-size: 2rem;

    }
    p {
      max-width: 30ch;
      text-align: center;
      font-size: 1.2rem;

    }
  }
  @media (min-width: 768px) {
    .content {
      h3 {
        font-size: 2rem;
        font-size: min(2rem, 2vw);
      }
      p {
        font-size: 1.2rem;
        font-size: min(1.2rem, 1.4vw);
      }
    }
  }
`


export const Servicios = styled.article`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  color: var(--color-text-secondary);

  padding: 5rem 2rem;


  background-color: var(--color-primary);

  .title {
    display: flex;
    align-items: center;
    gap: 2rem;
    img {
      width: 80px;
      opacity: .8;
    }
    h2 {
      font-size: 2rem;
      span {
        font-weight: 100;

      }
    }
  }
  .content {
    position: relative;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 450px;
    /* align-items: center; */
    /* gap: 7rem; */
    width: 100%;

    .item {
      width: 100%;
      display: flex;
      justify-content: space-between;

      gap: 1rem;
      margin-bottom: 2rem;
      img {
        width: 75px;
      }
      div {
        text-align: right;
        h4 {
          font-size:  1.5rem;
          padding-bottom: .7rem;
        }
        p {
          white-space: pre-wrap;

          font-size: 1.1rem;
          line-height: 1.3em;
          font-weight: 300;
        }
      }
    }
  }
  > p {
    font-size: 1.25rem;
    font-size: 1rem;
    text-align: center;
    font-weight: 300;
  }

  @media (min-width: 768px) {
    padding: 5rem;

    .title {
      img {
        width: 100px;
      }
      h2 {
        font-size: 3.4rem;
      }
    }
    .content {
      max-width: 100%;
      justify-content: space-between;

      .item {
        width: auto;
        justify-content: flex-start;
        gap: 3rem;
        img {
          width: 100px;
        }
        div {
          text-align: left;
          h4 {
          font-size: 1.875rem;
          padding-bottom: 1rem;


          }
          p {
            font-size: 1.375rem;
          }
        }
      }
    }
    > p {
      font-size: 1.25rem;

    }
  }

`

export const BottomForm = styled.article`
  position: relative;
  width: 100%;
  width: var(--width);
  min-height: 100vh;

  padding: 4rem 0 8rem 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  background:  linear-gradient(180deg, #FFFFFF 2%, rgba(196, 196, 196, 0) 92%);;
  
  > img {
    position: absolute;
    object-fit: cover;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  .quote {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem 1rem;
    gap: 1rem;

    img {
      width: 75px;
      filter: drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.25));
    }

    h3 {
      max-width: 55ch;
      text-align: center;
      font-weight: 400;
      font-size: 2.188rem;
      font-size: min(2.188rem, 3.418vw);

    }
    p {
      font-weight: 500;
      font-size: 1.875rem;
      font-size: min(1.875rem, 2.93vw);

    }
  }
  
  @media (min-width: 768px) {
    min-height: 250vh;
    padding: 0;
    
    .quote {
      justify-content: center;
      height: 100vh;
      img {
        width: 109px;
      }
      gap: 2rem;
    }
  }  
`

export const FormContainer = styled.form`
  position: relative;
  width: 100%;
  max-width: var(--width-tablet);
  
  display: flex;
  flex-direction: column;
  align-items: center;
  
  gap: 2rem;
  padding: 2rem 2rem;
  
  
  background-color: rgba(0, 0, 0, 0.5);
  color: var(--color-text-secondary);

  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column-reverse;
    gap: 1rem;
    width: 100%;
    h3 {
      font-weight: 900;
      font-size: 1.5rem;
      max-width: 30ch;
      text-align: center;

    }
    svg {
      height: 2.5rem;
    }

  }
  label {
    font-weight: 600;
    font-size: 1.25rem;
    font-family: Inter;
  }
  input, textarea {
    padding: 0.5rem;
    font-size: 1.25rem; 
    height: 2.5rem;
    border: 1px solid var(--color-text-secondary);
    border-radius: .25rem;
    
    &:focus {
      outline: none;
    }
    &:not(:focus):invalid {
      border-color: hsl(0, 90%, 60%);
    }
  }
  textarea {
    height: 12rem;
  }

  .row {
    position: relative;

    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;

  }
  .field-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: .5rem;
  }


  .form--buttons {
    align-self: flex-end;
    display: flex;
    flex-direction: column;
    width: 100%;

    gap: 1rem;
    button {
      border: none;
      font-weight: 600;
      font-size: 1.5rem;
      padding: 0.5rem 2rem;
      height: 3rem;
      font-family: Inter;
      border-radius: .25rem;

      &:disabled {
        opacity: 0.5;
        
      }
    }
    &--enviar {
      background-color: var(--color-primary);
      color: var(--color-text-secondary);

    }
    &--cancelar {
      background-color: #D3DDE5;
      color: #858585;
    }

  }

  @media (min-width: 768px) {
    padding: 2rem 7rem;
    .title {
      flex-direction: row;
      svg {
        height: 3rem;
      }
      h3 {
        text-align: left;
      }
    }
    .row {
      flex-direction: row;
    }
    .form--buttons  {
      flex-direction: row;
      width: auto;
    }
  }
`