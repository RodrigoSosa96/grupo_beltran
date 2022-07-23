import Carrousel from "@/components/carrousel"
import BottomBG from "@/components/BottomBG"

import Galeria from "./Articles/Galeria"
import ComoLoHacemos from "./Articles/ComoLoHacemos"

import { proyectos } from "@/imgData.json"

const ProyectosBody = () => {
  const { slider } = proyectos
  const galeria = proyectos["proyectos galeria de imagenes"]
  const comoLoHacemos = proyectos[""][0] //! Imagen Rota
  const bottomBG = {
    title: "Costa",
    subtitle: "Casa Innovar",
    text: "El trabajo en equipo facilita el cumplimiento de objetivos, incrementa la motivación y la creatividad, y favorece las habilidades sociales de cada uno.",
    img: proyectos[""][1]

  }
    
  return (
    <>
      <Carrousel data={slider} text="“Creamos experiencias para las familias”" />
      <Galeria data={galeria}/>
      <ComoLoHacemos img={comoLoHacemos} />
      <BottomBG {...bottomBG} />
    </>
  )
}

export default ProyectosBody