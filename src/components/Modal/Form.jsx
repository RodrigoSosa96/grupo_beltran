import LogoWhite from '@/components/svg/Logo'
import { FormContainer } from './styled'


const Form = ({ handleClose }) => {
  return (
    <FormContainer>
      <div className='title'>
        <h3>Estamos a su disposición para asesorarle, sin compromiso alguno. </h3>
        <LogoWhite />
      </div>
      <div className='row'>
        <div className="field-container full">
          <label htmlFor="nombre">Nombre</label>
          <input name='nombre' type='text' />
        </div>

      </div>
      <div className='row'>
        <div className="field-container">
          <label htmlFor="email">Email</label>
          <input name='email' type="email" />
        </div>
        <div className="field-container">
          <label htmlFor="tel">Contacto</label>
          <input name='tel' type='text' />
        </div>
      </div>

      <div className='row'>
        <div className='field-container full'>
          <label htmlFor="mensaje">Mensaje</label>
          <textarea name='mensaje' />
        </div>
      </div>
      <div className='form--buttons'>
        <button className='form--buttons--enviar' onClick={handleClose}>Enviar</button>
        <button className='form--buttons--cancelar' onClick={handleClose}>Cancelar</button>
      </div>
    </FormContainer>
  )
}

export default Form