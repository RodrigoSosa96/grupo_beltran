import { Link } from 'react-router-dom'

import Separator from "@/components/styled/Separator"
import ContentRightImg from '@/components/ContentRightImg'
import { Content } from './styled'

import Logo from "../../../assets/Logo.svg"


const QuienesSomos = ({img}) => {
  return (
    <ContentRightImg img={img}>
      <Content>
        <h2>30 años <br /> <span>en el Mercado</span></h2>
        <div>
          <Separator
            width="clamp(50px, 4vw, 59px )"
            height="100%"
            x="0"
            y="0"
            mobile={{
              // opacity: "0.8",
              width: "0",
              height: "0",
              x: "0",
              y: "50%"
            }}
          />
          <h3>Somos Grupo Beltrán, una empresa constructora familiar de dos generaciones</h3>
          <p>
            El tiempo nos dio experiencia y nos convirtió en una empresa sólida. Contamos con un equipo de profesionales enfocados en crear experiencias para las familias, comprometidos con el cumplimiento de los tiempos, la eficacia y creatividad.
          </p>
          <div>
            <img src={Logo} alt="Logo" />
            <Link to="/nosotros">VER +</Link>
          </div>

        </div>
      </Content>
    </ContentRightImg>
  )
}

export default QuienesSomos