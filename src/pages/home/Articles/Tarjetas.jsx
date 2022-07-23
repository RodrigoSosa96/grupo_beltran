import { useState } from 'react'

import { Tarjetas as Styled, Card } from './styled'
import Modal from "@/components/Modal"
import Img from "@/components/Img"

const Tarjetas = ({imgs}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState(null)


  const tarjetas = {
    "01-slider": {
      title: "COSTA ESMERALDA",
      parrafo: "Hacemos lo imposible realidad, creamos experiencias para las familias de Pinamar.",
      img: imgs[0]
    },
    "02-slider": {
      title: "COSTA ESMERALDA",
      parrafo: "Hacemos lo imposible realidad, creamos experiencias para las familias de Pinamar.",
      img: imgs[1]
    },
    "03-slider": {
      title: "COSTA ESMERALDA",
      parrafo: "Hacemos lo imposible realidad, creamos experiencias para las familias de Pinamar.",
      img: imgs[2]
    }
  }

  

  return (
    <Styled>
      <h2>Proyectos en <br /><span>La Costa Atlántica</span></h2>
      <div className='cards'>
        {
          Object.keys(tarjetas).map(key => {
            const { title, parrafo, img } = tarjetas[key]
            return (
              <Card
                key={key}
                onClick={() =>{
                  setSelectedItems(img)
                  setIsOpen(true)
                }}>
                <div className='img-wrapper'>
                  <Img src={img[0]} />
                </div>
                <div className='content'>
                  <h3>{title}</h3>
                  <p>
                    {parrafo}
                  </p>
                </div>
              </Card>
            )
          }
          )
        }

      </div>
      <Modal
        isOpen={isOpen}
        handleClose={() => setIsOpen(false)}
        selectedItems={selectedItems}
      />
    </Styled>
  )
}

export default Tarjetas