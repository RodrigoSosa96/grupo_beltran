// import { Helmet } from "react-helmet"
import Carrousel from "@/components/carrousel"

import QuienesSomos from './Articles/QuienesSomos'
import Proyectos from './Articles/Proyectos'
import Tarjetas from './Articles/Tarjetas'
import Servicios from './Articles/Servicios'
import BottomForm from './Articles/BottomForm'

import { home } from "@/imgData.json"

const HomeBody = () => {
  const carrouselData = home["01-slider principal"]
  const quienesSomosData = home["02-nosotros"][0]
  const proyectos = home["02-nosotros"][1]

  const tarjetas = home["03-proyectos_destacados"]
  const imgArray = Object.keys(tarjetas).map(key => tarjetas[key])
  const bottomForm = home[""][0]
  


    
  return (
    <>
      <Carrousel data={carrouselData} text="“Creamos experiencias para las familias”" />
      <QuienesSomos img={quienesSomosData}/>
      <Proyectos img={proyectos}/>
      <Tarjetas imgs={imgArray} />
      <Servicios />
      <BottomForm img={bottomForm} />
    </>
  )
}

export default HomeBody