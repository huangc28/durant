/* eslint-disable */
import { call, put } from 'redux-saga/effects'

import { requestResetPassword } from '../apis/forgotPassword'
import * as actions from '../actions/forgotPassword'
import * as sagas from './forgotPassword'


test('Test request forgot password flow success', () => {
  const action = { payload: { email: 'test123@outsm.com' } }
  const gen = sagas.watchRequestForgotPasswordFlow(action)
  expect(gen.next().value).toMatchObject(call(requestResetPassword, action.payload.email))

  const response = { status: '200', message: 'testtoken123' }
  expect(gen.next(response).value).toMatchObject(put(actions.requestResetPasswordSuccess(response.message)))
})
