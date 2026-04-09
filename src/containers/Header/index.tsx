import { Header as HeaderContainer, NavLink, NavLink2 } from "./styles"
import fluxy from '/fluxy-logo.png'

const Header = () => {
  return (
    <HeaderContainer>
      <img src={fluxy} width={'128px'} alt="Fluxy Logo" />
      <nav>
        <NavLink href="#serviços">Serviços</NavLink>
        <NavLink href="#sobre">Sobre nós</NavLink>
        <NavLink href="#processo">Processo</NavLink>
        <NavLink href="#pacotes">Pacotes</NavLink>
        <NavLink2 href="#contato">Falar com a equipe</NavLink2>
      </nav>
    </HeaderContainer>
  )
}

export default Header
