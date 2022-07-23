import { Proyectos as Styled } from "./styled"

import Separator from "@/components/styled/Separator"
import Img from "@/components/Img"

const Proyectos = ({img}) => {
  return (
    <Styled>
      <div className='top'>
        <h2>
          Proyecto, desarrollo,
          dirección y construcción
          de obras
        </h2>
        <div className='cards'>
          <div>
            <h3>PROYECTOS</h3>
            <p>
              Casas/Edificios <br />
              Hormigón Visto <br />
              Tradicional <br />
              Steel Frame <br />
            </p>
          </div>
          <div>
            <h3>DIRECCIÓN</h3>
            <p>
              Taréas de Dirección <br />
              Ejecución de Obra <br />
              Carpeta técnica o <br />
              legajo de Obra
            </p>
          </div>
          <div>
            <h3>CONSTRUCCIÓN</h3>
            <p>
              Llave en Mano <br />
              Hormigón Visto <br />
              Construcción Tradicional <br />
              Steel Frame <br />
              Servicio de Construcción <br />
              Personalizado <br />
            </p>
          </div>
        </div>
      </div>
      <div className="bottomImg">
      <Separator
          opacity="0.7"
          directionX="right"
          width="164px"
          height="190px"
          x="5rem"
          y="-5.5rem"
          mobile={{
            directionX:"right",
            opacity: "0.8",
            width: "100px",
            height: "150px",
            x: "2rem",
            y: "-3.5rem",
          }}
        />
        <Img src={img} />
      </div>
    </Styled>
  )
}

export default Proyectos