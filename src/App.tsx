import Card from './components/Card'
import { Item, PriceCard } from './components/Card/styles'
import Section from './components/Section'
import { CardGrid, Step, StepContainer } from './components/Section/styles'
import Header from './containers/Header'
import Hero from './containers/Hero'
import { ContactLayout, Layout } from './styles'
import Form from './components/Form'
import Footer from './containers/Footer'

function App() {
  return (
    <Layout>
      <Header />

      <Hero />

      <Section primary id="serviços">
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
              Desenvolvemos páginas focadas em apresentar sua oferta com
              clareza, gerar contatos e aumentar as chances de conversão.
            </p>
          </Card>
          <Card type="icon" icon="globe2">
            <h5 className="title">Sites institucionais</h5>
            <p className="subtitle">
              Construímos sites profissionais para apresentar sua empresa,
              fortalecer sua presença online e transmitir mais confiança ao
              público.
            </p>
          </Card>
          <Card type="icon" icon="gear">
            <h5 className="title">Sistemas Web</h5>
            <p className="subtitle">
              Criamos sistemas personalizados para organizar processos,
              centralizar informações e tornar a operação do seu negócio mais
              simples e eficiente.
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
          Enquanto projetos maiores costumam passar por várias etapas, aqui você
          fala diretamente com quem planeja e desenvolve. Isso torna a
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

      <Section primary id="processo">
        <p className="uptitle">Como trabalhamos</p>
        <h2 className="title">
          Processo <span>simples e transparente</span>
        </h2>
        <p className="subtitle">
          Do briefing ao lançamento, você acompanha cada etapa de perto.
        </p>
        <StepContainer>
          <Step>
            <div>01</div>
          </Step>
          <div>
            <h6 className="title">Entendimento</h6>
            <p className="subtitle">
              Conversamos para entender sua ideia, objetivo e o que o projeto
              precisa entregar.
            </p>
          </div>
        </StepContainer>
        <StepContainer>
          <Step>
            <div>02</div>
          </Step>
          <div>
            <h6 className="title">Planejamento</h6>
            <p className="subtitle">
              Estruturamos a melhor solução, definindo páginas, funcionalidades
              e fluxo de navegação.
            </p>
          </div>
        </StepContainer>
        <StepContainer>
          <Step>
            <div>03</div>
          </Step>
          <div>
            <h6 className="title">Desenvolvimento</h6>
            <p className="subtitle">
              Transformamos o planejamento em um projeto real, com atenção ao
              design, responsividade e performance.
            </p>
          </div>
        </StepContainer>
        <StepContainer>
          <Step>
            <div>04</div>
          </Step>
          <div>
            <h6 className="title">Entrega e suporte</h6>
            <p className="subtitle">
              Publicamos o projeto, realizamos os ajustes finais e damos suporte
              para garantir que tudo funcione perfeitamente.
            </p>
          </div>
        </StepContainer>
      </Section>

      <Section id="pacotes">
        <p className="uptitle">Pacotes</p>
        <h2 className="title">
          Confira nossos pacotes e <span>seus benefícios</span>
        </h2>
        <p className="subtitle">Escolha a melhor opção para o seu negócio.</p>
        <CardGrid price>
          <PriceCard>
            <h6 className="name">STARTER</h6>
            <p className="subtitle">
              Para quem precisa de presença online rápida e profissional.
            </p>
            <p className="price">
              R$ <span>400</span>
            </p>
            <p className="price-sub">a partir de</p>
            <ul>
              <Item>
                <i className="bi bi-check"></i>
                <p>Landing page com até 5 seções</p>
              </Item>
              <Item>
                <i className="bi bi-check"></i>
                <p>Design responsivo (mobile + desktop)</p>
              </Item>
              <Item>
                <i className="bi bi-check"></i>
                <p>Botão para WhatsApp e formulário</p>
              </Item>
              <Item>
                <i className="bi bi-check"></i>
                <p>Publicação do site</p>
              </Item>
              <Item>
                <i className="bi bi-clock"></i>
                <p>Suporte de 15 dias</p>
              </Item>
              <Item>
                <i className="bi bi-x x"></i>
                <p>Criação de logo</p>
              </Item>
              <Item>
                <i className="bi bi-x x"></i>
                <p>Integrações com CRM</p>
              </Item>
              <Item>
                <i className="bi bi-x x"></i>
                <p>Painel administrativo</p>
              </Item>
              <Item>
                <i className="bi bi-x x"></i>
                <p>Área de login</p>
              </Item>
              <Item>
                <i className="bi bi-x x"></i>
                <p>Animações complexas</p>
              </Item>
            </ul>
          </PriceCard>
          <PriceCard destacado>
            <div className="destaque">MELHOR OPÇÃO</div>
            <h6 className="name">PRO</h6>
            <p className="subtitle">
              Site completo com mais páginas, funcionalidades e suporte
              dedicado.
            </p>
            <p className="price">
              R$ <span>600</span>
            </p>
            <p className="price-sub">a partir de</p>
            <ul>
              <Item>
                <i className="bi bi-check"></i>
                <p>
                  Pacote <b>Starter</b> incluso
                </p>
              </Item>
              <Item>
                <i className="bi bi-check"></i>
                <p>Até 4 páginas</p>
              </Item>
              <Item>
                <i className="bi bi-check"></i>
                <p>Layout personalizado</p>
              </Item>
              <Item>
                <i className="bi bi-check"></i>
                <p>SEO básico</p>
              </Item>
              <Item>
                <i className="bi bi-check"></i>
                <p>Formulário + WhatsApp</p>
              </Item>
              <Item>
                <i className="bi bi-check"></i>
                <p>Publicação do site</p>
              </Item>
              <Item>
                <i className="bi bi-clock"></i>
                <p>Suporte de 30 dias</p>
              </Item>
              <Item>
                <i className="bi bi-x x"></i>
                <p>Área do cliente</p>
              </Item>
              <Item>
                <i className="bi bi-x x"></i>
                <p>Integrações externas avançadas</p>
              </Item>
              <Item>
                <i className="bi bi-x x"></i>
                <p>Painel admin avançado</p>
              </Item>
              <Item>
                <i className="bi bi-x x"></i>
                <p>Copywriting completo</p>
              </Item>
            </ul>
          </PriceCard>
          <PriceCard>
            <h6 className="name">ULTRA</h6>
            <p className="subtitle">
              Dashboards, aplicações web e sistemas personalizados com banco de
              dados.
            </p>
            <p className="price">
              R$ <span>900</span>
            </p>
            <p className="price-sub">a partir de</p>
            <ul>
              <Item>
                <i className="bi bi-check"></i>
                <p>
                  Pacote <b>Pro</b> incluso
                </p>
              </Item>
              <Item>
                <i className="bi bi-check"></i>
                <p>Login</p>
              </Item>
              <Item>
                <i className="bi bi-check"></i>
                <p>Dashboard simples</p>
              </Item>
              <Item>
                <i className="bi bi-check"></i>
                <p>CRUD básico</p>
              </Item>
              <Item>
                <i className="bi bi-check"></i>
                <p>Banco de dados</p>
              </Item>
              <Item>
                <i className="bi bi-check"></i>
                <p>Painel admin básico</p>
              </Item>
              <Item>
                <i className="bi bi-clock"></i>
                <p>Suporte de 60 dias</p>
              </Item>
              <Item>
                <i className="bi bi-x x"></i>
                <p>Relatórios complexos</p>
              </Item>
              <Item>
                <i className="bi bi-x x"></i>
                <p>Integrações com APIs pagas</p>
              </Item>
              <Item>
                <i className="bi bi-x x"></i>
                <p>Notificações em tempo real</p>
              </Item>
              <Item>
                <i className="bi bi-x x"></i>
                <p>Permissões avançadas</p>
              </Item>
            </ul>
          </PriceCard>
        </CardGrid>
        <Card type="number" id="none">
          <h6 className="title">Serviços adicionais</h6>
          <ul className="adicionais">
            <li>
              Página extra: <b>R$80</b>
            </li>
            <li>
              Seção extra: <b>R$40</b>
            </li>
            <li>
              Integração com API: <b>a partir de R$100</b>
            </li>
            <li>
              Urgência de entrega: <b>+30%</b>
            </li>
          </ul>
        </Card>
      </Section>

      <Section primary id="contato">
        <p className="uptitle">Contato</p>
        <h2 className="title">
          Vamos conversar sobre <span>seu projeo</span>
        </h2>
        <p className="subtitle">
          Se você precisa de um site, landing page ou sistema web, podemos te
          ajudar a transformar sua ideia em algo profissional, funcional e
          pronto para crescer com o seu negócio.
        </p>
        <ContactLayout>
          <ul>
            <li className="contact">
              <i className="bi bi-whatsapp"></i>
              <div>
                <span className="uptitle">whatsapp</span>
                <h6 className="title">(21) 99463-5953</h6>
                <p className="subtitle">Contato 1</p>
              </div>
            </li>
            <li className="contact">
              <i className="bi bi-whatsapp"></i>
              <div>
                <span className="uptitle">whatsapp</span>
                <h6 className="title">(21) 966989-9636</h6>
                <p className="subtitle">Contato 2</p>
              </div>
            </li>
            <li className="contact">
              <i className="bi bi-envelope"></i>
              <div>
                <span className="uptitle">e-mail</span>
                <h6 className="title">thaliafreitas2019@gmail.com</h6>
                <p className="subtitle">Contato 1</p>
              </div>
            </li>
            <li className="contact">
              <i className="bi bi-envelope"></i>
              <div>
                <span className="uptitle">e-mail</span>
                <h6 className="title">joaomarcelo1015ba@gmail.com</h6>
                <p className="subtitle">Contato 2</p>
              </div>
            </li>
          </ul>
          <Form />
        </ContactLayout>
      </Section>
      <Footer />
    </Layout>
  )
}

export default App
