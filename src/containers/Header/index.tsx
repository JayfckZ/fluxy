import { Header as HeaderContainer, NavLink, NavLink2 } from "./styles"
import fluxy from '/fluxy-logo.png'

const Header = () => {
  return (
    <HeaderContainer>
      <img src={fluxy} width={'128px'} alt="" />
      <nav>
        <NavLink href="">Serviços</NavLink>
        <NavLink href="">Por que a Fluxy</NavLink>
        <NavLink href="">Processo</NavLink>
        <NavLink2 href="">Falar com a equipe</NavLink2>
      </nav>
    </HeaderContainer>
  )
}

export default Header
