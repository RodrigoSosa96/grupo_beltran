// import { useState } from "react"
import { Tarjetas as Styled } from "./styled"

import Img from "@/components/Img"

const Tarjetas = ({imgs}) => {
  // const [isOpen, setIsOpen] = useState(false)
  // const [selectedItems, setSelectedItems] = useState(null)

  return (
    <Styled>
      {
        imgs.map((img, index) => (
          <div key={index} >
            <Img src={img} />
          </div>
        ))
      }

    </Styled>
  )
}

export default Tarjetas