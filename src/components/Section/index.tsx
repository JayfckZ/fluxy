import type { ReactNode } from "react"
import { SectionContainer } from "./styles"

const Section = ( content: ReactNode, primary?: boolean) => {

  return (
    <SectionContainer primary={primary}>
      <div className="container">
        {content}
      </div>
    </SectionContainer>
  )
}

export default Section
