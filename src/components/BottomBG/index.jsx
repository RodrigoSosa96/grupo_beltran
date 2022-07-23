import { Container } from "./styled"
import Img from "../Img"
import TopBottom from "../TopBottom"

const BottomBG = ({ title, subtitle, text, img }) => {
  return (
    <Container>
      <Img src={img} />
      <div className="info">
        <h2>{title} <span>{subtitle}</span></h2>
        <p>{text}</p>
      </div>
      <TopBottom />
    </Container>
  )
}

export default BottomBG