import { call, put } from 'redux-saga/effects'
import { takeLatest } from 'redux-saga'
import { browserHistory } from 'react-router'

import {
  requestResetPassword,
  validateResetToken,
  resetPassword,
} from '../apis/forgotPassword'
import * as actions from '../actions/forgotPassword'

const SUCCESS_STATUS = '200'

export function * watchRequestForgotPasswordFlow (action) {
  const { payload: { email } } = action

  try {
    const response = yield call(requestResetPassword, email)

    if (response.status !== SUCCESS_STATUS) {
      throw new Error(response.message)
    }

    yield put(actions.requestResetPasswordSuccess(response.message))
  } catch (error) {
    yield put(actions.requestResetPasswordFailed(error.message))
  }
}

export function * watchValidateResetPasswordToken (action) {
  const { payload: { token } } = action

  try {
    const response = yield call(validateResetToken, token)

    if (response.status !== SUCCESS_STATUS) {
      throw new Error(response.message)
    }

    yield put(actions.validateResetTokenSuccess(response.userId, response.token))

    browserHistory.push('/forgot-password/reset-password')
  } catch (error) {
    yield put(actions.validateResetTokenFailed(error.message))
    browserHistory.push('forgot-password/validate-token/failed')
  }
}

export function * watchResetPasswordFlow (action) {
  const { payload: { userId, token, newPassword } } = action
  try {
    const response = yield call(resetPassword, userId, token, newPassword)

    if (response.status !== SUCCESS_STATUS) {
      throw new Error(response.message)
    }

    yield put(actions.requestResetPasswordSuccess(response))

    browserHistory.push('/forgot-password/reset-password-success')
  } catch (error) {
    yield put(actions.resetPasswordFailed(error.message))

    browserHistory.push('/forgot-password/reset-password-failed')
  }
}

export default function * forgotPasswordFlow () {
  yield [
    takeLatest(actions.REQUEST_RESET_PASSWORD, watchRequestForgotPasswordFlow),
    takeLatest(actions.VALIDATE_RESET_TOKEN, watchValidateResetPasswordToken),
    takeLatest(actions.RESET_PASSWORD, watchResetPasswordFlow),
  ]
}
