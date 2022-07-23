import { ComoLoHacemos as Styled } from "./styled"

import Img from "@/components/Img"

import Logo from "@/assets/LogoWhite.svg"
import Llave from "@/assets/Llave.svg"
import Casa from "@/assets/Casa.svg"
import Trabajador from "@/assets/Trabajador.svg"

const ComoLoHacemos = ({img}) => {
  return (
    <Styled>
      <div className="top">
        <img src={Logo} alt="" />
        <h3>
          Proyecto, desarrollo,
          dirección y construcción
          de obras
        </h3>

      </div>
      <div className="bottom">
        <div className="background">
          <Img src={img} metadata={{ alt: "Como lo hacemos" }} />
          <h3>
            ¿Cómo lo <span>hacemos</span>?
          </h3>
        </div>
        <div className="container">
          <div className="cards">
            <div className="card">
              <img src={Llave} alt="Llave en mano" />
              <p>Llave en Mano</p>
            </div>
            <div className="card">
              <img src={Trabajador} alt="Construcción Tradicional" />
              <p>Construcción Tradicional</p>
            </div>
            <div className="card">
              <img src={Casa} alt="Steel Frame" />
              <p>Steel Frame</p>
            </div>
          </div>
          <p>
            El trabajo en equipo facilita el cumplimiento de objetivos, incrementa la motivación y la creatividad, y favorece las habilidades sociales de cada uno.
          </p>
        </div>
      </div>
    </Styled>
  )
}

export default ComoLoHacemos