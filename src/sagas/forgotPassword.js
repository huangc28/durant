import { call, put } from 'redux-saga/effects'
import { takeLatest } from 'redux-saga'

import {
  requestForgotPassword,
  validateResetToken,
} from '../apis/forgotPassword'
import * as actions from '../actions/forgotPassword'

const SUCCESS_STATUS = '200'

function * watchRequestForgotPasswordFlow (action) {
  const { email } = action

  try {
    const response = yield call(requestForgotPassword, email)

    console.log('BRYAN: response', response)
  } catch (error) {
    console.log('BRYAN: response', error)
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

export default function * forgotPasswordFlow () {
  yield [
    takeLatest(actions.REQUEST_RESET_PASSWORD, watchRequestForgotPasswordFlow),
    takeLatest(actions.VALIDATE_RESET_TOKEN, watchValidateResetPasswordToken),
  ]
}
