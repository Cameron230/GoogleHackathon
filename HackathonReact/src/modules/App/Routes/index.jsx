import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Loadable from 'react-loadable'

import routes from 'routes'

import Home from 'modules/Home'
import LoadingIndicator from 'components/LoadingIndicator'

const createLoader = loader =>
  Loadable({
    loader,
    loading: LoadingIndicator,
  })

const Routes = () => (
  <Switch>
    {routes.map(({ path, loader }) => (
      <Route key={path} path={path} component={createLoader(loader)} />
    ))}
    <Route component={Home} />
  </Switch>
)

export default Routes
