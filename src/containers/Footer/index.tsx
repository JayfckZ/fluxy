import logo from '/fluxy-logo.png'
import styled from 'styled-components'

const FooterContainer = styled.footer`
  background-color: var(--bg);
  color: var(--muted);
  font-size: 14px;
  padding: 36px 0;
  border-top: 1px solid var(--card-border);

  p {
    max-width: 400px;
  }
`

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <FooterContainer>
      <div className="container">
        <img src={logo} width={'128px'} alt="Fluxy Logo" />
        <p>
          Agência digital especializada em landing pages, sites e sistemas web.
        </p>
        <br />
        <p>© {year} Fluxy. Todos os direitos reservados.</p>
      </div>
    </FooterContainer>
  )
}

export default Footer
