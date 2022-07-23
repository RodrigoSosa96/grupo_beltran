import { Servicios as Styled } from './styled'

import caja from "@/assets/Caja.svg"
import Archivo from "@/assets/Archivo.svg"
import edificio from "@/assets/Edificio.svg"
import logo from "@/assets/SimpleLogo.svg"

const Servicios = () => {
  return (
    <Styled>
      <div className='title'>
        <img src={logo} alt="" />
        <h2>
          Servicios de Obras <br />
          <span>Particular & Privadas</span>
        </h2>
      </div>
      <div className="content">
        <div className="item">
          <img src={caja} alt="" />
          <div>
            <h4>PROYECTOS</h4>
            <p>
              Casas/Edificios<br />
              Hormigón Visto<br />
              Tradicional<br />
              Steel Frame<br />
            </p>
          </div>
        </div>
        <div className="item">
          <img src={Archivo} alt="" />
          <div>
            <h4>CONSTRUCCIÓN</h4>
            <p>
              Llave en Mano<br />
              Hormigón Visto<br />
              Construcción Tradicional<br />
              Steel Frame<br />
              Servicio de Construcción<br />
              Personalizado<br />
            </p>
          </div>
        </div>
        <div className="item">
          <img src={edificio} alt="" />
          <div>
            <h4>DIRECCIÓN</h4>
            <p>
              Taréas de Dirección<br />
              Ejecución de Obra<br />
              Carpeta técnica o<br />
              legajo de Obra<br />
            </p>
          </div>
        </div>

      </div>
      <p>«La arquitectura es el punto de partida del que quiera llevar a la humanidad hacia un porvenir mejor.»</p>
    </Styled>
  )
}

export default Servicios