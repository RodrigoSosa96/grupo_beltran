import styled from "styled-components";

export const Vision = styled.article`
  position: relative;
  display:  flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  /* padding: 2rem 0; */


  > img {
    height: 700px;
    max-width:100%;
    width:100%;
    object-fit: cover;
  }


  @media (min-width: 768px) {
    padding: 7rem 0;

    > img {
      width: max(70%, 670px);
    }

  }
  @media (min-width: 1024px) {
    > img {
      width: 800px;
      width: max(800px, 55%);
      height: 895px;
    }

  }
`