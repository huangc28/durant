import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './layout/App'
import Legal from './layout/Legal'

import Home from './containers/Home'

import Terms from './containers/Terms'
import Privacy from './containers/Privacy'

import ValidateToken from './containers/ValidateToken'
import ValidateTokenFailed from './containers/ValidateTokenFailed'

import ResetPassword from './containers/ResetPassword'
import ResetPasswordSuccess from './containers/ResetPasswordSuccess'
import ResetPasswordFailed from './containers/ResetPasswordFailed'

import ForgotPasswordLayout from './layout/ForgotPassword'

export default (
  <Route path="/" component={App} >
    <IndexRoute component={Home} />
    <Route path="home" component={Home} />

    {/* legal */}
    <Route path="/legal" component={Legal}>
      <Route path="terms" component={Terms} />
      <Route path="privacy" component={Privacy} />
    </Route>

    <Route path="/validate-token/:token" component={ValidateToken} />

    <Route path="/forgot-password" component={ForgotPasswordLayout} >
      <Route path="token-expired" component={ValidateTokenFailed} />
      <Route path="reset-password" component={ResetPassword} />
      <Route path="reset-password-success" component={ResetPasswordSuccess} />
      <Route path="reset-password-failed" component={ResetPasswordFailed} />
    </Route>
  </Route>
)
