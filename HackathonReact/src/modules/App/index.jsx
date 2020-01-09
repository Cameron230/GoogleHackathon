import React from 'react'
import { SiteLayout, Container } from '@jsluna/react'

import Header from 'components/Header'
import Footer from 'components/Footer'

import Routes from './Routes'

const App = () => (
  <SiteLayout>
    <Header />
    <Container soft className="ln-u-soft-ends">
      <Routes />
    </Container>
    <Footer />
  </SiteLayout>
)

export default App
