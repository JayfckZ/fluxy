import styled from 'styled-components'

export const SectionContainer = styled.section<{ primary?: boolean }>`
  background-color: ${(props) =>
    props.primary ? 'var(--bg);' : 'var(--bg2);'};
  padding: 36px 0;
  scroll-margin-top: 80px;

  .uptitle {
    color: var(--purple);
    font-weight: 600;
    font-size: 12px;
    letter-spacing: 2px;
    text-transform: uppercase;
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

export const CardGrid = styled.div<{ price?: boolean }>`
  display: grid;
  grid-template-columns: ${props => props.price ? 'repeat(3, 1fr)' : 'repeat(2, 1fr)'};
  grid-gap: 36px;
  margin: 40px 0;


  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`

export const Step = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: 2px;
  border-radius: 50%;
  background: var(--grad);

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: var(--bg);

    font-size: 32px;
    font-weight: bold;
    color: #fff;
  }
`

export const StepContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 16px;
  margin-top: 64px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }

  @media (min-width: 768px) {
    .title {
      margin-top: 0 !important;
    }
  }

`
