import React from 'react'
import { Route } from 'react-router'
import App from './Layout/App'
import Terms from './containers/Terms'

export default (
  <Route path="/" component={App} >
    <Route path="/terms" component={Terms} />
  </Route>
)
