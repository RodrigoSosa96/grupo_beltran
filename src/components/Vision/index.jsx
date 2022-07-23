import { Vision as Styled } from "./styled"

import Img from "../Img"

const Vision = ({ img, children }) => {
  return (
    <Styled>
      <Img
        src={img}
        metadata={{ alt: "Vision" }}
      />
      {children}
    </Styled>
  )
}

export default Vision