import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'

import LinkWrapper from 'components/LinkWrapper'

import * as SC from './styles'

const PagesTemplate = () => {
  return (
    <SC.Content>
      <LinkWrapper href="/">
        <CloseOutline size={32} />
      </LinkWrapper>

      <SC.Heading>My Trips</SC.Heading>

      <SC.Body>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti
          quaerat placeat tempore impedit enim est nemo soluta odio. Quia
          consequatur fugiat tenetur accusamus aliquid itaque animi, deleniti
          eos porro. Beatae.
        </p>
      </SC.Body>
    </SC.Content>
  )
}

export default PagesTemplate
