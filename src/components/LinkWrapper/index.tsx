import type { ReactNode } from 'react'
import Link from 'next/link'

import * as SC from './styles'

type LinkWrapperProps = {
  href: string
  children: ReactNode
}

const LinkWrapper = ({ href, children }: LinkWrapperProps) => {
  return (
    <SC.Wrapper>
      <Link href={href}>{children}</Link>
    </SC.Wrapper>
  )
}

export default LinkWrapper
