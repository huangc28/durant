import { call } from 'redux-saga/effects'
import { takeLatest } from 'redux-saga'

import { validateResetToken } from '../apis/forgotPassword'
import * as actionTypes from '../actions/forgotPassword'

function * watchRequestForgotPasswordFlow (action) {
  console.log('BRYAN: watchRequestForgotPasswordFlow', action)
}

function * watchValidateResetPasswordToken (action) {
  const { token } = action

  try {
    const response = yield call(validateResetToken, token)

    if (!response.userid) {
      // yield put()
    }

    console.log('BRYAN: FORGOT PASSWORD RESPONSE', response)
  } catch (error) {
    console.log('BRYAN: FORGOT PASSWORD ERROR', error)
  }
}

export default function * forgotPasswordFlow () {
  yield [
    takeLatest(actionTypes.REQUEST_RESET_PASSWORD, watchRequestForgotPasswordFlow),
    takeLatest(actionTypes.VALIDATE_RESET_TOKEN, watchValidateResetPasswordToken),
  ]
}
