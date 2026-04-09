import { Form as FormContainer } from '../Card/styles'
import { IMaskInput } from 'react-imask'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { OrbitProgress } from 'react-loading-indicators'

const Form = () => {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [mensagem, setMensagem] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const time = new Date()
    setLoading(true)

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        nome,
        email,
        whatsapp,
        mensagem,
        time
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    )
    .then(() => {
      alert('Email enviado com sucesso!')
      setNome('')
      setEmail('')
      setWhatsapp('')
      setMensagem('')
    })
    .catch(() => {
      alert('Erro ao enviar email')
    })
    .finally(() =>
      setLoading(false)
    )

  }

  return (
    <FormContainer as="form">
      <div className="duplo">
        <div>
          <label htmlFor="name">Nome*</label>
          <input
            type="text"
            id="name"
            required
            placeholder="Seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">E-mail*</label>
          <input
            type="email"
            id="email"
            required
            placeholder="email@exemplo.com.br"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>
      <div>
        <label htmlFor="phone">Whatsapp</label>
        <IMaskInput
          mask="(00) 00000-0000"
          id="phone"
          name="phone"
          placeholder="(00) 00000-0000"
          value={whatsapp}
          onChange={(e) => setWhatsapp(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="msg">Mensagem*</label>
        <textarea
          id="msg"
          placeholder="Conte-nos um pouco do que precisa"
          required
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
        />
      </div>
      <button type="submit" onClick={(e) => handleSubmit(e)} disabled={loading} >
        {loading ? (<OrbitProgress color="#ffffff" text="" textColor="#ffffff" />) : ('Enviar')}
      </button>
      <p className="alert">Seus dados são usados apenas para responder ao seu contato. Sem spam, sem cadastro em listas.</p>
    </FormContainer>
  )
}

export default Form
