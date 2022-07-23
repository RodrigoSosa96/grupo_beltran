import Historia from "./Articles/Historia"
import Mision from "./Articles/Mision"
import Vista from "./Articles/Vista"

import VisionContent from "./Articles/VisionContent"
import BottomBG from "@/components/BottomBG"

import { nosotros } from "@/imgData.json"

const NosotrosBody = () => {

  const vision = {
    img: nosotros.variadasnosotros[3],
    title: "¿Nuestra Visión?",
    text: "Creamos espacios funcionales y luminosos acorde a las necesidades de nuestros clientes, con sentido estético del confort entregamos proyectos con llave en mano. Nuestro compromiso es con el cumplimiento de los tiempos, la eficacia y creatividad."
  }
  const misionImG = nosotros.variadasnosotros[2]
  const vistaImG = nosotros.variadasnosotros[0]
  const bottomBG = {
    title: "Pinamar",
    subtitle: "Casa Innovar",
    text: "El trabajo en equipo facilita el cumplimiento de objetivos, incrementa la motivación y la creatividad, y favorece las habilidades sociales de cada uno.",
    img: nosotros.variadasnosotros[1]

  }

  return (
    <>
      <Historia img={nosotros["Historia Pinamar"][4]} />
      <VisionContent {...vision} />
      <Mision img={misionImG} />
      <Vista img={vistaImG} />
      <BottomBG {...bottomBG} />
    </>
  )
}

export default NosotrosBody