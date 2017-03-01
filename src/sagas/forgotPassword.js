import { call, put } from 'redux-saga/effects'
import { takeLatest } from 'redux-saga'
import { browserHistory } from 'react-router'

import {
  requestResetPassword,
  requestResetPasswordSuccess,
  requestResetPasswordFailed,
  validateResetToken,
  resetPassword,
} from '../apis/forgotPassword'
import * as actions from '../actions/forgotPassword'

const SUCCESS_STATUS = '200'

function * watchRequestForgotPasswordFlow (action) {
  const { payload: { email } } = action

  try {
    const response = yield call(requestResetPassword, email)

    if (response.status !== SUCCESS_STATUS) {
      throw new Error(response.message)
    }

    yield put(requestResetPasswordSuccess(response.token))
  } catch (error) {
    yield put(requestResetPasswordFailed(error.message))
  }
}

function * watchValidateResetPasswordToken (action) {
  const { payload: { token } } = action

  try {
    const response = yield call(validateResetToken, token)

    if (response.status !== SUCCESS_STATUS) {
      throw new Error(response.message)
    }
    yield put(actions.validateResetTokenSuccess(response))
  } catch (error) {
    yield put(actions.validateResetTokenFailed(error.message))
  }
}

function * watchResetPasswordFlow (action) {
  const { payload: { userId, token, newPassword } } = action
  try {
    const response = yield call(resetPassword, userId, token, newPassword)

    if (response.status !== SUCCESS_STATUS) {
      throw new Error(response.message)
    }

    yield put(actions.requestResetPasswordSuccess(response))
  } catch (error) {
    yield put(actions.resetPasswordFailed(error.message))
  }
}

export default function * forgotPasswordFlow () {
  yield [
    takeLatest(actions.REQUEST_RESET_PASSWORD, watchRequestForgotPasswordFlow),
    takeLatest(actions.VALIDATE_RESET_TOKEN, watchValidateResetPasswordToken),
    takeLatest(actions.RESET_PASSWORD, watchResetPasswordFlow),
  ]
}
