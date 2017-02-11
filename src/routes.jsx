import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './layout/App'
import Legal from './layout/Legal'

import Home from './containers/Home'
import Terms from './containers/Terms'
import Privacy from './containers/Privacy'

export default (
  <Route path="/" component={App} >
    <IndexRoute component={Home} />
    <Route path="home" component={Home} />
    <Route path="legal" component={Legal}>
      <Route path="terms" component={Terms} />
      <Route path="privacy" component={Privacy} />
    </Route>
  </Route>
)
