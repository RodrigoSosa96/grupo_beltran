import BottomBG from "@/components/BottomBG"

import Proyectos from "./articles/Proyectos"
import Tarjetas from "./articles/Tarjetas"
import VisionContent from "./articles/VisionContent"

import { servicios, proyectos } from "@/imgData.json"

const Servicios = () => {
  const vision = {
    img: servicios[""][1],
    title: "REALIZAMOS TODO TIPO DE CONSTRUCCIONES",
    text: `Viviendas, Edificios públicos, urbanización y acondicionamiento de espacios exteriores, Oficinas, etc… tenemos una amplia experiencia también en restauración, remodelación y rehabilitación de inmuebles protegidos y de interés cultural.`,
    paddingTop: {
      mobile: "3rem",
      desktop: "3rem"
    }
  }

  const bottomBG = {
    title: "Pinamar",
    subtitle: "Casa Innovar",
    text: "El trabajo en equipo facilita el cumplimiento de objetivos, incrementa la motivación y la creatividad, y favorece las habilidades sociales de cada uno.",
    img: proyectos.slider[2]

  }


  return (
    <>
      <Proyectos img={servicios[""][0]} />
      <VisionContent {...vision} />
      <Tarjetas imgs={servicios["tarjetas"]} />
      <BottomBG {...bottomBG}/>
    </>
  )
}

export default Servicios