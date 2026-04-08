import { Hero as HeroContainer, Span, GlowOrb, Button } from './styles'

const Hero = () => {
  return (
    <HeroContainer>
      <GlowOrb className="glow-1" />
      {/* <GlowOrb className="glow-2" /> */}
      <div className="container">
        <Span>
          <div className="dot"></div> Agência digital
        </Span>
        <h1>
          Sites e páginas que passam confiança e ajudam{' '}
          <span>seu negócio a ser encontrado</span>
        </h1>
        <p>
          Criamos sistemas web, landing pages e sites sob medida com foco em
          desempenho, visual profissional e uma experiência simples para quem
          vai usar. Do primeiro layout à publicação, cuidamos de cada detalhe
          para transformar sua ideia em uma presença online clara e bem
          construída.
        </p>
        <div>
          <Button primary>Iniciar meu projeto</Button>
          <Button>Ver serviços</Button>
        </div>
      </div>
    </HeroContainer>
  )
}

export default Hero
