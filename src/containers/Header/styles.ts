import styled from 'styled-components'

export const Header = styled.header`
  padding: 8px 40px;
  background-color: rgba(8, 8, 16, 0.85);
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: sticky;
  top: 0;
  left: 0;
  z-index: 50;

  nav {
    display: flex;
    align-items: center;
    gap: 16px;

    @media (max-width: 768px) {
      display: none;
    }
  }
`

type NavLinkProps = {
  active?: boolean
}

export const NavLink = styled.a<NavLinkProps>`
  position: relative;
  color: ${({ active }) => (active ? 'var(--text)' : 'var(--muted)')};
  font-size: 18px;
  font-weight: 600;
  text-decoration: none;
  padding: 4px 0;
  transition: color 0.2s ease;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -6px;
    width: 100%;
    height: 2px;
    background: var(--grad);
    transform: scaleX(${({ active }) => (active ? 1 : 0)});
    transform-origin: left;
    transition: transform 0.25s ease;
  }

  &:hover {
    color: var(--text);
  }

  &:hover::after {
    transform: scaleX(1);
  }
`

export const NavLink2 = styled(NavLink)`
  background-image: var(--grad2);
  color: var(--text);
  padding: 8px 16px;
  border-radius: 8px;

  &:hover {
    filter: brightness(90%);
  }
`
