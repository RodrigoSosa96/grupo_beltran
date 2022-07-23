import { Mision as Styled } from "./styled"

import Separator from "@/components/styled/Separator"
import Img from "@/components/Img"

const Mision = ({ img }) => {
  return (
    <Styled>
      <div >
        <Separator
          width="min(11%, 6rem)"
          height="100%"
          x="0"
          y="0"
          mobile={{
            opacity: "0.8",
            width: "3rem",
            height: "100%",
            x: "0",
            y: "50%"
          }}
        />
        <h2>Nuestra Misión</h2>
        <p>
          Nuestra prioridad cómo empresa es ofrecerte la tranquilidad en el cumplimiento del presupuesto y los plazos pactados. Tenemos cómo misión el espacio, el minimalismo y la optimización de los espacios, siempre enfocados en crear experiencias confortables.
        </p>
      </div>
      <Img
        src={img}
        metadata={{ alt: "Vision" }}
      />
    </Styled>
  )
}

export default Mision