import styled from 'styled-components'

export const SectionContainer = styled.section<{ primary?: boolean }>`
  background-color: ${props => props.primary ? 'var(--bg);' : 'var(--bg2);'};
  padding: 36px 0;

  .uptitle {
    color: var(--purple);
    font-weight: 600;
    font-size: 12px;
    letter-spacing: 2px;
  }

  .title {
    color: #fff;
    font-size: 28px;
    max-width: 900px;
    margin: 24px 0;

    span {
      background: var(--grad);
      background-clip: text;
      color: transparent;
    }
  }
  .subtitle {
    color: var(--muted);
    font-size: 16px;
    max-width: 700px;
  }
`

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 36px;
  margin: 40px 0;

`
