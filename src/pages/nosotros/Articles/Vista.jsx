import { Vista as Styled } from "./styled"

import getRemoteImg from "@/utils/getImg"

const Vista = ({img}) => {
  
  return (
    <Styled bg={getRemoteImg(img)}>
      <div>
        <h3>Pinamar, Ostende, Valeria del Mar, Cariló, Costa Esmeralda</h3>
      </div>
    </Styled>
  )
}

export default Vista