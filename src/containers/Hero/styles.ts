import styled from 'styled-components'

export const Hero = styled.section`
  background-color: var(--bg);
  text-align: center;
  height: 100dvh;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  min-height: calc(100dvh - 80px);

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 24px;

    div {
      display: flex;
      gap: 24px;

      @media (max-width: 768px) {
        flex-direction: column;
      }
    }
  }

  h1 {
    color: #fff;
    font-size: 36px;
    max-width: 900px;

    span {
      background: var(--grad);
      background-clip: text;
      color: transparent;
    }
  }

  p {
    color: var(--muted);
    font-size: 18px;
    max-width: 900px;
  }
`

export const Span = styled.span`
  background-color: color-mix(
    in srgb,
    var(--purple) 10%,
    transparent
  );
  color: var(--purple);
  border: 2px solid var(--purple);
  border-radius: 16px;

  padding: 8px 16px;
  display: flex;
  gap: 12px;
  align-items: center;
  font-weight: 600;

  .dot {
    width: 6px;
    height: 6px;
    background-color: var(--purple);
    border-radius: 50%;
    animation: pulse 2s infinite;
    animation-duration: 2s;
    animation-timing-function: ease;
    animation-delay: 0s;
    animation-iteration-count: infinite;
    animation-direction: normal;
    animation-fill-mode: none;
    animation-play-state: running;
    animation-name: pulse;
    animation-timeline: auto;
    animation-range-start: normal;
    animation-range-end: normal;
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 1;
    }

    50% {
      transform: scale(1.8);
      opacity: 0.4;
    }

    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
`

export const GlowOrb = styled.div`
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  pointer-events: none;
  z-index: 0;

  &.glow-1 {
    width: 400px;
    height: 400px;
    background: rgba(124,58,237,0.12);
    top: -100px;
    left: 50%;
    transform: translateX(-50%);
  }

  &.glow-2 {
    width: 300px;
    height: 300px;
    background: rgba(34, 211, 238, 0.08);
    top: 200px;
    right: 50px;
  }
`
export const Button = styled.button<{ primary?: boolean }>`
  padding: 12px 16px;
  border: 2px solid ${(props) => props.primary ? 'transparent' : '#fff'};
  border-radius: 10px;
  font-size: 18px;
  font-weight: 600;
  color: #fff;
  background: ${(props) => props.primary ? 'var(--grad2)' : 'transparent'};
  cursor: pointer;

  &:hover {
    ${(props) => props.primary && 'filter: brightness(80%);'}
    ${(props) => !props.primary && 'background-color: rgba(255, 255, 255, 0.1);'}
  }
`
