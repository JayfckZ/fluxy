import type { ReactNode } from "react"
import { SectionContainer } from "./styles"

type SectionProps = {
  children: ReactNode,
  primary?: boolean
  id?: string
}

const Section = ({ children, primary, id }: SectionProps) => {

  return (
    <SectionContainer primary={primary} id={id}>
      <div className="container">
        {children}
      </div>
    </SectionContainer>
  )
}

export default Section
