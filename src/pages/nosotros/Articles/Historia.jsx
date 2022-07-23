import { Historia as Styled } from './styled'
import Img from "@/components/Img"

import Logo from "@/assets/Logo.svg"

const Historia = ({ img }) => {
  return (
    <Styled>
      <div className='title'>
        <img src={Logo} alt="Logo Grupo Beltran" />
        <h1>30 años <br /><span>siendo parte de la historia</span></h1>
      </div>
      <div className="collage">
        <Img src={img} alt="" />
      </div>
    </Styled>
  )
}

export default Historia