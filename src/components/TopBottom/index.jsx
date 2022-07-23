import styled from "styled-components"
import Top from "@/assets/Top.svg"

const Styled = styled.a`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;

  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);

  background-color: rgba(230, 94, 67, 0.7);
  height: 80px;
  width: 80px;
  border-radius: 50%;


  @media (min-width: 768px) {
    right: 0;
    left: unset;
    bottom: 2rem;
  }
`

const TopBottom = () => {
  return (
    <Styled href='#top' >
      <img src={Top} />
    </Styled>
  )
}

export default TopBottom