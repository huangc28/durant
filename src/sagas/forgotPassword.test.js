/* eslint-disable */
import { call, put } from 'redux-saga/effects'

import {
  requestResetPassword,
  validateResetToken,
} from '../apis/forgotPassword'
import * as actions from '../actions/forgotPassword'
import * as sagas from './forgotPassword'


test('Test request forgot password flow success', () => {
  const action = { payload: { email: 'test123@outsm.com' } }
  const gen = sagas.watchRequestForgotPasswordFlow(action)
  expect(gen.next().value).toMatchObject(call(requestResetPassword, action.payload.email))

  const response = { status: '200', message: 'testtoken123' }
  expect(gen.next(response).value).toMatchObject(put(actions.requestResetPasswordSuccess(response.message)))
})

test('Validating reset password flow success', () => {
  const data = { payload: { token: 'token123' } }
  const gen = sagas.watchValidateResetPasswordToken(data)
  expect(gen.next().value).toMatchObject(
    call(validateResetToken, data.payload.token)
  )

  const response = {
    status: '200',
    userId: 'testuser123',
    token: data.payload.token,
  }

  expect(gen.next(response).value).toMatchObject(
    put(actions.validateResetTokenSuccess(response.userId, response.token))
  )
})

test('Validating reset password flow failed', () => {
  const data = { payload: { token: 'token123' } }
  const gen = sagas.watchValidateResetPasswordToken(data)
  expect(gen.next().value).toMatchObject(
    call(validateResetToken, data.payload.token)
  )

  const response = {
    status: '500',
    message: 'Internal server error',
  }

  expect(gen.next(response).value).toMatchObject(
    put(actions.validateResetTokenFailed(response.message))
  )
})
