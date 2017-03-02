import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './layout/App'
import Legal from './layout/Legal'

import Home from './containers/Home'

import Terms from './containers/Terms'
import Privacy from './containers/Privacy'

import ValidateToken from './containers/ValidateToken'
import ValidateTokenFailed from './containers/ValidateTokenFailed'

import ForgotPassword from './containers/ForgotPassword'
import ResetPassword from './containers/ResetPassword'
import ResetPasswordSuccess from './containers/ResetPasswordSuccess'
import ResetPasswordFailed from './containers/ResetPasswordFailed'

export default (
  <Route path="/" component={App} >
    <IndexRoute component={Home} />
    <Route path="home" component={Home} />

    {/* legal terms */}
    <Route path="legal" component={Legal}>
      <Route path="terms" component={Terms} />
      <Route path="privacy" component={Privacy} />
    </Route>

    {/* credentials reset */}
    <Route path="forgot-password" component={ForgotPassword} />

    <Route path="forgot-password/validate-token/:token" component={ValidateToken} />
    <Route path="forgot-password/validate-token/failed" component={ValidateTokenFailed} />

    <Route path="forgot-password/reset-password" component={ResetPassword} />
    <Route path="forgot-password/reset-password-success" component={ResetPasswordSuccess} />
    <Route path="forgot-password/reset-password-failed" component={ResetPasswordFailed} />
  </Route>
)
