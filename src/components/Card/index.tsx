import type { ReactNode } from 'react'
import { CardContainer } from './styles'

type CardProps = {
  type: 'icon' | 'number'
  icon?: string
  number?: string
  children: ReactNode
}

const Card = ({ type, icon, number, children }: CardProps) => {
  return (
    <CardContainer>
      {type === 'icon' ? (
        <i className={`bi bi-${icon} icon-number`}></i>
      ) : (
        <span className="icon-number">{number}</span>
      )}
      {children}
    </CardContainer>
  )
}

export default Card
