import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;


  background-color: var(--card);
  border: 2px solid var(--card-border);
  border-radius: 16px;
  padding: 24px;

  .icon-number {
    /* margin-bottom: 24px; */
    font-weight: 700;
    font-size: 40px;
    background: var(--grad2);
    background-clip: text;
    color: transparent;
  }

  &:hover {
    border-color: var(--purple);
  }
`
