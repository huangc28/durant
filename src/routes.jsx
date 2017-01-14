import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './Layout/App'
import Terms from './containers/Terms'

export default (
  <Route path="/" component={App} >
    <IndexRoute component={Terms} />
  </Route>
)
