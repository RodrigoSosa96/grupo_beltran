import { Wrapper } from "./styled"
import Img from '@/components/Img';


const ContentRightImg = ({children, img, alt}) => {
  return (
    <Wrapper>
      {children}
      <div className="img-right">
        <Img src={img} metadata={{ alt }} />
      </div>
    </Wrapper>
  )
}

export default ContentRightImg