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

export const NavLink = styled.a`
  color: var(--muted);
  font-size: 18px;
  font-weight: 600;
  text-decoration: none;

  &:hover {
    color: var(--text);
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
