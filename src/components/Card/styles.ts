import styled from 'styled-components'

export const CardContainer = styled.div<{ id?: string }>`
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
    border-color: ${props => props.id === 'none' ? 'var(--card-border)' : 'var(--purple)'};
  }

  .adicionais {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    color: white;
    font-size: 18px;


    list-style: disc;

    li {
      margin-left: 18px;
      margin-bottom: 8px;
    }
  }
`

export const PriceCard = styled(CardContainer)<{ destacado?: boolean }>`
  color: var(--muted);
  ${(props) => props.destacado && 'border-color: var(--purple);'}
  ${(props) => !props.destacado && 'border-width: 1px;'}
  position: relative;

  .destaque {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%);
    background-color: var(--purple);
    color: #fff;
    font-weight: 700;
    display: ${(props) => (props.destacado ? 'block' : 'none')};
    padding: 4px 8px;
    border-radius: 0 0 8px 8px;
  }

  &:hover {
    border-color: ${(props) => !props.destacado && 'var(--blue);'};
  }

  .name,
  .subtitle {
    font-size: 16px;
    max-width: 700px;
  }

  .name {
    font-weight: bold;
    margin-bottom: 8px;
  }

  .price {
    font-weight: 600;
    margin-top: 24px;

    span {
      font-size: 44px;
      color: #fff;
      font-weight: 700;
    }
  }

  .price-sub {
    font-size: 14px;
    font-weight: 500;
    padding-bottom: 36px;
    margin-bottom: 24px;
    border-bottom: 1px solid var(--card-border);
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`

export const Item = styled.li`
  display: flex;
  gap: 16px;

  i {
    color: #86efac;
    background-color: rgba(134, 239, 172, 0.15);
    border-radius: 50%;
    width: 17px;
    height: 17px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;

    &.bi-x {
      color: var(--muted);
      background-color: rgba(148, 163, 184, 0.1);
    }

    &.bi-clock {
      color: var(--blue);
      background-color: rgba(0, 110, 255, 0.1);
    }
  }

  p {
    color: #fff;
  }
`

export const Form = styled(CardContainer)`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  width: 100%;

  .duplo {
    display: flex;
    gap: 16px;

    div {
      width: 100%;
    }
  }

  label {
    color: var(--muted);
    font-weight: 600;
    font-size: 14px;
    display: block;
    margin-bottom: 8px;
  }

  input,
  textarea {
    padding: 8px 16px;
    height: 36px;
    background-color: transparent;
    border: 1px solid var(--card-border);
    border-radius: 8px;
    color: #fff;
    font-weight: 600;
    width: 100%;
    resize: none;

    &::placeholder {
      color: var(--muted);
      font-weight: 300;
    }

    &:focus {
      outline: 2px solid var(--purple);
    }
  }
  textarea {
    height: 200px;
  }

  button {
    cursor: pointer;
    background: var(--grad);
    height: 40px;
    padding: 8px 16px;
    color: #fff;
    font-weight: 700;
    font-size: 18px;
    border: none;
    border-radius: 8px;

    span {
      height: 24px !important;
    }

    &:hover {
      filter: brightness(80%);
    }
  }

  .alert {
    text-align: center;
    font-size: 12px;
    color: var(--muted);
  }

  &:hover {
    border-color: var(--card-border);
  }
`
