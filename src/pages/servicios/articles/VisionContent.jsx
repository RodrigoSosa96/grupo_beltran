import styled from 'styled-components'
import Logo from "@/assets/Logo.svg"
import Vision from '@/components/Vision'



const Content = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  right: 0;
  background-color: hsl(0, 0%, 85%, 0.8);
  padding: 3rem 2rem;

  width: 100%;

  img {
    width: 296px;
    width: clamp(200px, 38.542vw, 296px);
    object-fit: cover;
    margin-bottom: 1rem;

  }
  h2 {
    text-align: center;
    margin-bottom: 0.5rem;
    font-size: 1.563rem;

    font-size: clamp(1rem, 3.255vw, 1.563rem);


    
  }
  p {
    white-space: pre-wrap;
    max-width: 56ch;
    text-align: justify;
    font-size: 1.313rem;
    font-size: clamp(.9rem, 2.734vw, 1.313rem);
    
  }
  @media (min-width: 768px) {
  
    width: unset;
    padding: 6rem 5rem;
    h2 {
      font-size: min(1.563rem, 1.736vw);
      font-size: clamp(1.313rem, 1.736vw, 1.563rem);

    }
    p {
      font-size: min(1.313rem,  1.458vw);
      font-size: clamp(1.125rem, 1.458vw, 1.313rem);
    }
    
  }
  @media (min-width: 1024px) {
  }


`

const VisionContent = ({...props}) => {
  return (
    <Vision img={props.img} >
      <Content>
        <img src={Logo} alt="" />
        <h2>{props.title}</h2>
        <p>
          {props.text}
        </p>
      </Content>
    </Vision>
  )
}

export default VisionContent