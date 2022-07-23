import { FormContainer } from './Articles/styled'
import LogoWhite from '@/components/svg/Logo'
import { useState } from 'react';


const Form = () => {
  const [form, setForm] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: '',
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const WhatsappURl = new URL('https://wa.me/')
    WhatsappURl.searchParams.set('phone', '5493816177503' )
    const message = `Hola, mi nombre es ${form.nombre}:
    ${form.mensaje}`

    WhatsappURl.searchParams.set('text', message)
    window.open(WhatsappURl, '_blank', 'noopener,noreferrer')

  }

  return (
    <FormContainer onSubmit={onSubmit}>
      <div className='title'>
        <h3>Estamos a su disposición para asesorarle, sin compromiso alguno. </h3>
        <LogoWhite />
      </div>
      <div className='row'>
        <div className="field-container full">
          <label htmlFor="nombre">Nombre</label>
          <input name='nombre' type='text' 
            value={form.nombre}
            onChange={handleChange}
          />
        </div>

      </div>
      <div className='row'>
        <div className="field-container">
          <label htmlFor="email" >Email</label>
          <input name='email' type="email" 
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="field-container">
          <label htmlFor="telefono">Contacto</label>
          <input name='telefono'
            onChange={handleChange}
            value={form.telefono}
          type='tel' />
        </div>
      </div>

      <div className='row'>
        <div className='field-container full'>
          <label htmlFor="mensaje">Mensaje</label>
          <textarea name='mensaje' 
            value={form.mensaje}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className='form--buttons'>
        <button 
          type='submit'
          className='form--buttons--enviar'
          onClick={onSubmit}
          disabled={form.nombre === '' || form.email === '' || form.telefono === '' || form.mensaje === '' }
        >Enviar</button>
        <button className='form--buttons--cancelar'
          onClick={() => {
            setForm({
              nombre: '',
              email: '',
              telefono: '',
              mensaje: '',
            })
          }}
        >
          Cancelar</button>
      </div>
    </FormContainer>
  )
}

export default Form