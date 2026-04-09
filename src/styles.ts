import styled from 'styled-components'

export const Layout = styled.main`
  display: flex;
  flex-direction: column;
`

export const ContactLayout = styled.div`
  display: flex;
  gap: 32px;
  margin-top: 32px;

  .contact {
    padding: 16px;
    background-color: var(--card);
    border: 2px solid var(--card-border);
    display: flex;
    border-radius: 16px;
    align-items: center;
    gap: 16px;
    margin-bottom: 16px;

    i {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 16px;
      width: 52px;
      height: 52px;
      font-size: 28px;
      border-radius: 50%;

      &.bi-whatsapp {
        color: #25D366;
        background-color: rgba(18, 140, 126, 0.1);
      }
      &.bi-envelope {
        color: var(--blue);
        background-color: rgba(0, 0, 255, 0.1);
      }
    }

    .uptitle, .subtitle {
      font-size: 12px;
      font-weight: 400;
      letter-spacing: normal;
      color: var(--muted);
    }
    .title {
      font-size: 14px;
      margin: 4px 0;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`
