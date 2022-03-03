import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'

import LinkWrapper from 'components/LinkWrapper'

import * as SC from './styles'

export type PagesTemplateProps = {
  heading: string
  body: string
}

const PagesTemplate = ({ heading, body }: PagesTemplateProps) => {
  return (
    <SC.Content>
      <LinkWrapper href="/">
        <CloseOutline size={32} />
      </LinkWrapper>

      <SC.Heading>{heading}</SC.Heading>

      <SC.Body>
        <div dangerouslySetInnerHTML={{ __html: body }} />
      </SC.Body>
    </SC.Content>
  )
}

export default PagesTemplate
