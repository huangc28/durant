import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './Layout/App'
import Terms from './containers/Terms'
import Home from './containers/Home'

export default (
  <Route path="/" component={App} >
    <IndexRoute component={Home} />
    <Route path="/home" component={Home} />
    <Route path="/terms" component={Terms} />
  </Route>
)
