import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 2rem 0 0 0;

  min-height: 100vh;
  width: 100%;
  /* flex-direction: column; */

  .img-right {
    position: relative;
    width: 100%;
    height: 550px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
     }
  }

  @media (min-width: 768px) {
    padding: 4rem 0;
    flex-direction: row;
    .img-right {
      img{
        object-position: right;

      }
      
    }
  }

  @media (min-width: 1024px) {
    .img-right {
      height: 722px;
    }
  }
`