import styled from "styled-components";

export const Proyectos = styled.article`
  width: 100%;
  
  .top {
    display: flex;
    align-items: center;
    justify-content: space-around;
    
    flex-direction: column;
    gap: 4rem;


    width: 100%;
    min-height: 100vh;

    /* padding:  0 0rem 0 5rem; */


    padding: 4rem 2rem;

    h2 {
      color: var(--color-primary);
      font-weight: 200;
      font-size: min(4vw, 3.6rem);
      font-size: clamp(2.563rem, 4vw, 3.6rem);
      
      max-width: 20ch;
    }
    .cards {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 2rem;
      div {
        color: #7E7D7D;
        h3 {
          font-size: min(1.3rem, 1.44vw);
          font-size: clamp(0.921rem, 1.44vw, 1.3rem);
          margin-bottom: 1rem;
        }
        p {
          font-size: clamp(0.75rem, 1.056vw, .95rem);
        }

      }
    }
  }
  .bottomImg {
    position: relative;
    width: 100%;
    height: 70vh;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      vertical-align: middle;
    }
  }

  @media (min-width: 768px) {
    .top {
      flex-direction: row;
      justify-content: space-between;
      padding: 0;
      padding-left: 5rem;
      padding-right: 1.5rem;

      h2 {
        
      }
      .cards {
        flex-direction: column;
        div {
          text-align: right;

        }
      }
    }
    .bottomImg {
      height: 100vh;
  
    }

  }
  @media (min-width: 1024px) {
    .top {
      padding-left: 12rem;
      padding-left: min(13.3vw, 12rem);

      padding-right: 5.9rem;
      padding-right: min(5.9rem, 7.5vw);
    }
  }
`

export const Tarjetas = styled.article`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  gap: 2rem;

  /* padding: 15rem 0; */
  padding: 4rem 2rem;

  div {
    width: 382px;
    /* height: 550px; */
    width: max(300px, 90%);
    aspect-ratio: 0.69/1;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

  }
  div:nth-child(1) {
    img {
      object-position: left;
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;
    gap: unset;
    padding: 0 2rem;

    div {
      width: calc(100% / 3 - 2rem);
    }

  }
  @media (min-width: 1024px) {
    div {
      width: 382px;
      /* padding: 4rem 0; */
    width: calc(100% / 3 - 4rem);

    }
  }
`