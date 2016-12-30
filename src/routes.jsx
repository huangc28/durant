import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './Layout/App'
import Home from './containers/Home'
import Terms from './containers/Terms'

export default (
  <Route path="/" component={App} >
    <IndexRoute component={Home} />
    <Route path="/home" component={Home} />
    <Route path="/Terms" component={Terms} />
  </Route>
)
