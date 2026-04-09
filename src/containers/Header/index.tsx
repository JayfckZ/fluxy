import { useEffect, useState } from 'react'
import { Header, NavLink, NavLink2 } from './styles'
import { observeSections } from '../../functions'
import fluxy from '/fluxy-logo.png'

const HeaderContainer = () => {
  const [active, setActive] = useState<string>('')

  useEffect(() => {
    const cleanup = observeSections(
      ['hero', 'serviços', 'sobre', 'processo', 'pacotes', 'contato'],
      setActive
    )

    return cleanup
  }, [])

  return (
    <Header>
      <a href="#">
        <img src={fluxy} width="128" alt="Fluxy Logo" />
      </a>

      <nav>
        <NavLink href="#serviços" active={active === 'serviços'}>
          Serviços
        </NavLink>

        <NavLink href="#sobre" active={active === 'sobre'}>
          Sobre nós
        </NavLink>

        <NavLink href="#processo" active={active === 'processo'}>
          Processo
        </NavLink>

        <NavLink href="#pacotes" active={active === 'pacotes'}>
          Pacotes
        </NavLink>

        <NavLink2 href="#contato">
          Falar com a equipe
        </NavLink2>
      </nav>
    </Header>
  )
}

export default HeaderContainer
