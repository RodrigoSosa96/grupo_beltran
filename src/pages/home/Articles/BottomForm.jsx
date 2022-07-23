import { BottomForm as Styled } from './styled'
import Form from '../Form'
import Img from '@/components/Img'
import TopBottom from '@/components/TopBottom'

import Logo from "@/assets/LogoColor.svg"


const BottomForm = ({img}) => {
  return (
    <Styled>
      <Img src={img} metadata={{alt: "Proyecto Grupo Beltran"}} />
      <div className='quote'>
        <img src={Logo} alt="logo" />
        <h3>
          «La arquitectura es el punto de partida del que quiera llevar
          a la humanidad hacia un porvenir mejor.»
        </h3>
        <p>Alejándro Torres</p>

      </div>
      <Form />
      <TopBottom />
    </Styled>
  )
}

export default BottomForm