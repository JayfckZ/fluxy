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
        <Section primary id="serviços">
          <p className="uptitle">Serviços</p>
          <h2 className="title">
            Serviços feitos para <span>o seu negócio</span>
          </h2>
          <p className="subtitle">
            Desenvolvemos projetos digitais sob medida, do conceito ao
            lançamento, com atenção a cada detalhe.
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
                Dashboards, painéis de gestão e aplicações web personalizadas
                que automatizam e organizam o seu negócio.
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
        <Section id={'sobre'}>
          <p className="uptitle">Sobre nós</p>
          <h2 className="title">
            A vantagem de trabalhar com uma equipe{' '}
            <span>que acompanha cada detalhe</span>
          </h2>
          <p className="subtitle">
            Enquanto projetos maiores costumam passar por várias etapas, aqui
            você fala diretamente com quem planeja e desenvolve. Isso torna a
            comunicação mais clara, o processo mais rápido e o resultado muito
            mais alinhado ao que você realmente precisa.
          </p>
          <CardGrid>
            <Card type="number" number="01">
              <h5 className="title">Atendimento próximo</h5>
              <p className="subtitle">
                Acompanhamos seu projeto de ponta a ponta, com comunicação
                simples, alinhamento constante e atenção real aos detalhes.
              </p>
            </Card>
            <Card type="number" number="02">
              <h5 className="title">Desenvolvimento com agilidade</h5>
              <p className="subtitle">
                Sem burocracia e sem etapas desnecessárias. O projeto evolui com
                rapidez, organização e foco no prazo combinado.
              </p>
            </Card>
            <Card type="number" number="03">
              <h5 className="title">Projeto pensado para o seu negócio</h5>
              <p className="subtitle">
                Cada site, landing page ou sistema é desenvolvido de acordo com
                seu objetivo, identidade e necessidade real.
              </p>
            </Card>
            <Card type="number" number="04">
              <h5 className="title">Quem desenvolve fala com você</h5>
              <p className="subtitle">
                Você conversa diretamente com quem está criando o projeto, o que
                evita ruídos, acelera decisões e melhora o resultado final.
              </p>
            </Card>
          </CardGrid>
        </Section>
      </Layout>
    </>
  )
}

export default App
