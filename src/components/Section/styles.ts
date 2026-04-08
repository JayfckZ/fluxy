import styled from 'styled-components'

export const SectionContainer = styled.section<{ primary?: boolean }>`
  background-color: ${props => props.primary ? 'var(--bg);' : 'var(--bg2)'};
`
