import type { ReactNode } from "react"
import { SectionContainer } from "./styles"

type SectionProps = {
  children: ReactNode,
  primary?: boolean
  id?: string
  className?: string
}

const Section = ({ children, primary, id, className }: SectionProps) => {

  return (
    <SectionContainer primary={primary} id={id} className={className}>
      <div className="container">
        {children}
      </div>
    </SectionContainer>
  )
}

export default Section
