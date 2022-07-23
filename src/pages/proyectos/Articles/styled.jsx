import styled from "styled-components";

export const Galeria = styled.article`
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

  gap: 2.75rem;
  align-content: center;

  width: 100%;
  min-height: 100vh;
  padding: 6rem 1rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(342px, 1fr));
    padding: 6rem 3rem;
  }
  @media (min-width: 1024px) {
    padding: 6rem;
  }

  @media (min-width: 1440px) {
    grid-template-columns: repeat(3, minmax(342px, 1fr));
  }


`

export const Card = styled.div`
    position: relative;
    height: 300px;
    width: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    > div {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;

      width: 100%;
      height: 100%;

      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      transition: background-color 0.3s ease-in-out;
      
      &:hover {
        background: rgba(0, 0, 0, 0.5);
        h3 {
          opacity: 1;
        }
      }

      cursor: pointer;        
      user-select: none;
      
      h3 {
        transition: opacity 0.3s ease-in-out;
        opacity: 0;

        color: var(--color-text-secondary);
        font-size: 1.5rem;
        font-weight: 600;
        text-align: center;
        
      }

    }
  @media (min-width: 768px) {
    height: 342px;
  }
`

export const ComoLoHacemos = styled.article`
  position: relative;
  width: 100%;

  .top {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 4rem;
    align-items: center;
    width: 100%;
    height: 100vh;

    padding: 0 6rem;
    padding: 0 min(6rem, 6vw);

    background-color: var(--color-primary);

    img {
      /* width: 100%; */
      width: 60vw;
    }
    h3 {
      color: var(--color-text-secondary);
      line-height: 7vw;

      font-size: 8vw;

      font-weight: 200;
      max-width: 20ch;
      span {
        a{

          color: var(--color-text-secondary);
          cursor: pointer;
          font-weight: 700;
          font-size: 4vw;
          vertical-align: middle;
          
          position: relative;
          padding: 0.2rem 1rem;
          margin-left: 1rem;

          ::before {
            content: "";
            position: absolute;
            top:50%;
            left: 0;
            transform: translate(-50%, -50%);
            width: 3px;
            height: 100%;
            background-color: var(--color-text-secondary);
          }

        }
      }
    }
  }
  .bottom {
    position: relative;
    width: 100%;
    min-height: 100vh;

    .background {
      position: relative;
      height: 100vh;
      width: 100%;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      h3 {
        position: absolute;
        top: 10%;
        right: 10%;
        color: var(--color-text-secondary);
        font-size: 3.2rem;
        font-size: clamp(2rem, 6.67vw, 3.2rem);

        max-width: 10ch;
        text-align: right;
        span {
          background-color: var(--color-primary-transparent);
          padding: 0 0 .5em .7em;
        }
  
      }
    }

    .container {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      .cards {
        transform: translateY(-10rem);

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        
        width: 100%;

        .card {
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 1rem;
          padding: 0 1rem;

          width: 379px;
          width: max(300px, 60%);
          aspect-ratio: 1/1;

          background-color: var(--color-primary);

          img {
            width: 90px;
            width: min(90px, 24%);
          }
          p {
            color: var(--color-text-secondary);
            font-size: 2.5rem;
            font-size: min(2.5rem, 8.5vw);
            text-align: center;
          }

        }
      }
      > p {
        bottom: 0;
        padding: 1.5rem 1rem;
        max-width: 70ch;

        font-weight: 600;
        font-size: 1.77rem;
        font-size: clamp(1rem, 2.5vw, 1.77rem);
        text-align: center;

      }
    }
  }

  @media (min-width: 768px) {
    .top {
      flex-direction: row;
      justify-content: space-between;
      gap: 0;

      img {
        width: 430px;
        width: min(430px, 30vw);
      }
      h3 {
        line-height: 3.75rem;
        line-height: min(3.75rem, 4.15vw);

        font-size: 4rem;
        font-size: min(4rem, 4.4vw);
        span {
          a {
            font-size: 0.45em;
          }
        }
      }
    }
    .bottom {
      .background {
        h3 {
          font-size: 4.375rem;
          font-size: 4.86vw;
          font-size: clamp(3.2rem, 4.86vw, 4.375rem);
        }
      }
      .container {
        .cards {
          transform: translateY(-3rem);
          flex-direction: row;
          .card {
            width: min(379px, calc(100vw/ 3 - 2rem));
            p {
              font-size : min(2.5rem, 3.3vw);
            }
          }
        }
        > p {
          padding: 1.5rem 3rem;

        }
      }
    }
  }
`