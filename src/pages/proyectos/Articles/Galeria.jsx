import {  useState } from "react"

import { Galeria as Styled, Card } from "./styled"

import Separator from "@/components/styled/Separator"
import Modal from "@/components/Modal"
import Img from "@/components/Img"


const Galeria = ({data}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState(null);

  const dataEntries = Object.entries(data)
  return (
    <Styled>
      <Separator
        width="min(85px, 6vw)"
        height="248px"
        x="90%"
        y="5%"
        opacity="0.7"
        centered
        mobile={{
          minWidth: "1024px",
          x: "80%",
          // x: "85%",
          y: "1%",
          height: "200px",
          width: "63px"
        }}
      />

      {dataEntries.map(v => {
        const cards = v[1].cards
        return (
          <Card
            key={v[0]}
            onClick={() => {
              setSelectedItems(cards)
              setIsOpen(true)
            }} >
              
            <Img src={cards[0]} 
              srcSet={[768, 1024, 1280, 1600, 1920]}
            />
            <div>
              <h3>{v[1].texto}</h3>
            </div>
          </Card>
        )
      })
      }
      <Modal
        isOpen={isOpen}
        handleClose={() => setIsOpen(false) && setSelectedItems(null)}
        selectedItems={selectedItems}
      />
    </Styled>
  )
}

export default Galeria