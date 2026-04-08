import Card from './components/Card'
import Section from './components/Section'
import { CardGrid } from './components/Section/styles'
import Header from './containers/Header'
import Hero from './containers/Hero'
import { Layout } from './styles'

function App() {
  return (
    <>
      <Layout>
        <Header />
        <Hero />
      </Layout>
      <Section primary id='serviços'>
        <p className="uptitle">Serviços</p>
        <h2 className="title">
          Serviços feitos para <span>o seu negócio</span>
        </h2>
        <p className="subtitle">
          Desenvolvemos projetos digitais sob medida, do conceito ao lançamento,
          com atenção a cada detalhe.
        </p>
        <CardGrid>
          <Card type="icon" icon="rocket-takeoff">
            <h5 className="title">Landing pages</h5>
            <p className="subtitle">
              Páginas de alta conversão, desenvolvidas com foco total no seu
              objetivo — seja gerar leads, vender ou divulgar um evento.
            </p>
          </Card>
          <Card type="icon" icon="globe2">
            <h5 className="title">Sites institucionais</h5>
            <p className="subtitle">
              Presença online profissional para sua empresa. Design moderno,
              responsivo e otimizado para mecanismos de busca.
            </p>
          </Card>
          <Card type="icon" icon="gear">
            <h5 className="title">Sistemas Web</h5>
            <p className="subtitle">
              Dashboards, painéis de gestão e aplicações web personalizadas que
              automatizam e organizam o seu negócio.
            </p>
          </Card>
          <Card type="icon" icon="lightbulb">
            <h5 className="title">Soluções Customizadas</h5>
            <p className="subtitle">
              Tem uma ideia específica? Desenvolvemos qualquer solução digital
              alinhada às suas necessidades e ao seu orçamento.
            </p>
          </Card>
        </CardGrid>
      </Section>
    </>
  )
}

export default App
