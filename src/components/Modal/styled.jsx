import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  /* padding-right: 15px;  */

  overflow-y: hidden;

  background: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

`
export const ModalGallery = styled.div`
  position: relative;
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  /* justify-content: center;
  align-items: center; */
  gap: 2rem;

  background: #fff;
  overflow-y: scroll;
  padding: 2rem 1rem;

  scroll-snap-type: y proximity;

  img {
    width: 100%;
    height: 100%;

    scroll-snap-align: center; 

    
    object-fit: cover;
    user-select: none;
    user-drag: none;
    vertical-align: middle;
  }

  @media (min-width: 768px) {
    width: 90%;
    padding: 2rem;

  }
`

export const CloseBtn = styled.a`
  position: absolute;
  right: 32px;
  top: 32px;
  width: 32px;
  height: 32px;
  opacity: 1;
  z-index: 9;

  &:hover {
    opacity: 1;
    &:before,
    &:after {
      width: 4px;
    }
  }
  &:before, &:after {
    position: absolute;
    left: 15px;
    content: '';
    height: 33px;
    width: 2px;
    background-color: hsl(0, 0%, 80%);
    border-radius: 3px;
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }


`



export const FormContainer = styled.form`
  position: relative;
  width: 100%;
  max-width: var(--width-tablet);
  
  display: flex;
  /* flex-direction: column;
  align-items: center; */
  flex-direction: column;
  overflow-y: scroll;
  
  gap: 2rem;
  padding: 2rem 2rem;
  
  
  background-color: hsl(0, 0%, 5%, 0.7);
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
    height: 8rem;
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