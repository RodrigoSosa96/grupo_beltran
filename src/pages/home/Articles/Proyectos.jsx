import { Proyectos as Styled } from './styled'
// import Separator from "@/components/styled/Separator"
import Img from '@/components/Img'


import { Link } from 'react-router-dom'



const Proyectos = ({img}) => {
  return (
    <Styled>
      <Img src={img} metadata={{ alt: "Obra: Marítima, Costa Esmeralda - Pinamar" }} />
      <Link to="/proyectos">PROYECTOS</Link>
      {/* <p>Obra: Marítima, Costa Esmeralda - Pinamar</p> */}

    </Styled>
  )
}

export default Proyectos