import Vision from '@/components/Vision'
import styled from 'styled-components'

const Content = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  right: 0;
  background-color: hsl(0, 0%, 85%, 0.8);
  padding: 4rem 2rem;
  width: 100%;

  h2 {
    text-align: center;
    color: var(--color-primary);
    font-size: 2.2rem;
    margin-bottom: 1.5rem;
  }
  p {
    white-space: pre-wrap;
    max-width: 60ch;
    text-align: justify;
    font-size: 1rem;
  }
  @media (min-width: 768px) {
    width: unset;
    h2 {
      font-size: 3.2rem;
    }
    p {
      font-size: 1.125rem;
    }

  }
  @media (min-width: 1024px) {
  padding: 8.5rem 4rem;
  h2 {
    font-size: 4.375rem;
  }
  p {
    font-size: 1.261rem;
  }
  }
`

const VisionContent = ({...props}) => {
  return (
    <Vision img={props.img}>
      <Content>
        <h2>{props.title}</h2>
        <p>
          {props.text}
        </p>
      </Content>
    </Vision>
  )
}

export default VisionContent