import styled from "styled-components";

export const Historia = styled.article`
  height: 100vh;
  width: 100%;

  padding-top: 100px;

  display: flex;
  flex-direction: column;
  align-items: center;



  .title {

    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 3rem;

    img {
      width: 360px;
      width: min(360px, 80%);
    }
    h1 {
      font-size: max(2.73rem, 9vw);

      line-height: max(1.9rem, 6.256vw);


      color: var(--color-primary);
      span {
        color: var(--color-text);
        /* font-size: 5vw;
        font-size: min(1.7rem, 6vw); */
        font-size: 1.9rem;
        font-size: max(1.9rem, 6.256vw);




      }
    }
  }
  .collage {
    img {
      width: 871px;

      width: 80vw;
      padding-right: 1rem;


    }
  }
  @media (min-width: 768px) {
    /* padding-top: 200px; */
    align-items: center;
    justify-content: flex-end;
    flex-direction: row;
    .title {
      position: absolute;
      left: 0;

      align-items: flex-start;
      margin-left: 4.44vw;

      img {
        width: min(360px, 25vw);
      }
      h1 {
        font-size: min(5.33rem, 5.92vw);
        line-height: min(3.195rem, 3vw);

        span {
          font-size: min(3.195rem, 3vw);

        }
      }
    }
    .collage {
      img {
        width: min(871px, 75vw);
        padding-right: 0;
        
      }
    }
  }

`


export const Mision = styled.article`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  width: 100%;
  > div {
    align-self: stretch;
    position: relative;
    padding: 3rem 0;//! CHECK THIS
    padding-left: 3rem;




    h2 {
      text-align: center;
      color: var(--color-primary);
      font-size: 2.2rem;
      margin-bottom: 1.5rem;
    }
    p {
      max-width: 60ch;
      text-align: justify;
      font-size: 1rem;
      padding: 0 min(3.5vw, 4rem);
      margin: 0 auto;
    }
  }
  img {

    margin: 0;
    width: 100vw;
    height: 600px;
    object-fit: cover;

  }
  @media (min-width: 768px) {
    > div {
      h2 {
        font-size: 3.2rem;
      }
      p {
        font-size: 1.125rem;
      }
    }
  }
  @media (min-width: 1024px) {
    flex-direction: row;
    > div {
      padding-left: 10rem; 
      padding-left: min(7%, 10rem);
      align-self: unset;
      h2 {
        font-size: 4.375rem;
      }
      p {
        font-size: 1.261rem;
      }
    }

    img {
      margin-right: clamp(0rem, 3vw, 4rem);
      width: 474px;
      width: max(474px, 33%);
      height: 738px;

    }
  }

`

export const Vista = styled.article`
  position: relative;
  height: 100vh;
  width: 100%;

  display: flex;
  align-items: flex-end;
  justify-content: center;

  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 10%, rgba(0, 0, 0, 0.7) 75%),
  url(${prop => prop.bg});
  background-size: cover;
  background-position: center;

  > div {
    position: relative;
    padding-bottom: 5rem;
    h3 {
      text-align: center;
      color: var(--color-text-secondary);
      max-width: 30ch;


      font-size: 5vw;
      font-weight: 200;
      
    }
  }

  @media (min-width: 768px) {
    > div {
      padding-bottom: 3rem;
      h3 {
        font-size: 3rem;
      }
    }
  }

  @media (min-width: 1024px) {
    > div {
      h3 {
        font-size: 3.75rem;
      }
    }
  }
`