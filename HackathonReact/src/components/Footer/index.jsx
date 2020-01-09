import React from 'react'
import { Accordion, AccordionItem } from '@jsluna/accordion'
import { ListGroup, ListGroupItem } from '@jsluna/list'
const links = [
  'Privacy hub',
  'Privacy policy',
  'Cookies policy',
  'Accessibility',
  'Terms of use',
]
import {
  Container,
  GridWrapper,
  FlagWrapper,
  FlagBody,
  FlagComponent,
} from '@jsluna/grid'

import { Footer as LunaFooter } from '@jsluna/react'

const Footer = () => (
  <Container>
    <hr className="ln-u-push-ends-xl" />

    <FlagWrapper respondAt="sm" className="ln-u-caption">
      <FlagBody className="ln-u-push-right-lg">
        <span className="ln-u-display-block ln-u-font-weight-bold">
          Sainsbury&rsquo;s, Live Well For Less
        </span>
        &copy; J Sainsbury plc {new Date().getFullYear()}
      </FlagBody>
      <FlagComponent alignment="top">
        <div className="ln-u-display-flex ln-u-flex-wrap">
          {links.map((link, index) => (
            <span
              className="ln-u-display-flex ln-u-align-items-center ln-u-text-align-center"
              key={link}
            >
              <a href="#" className="ln-o-bare-link">
                {link}
              </a>
              {index !== links.length - 1 && (
                <span className="ln-u-push-sides-sm">|</span>
              )}
            </span>
          ))}
        </div>
      </FlagComponent>
    </FlagWrapper>
  </Container>
)

Footer.displayName = 'Footer'

export default Footer
