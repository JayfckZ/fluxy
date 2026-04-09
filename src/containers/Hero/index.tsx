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
          Criação de sites, landing pages e sistemas web
          <span> que passam confiança e geram resultados</span>
        </h1>
        <p>
          Somos uma agência digital especializada em desenvolvimento de sites,
          landing pages e sistemas web sob medida, com foco em desempenho,
          visual profissional e otimização para mecanismos de busca.
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
