import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 150vh;
  background: linear-gradient(180deg, #FFFFFF 4%, rgba(243, 243, 243, 0.7) 19.39%, rgba(196, 196, 196, 0) 90%);;
  
  margin-top: 4rem;

  > img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }

  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 6rem 1rem;

    color: #6D6B6B;
    text-align: center;
    

    h2 {
      font-size: 6.345rem;
      font-size: 10vw;
      font-size: clamp(3.125rem, 4.837vw, 4.353rem);


      padding-bottom: 1rem;

      span {
        font-size: .38em;
      }
    }
    p {
      font-size: 1.45rem;
      font-size: clamp(0.71rem,  1.11vw, 1rem);
      

      max-width: 65ch;
    }
  }
  @media(min-width: 768px) {
    height: 250vh;

  }
`