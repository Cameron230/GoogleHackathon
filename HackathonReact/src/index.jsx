import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import './scss/main.scss'

import App from './modules/App'

const render = AppComponent => {
  ReactDOM.render(
    <Router>
      <AppComponent />
    </Router>,
    document.getElementById('app'),
  )
}

render(App)

if (module.hot) {
  module.hot.accept()
}
